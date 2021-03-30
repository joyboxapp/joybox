import { factory } from 'ulid';
const uniqueID = factory();
import OLSKRemoteStorage from 'OLSKRemoteStorage';

const mod = {

	JBXDocumentErrors (inputData, options = {}) {
		if (typeof inputData !== 'object' || inputData === null) {
			throw new Error('JBXErrorInputNotValid');
		}

		const errors = {};

		if (typeof inputData.JBXDocumentID !== 'string') {
			errors.JBXDocumentID = [
				'JBXErrorNotString',
			];
		} else if (!inputData.JBXDocumentID.trim()) {
			errors.JBXDocumentID = [
				'JBXErrorNotFilled',
			];
		}

		if (!(inputData.JBXDocumentCreationDate instanceof Date) || Number.isNaN(inputData.JBXDocumentCreationDate.getTime())) {
			errors.JBXDocumentCreationDate = [
				'JBXErrorNotDate',
			];
		}

		if (!(inputData.JBXDocumentModificationDate instanceof Date) || Number.isNaN(inputData.JBXDocumentModificationDate.getTime())) {
			errors.JBXDocumentModificationDate = [
				'JBXErrorNotDate',
			];
		}

		if (typeof inputData.JBXDocumentNotes !== 'string') {
			errors.JBXDocumentNotes = [
				'JBXErrorNotString',
			];
		}

		if (typeof inputData.JBXDocumentURL !== 'undefined') {
			if (typeof inputData.JBXDocumentURL !== 'string') {
				errors.JBXDocumentURL = [
					'JBXErrorNotString',
				];
			}
		}

		if (typeof inputData.JBXDocumentName !== 'undefined') {
			if (typeof inputData.JBXDocumentName !== 'string') {
				errors.JBXDocumentName = [
					'JBXErrorNotString',
				];
			}
		}

		if (typeof inputData.JBXDocumentEmbedURL !== 'undefined') {
			if (typeof inputData.JBXDocumentEmbedURL !== 'string') {
				errors.JBXDocumentEmbedURL = [
					'JBXErrorNotString',
				];
			}
		}

		if (typeof inputData.JBXDocumentDidFetch !== 'undefined') {
			if (typeof inputData.JBXDocumentDidFetch !== 'boolean') {
				errors.JBXDocumentDidFetch = [
					'JBXErrorNotBoolean',
				];
			}
		}

		if (typeof inputData.JBXDocumentIsArchived !== 'undefined') {
			if (typeof inputData.JBXDocumentIsArchived !== 'boolean') {
				errors.JBXDocumentIsArchived = [
					'JBXErrorNotBoolean',
				];
			}
		}

		return Object.entries(errors).length ? errors : null;
	},
	
	JBXDocumentDirectory () {
		return 'jbx_documents';
	},

	JBXDocumentObjectPath (inputData) {
		return `${ mod.JBXDocumentDirectory() }/${ inputData.JBXDocumentID }`;
	},

	JBXDocumentStub (inputData) {
		return {
			JBXDocumentID: inputData.split('/').pop(),
		};
	},

};

export default Object.assign(mod, {
	ZDRSchemaKey: 'JBXDocument',
	ZDRSchemaDispatchValidate: mod.JBXDocumentErrors,
	ZDRSchemaPath: mod.JBXDocumentObjectPath,
	ZDRSchemaStub: mod.JBXDocumentStub,
	ZDRSchemaMethods: {
		
		JBXDocumentCreate (inputData) {
			if (typeof inputData !== 'object' || inputData === null) {
				throw new Error('JBXErrorInputNotValid');
			}

			const JBXDocumentCreationDate = new Date();

			return this.App.JBXDocument.ZDRModelWriteObject(Object.assign(inputData, Object.assign({
				JBXDocumentID: uniqueID(),
				JBXDocumentCreationDate,
				JBXDocumentModificationDate: JBXDocumentCreationDate,
			}, inputData)));
		},

		JBXDocumentUpdate (inputData) {
			if (typeof inputData !== 'object' || inputData === null) {
				throw new Error('JBXErrorInputNotValid');
			}

			return this.App.JBXDocument.ZDRModelWriteObject(Object.assign(inputData, {
				JBXDocumentModificationDate: new Date(),
			}));
		},

		async JBXDocumentList () {
			return Object.values(await this.App.ZDRStorageListingObjects(mod.JBXDocumentDirectory())).map(OLSKRemoteStorage.OLSKRemoteStoragePostJSONParse);;
		},

	},
});