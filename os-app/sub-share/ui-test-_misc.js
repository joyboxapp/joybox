const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

const JBXPlayLogic = require('../open-play/ui-logic.js').default;
const OLSKHash = require('OLSKHash');

describe('JBXPlayShare_Misc', function () {

	const items = [StubDocumentObjectValid(), StubDocumentObjectValid()];

	const uValue = function (inputData) {
		return browser.window.location.origin + require('../open-play/controller.js').OLSKControllerRoutes().shift().OLSKRoutePath + '/#' + OLSKHash.OLSKHashString({
			[JBXPlayLogic.JBXPlayInboxAnchor()]: encodeURIComponent(JSON.stringify(inputData))
		});
	};

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			JBXPlayShareItems: JSON.stringify(items),
		});
	});

	describe('JBXPlayShareLinkField', function test_JBXPlayShareLinkField () {

		it('sets type', function () {
			browser.assert.attribute(JBXPlayShareLinkField, 'type', 'text');
		});
		
		it('sets onClick', function () {
			browser.assert.attribute(JBXPlayShareLinkField, 'onClick', 'this.select()');
		});

		it('sets value', function () {
			browser.assert.input(JBXPlayShareLinkField, uValue(items));
		});

		context('reorder', function () {
			
			before(function () {
				return browser.pressButton('.down');
			});

			it('sets value', function () {
				browser.assert.input(JBXPlayShareLinkField, uValue(items.reverse()));
			});
		
		});
		
	});

});
