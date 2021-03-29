const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('JOXPlayDetail_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			JOXPlayDetailItem: JSON.stringify(StubDocumentObjectValid()),
		});
	});

	describe('JOXPlayDetailToolbar', function test_JOXPlayDetailToolbar () {

		it('classes OLSKToolbar', function () {
			browser.assert.hasClass(JOXPlayDetailToolbar, 'OLSKToolbar');
		});

		it('classes OLSKToolbarJustify', function () {
			browser.assert.hasClass(JOXPlayDetailToolbar, 'OLSKToolbarJustify');
		});

		it('classes OLSKMobileViewHeader', function () {
			browser.assert.hasClass(JOXPlayDetailToolbar, 'OLSKMobileViewHeader');
		});
		
		it('classes OLSKCommonEdgeBottom', function () {
			browser.assert.hasClass(JOXPlayDetailToolbar, 'OLSKCommonEdgeBottom');
		});
		
	});

	describe('JOXPlayDetailToolbarBackButton', function test_JOXPlayDetailToolbarBackButton () {
		
		it('classes OLSKDecorButtonNoStyle', function () {
			browser.assert.hasClass(JOXPlayDetailToolbarBackButton, 'OLSKDecorButtonNoStyle');
		});

		it('classes OLSKDecorTappable', function () {
			browser.assert.hasClass(JOXPlayDetailToolbarBackButton, 'OLSKDecorTappable');
		});

		it('classes OLSKToolbarButton', function () {
			browser.assert.hasClass(JOXPlayDetailToolbarBackButton, 'OLSKToolbarButton');
		});

		it('classes OLSKVisibilityMobile', function () {
			browser.assert.hasClass(JOXPlayDetailToolbarBackButton, 'OLSKVisibilityMobile');
		});

		context('click', function () {
			
			before(function () {
				browser.assert.text('#TestJOXPlayDetailDispatchBack', '0');
			});
			
			before(function () {
				return browser.pressButton(JOXPlayDetailToolbarBackButton);
			});

			it('sends JOXPlayDetailDispatchBack', function () {
				browser.assert.text('#TestJOXPlayDetailDispatchBack', '1');
			});
		
		});
	
	});

	describe('JOXPlayDetailToolbarBackButtonImage', function test_JOXPlayDetailToolbarBackButtonImage () {

		it('sets src', function () {
			browser.assert.elements(`${ JOXPlayDetailToolbarBackButtonImage } #_OLSKSharedBack`, 1);
		});
	
	});

	describe('JOXPlayDetailToolbarArchiveButton', function test_JOXPlayDetailToolbarArchiveButton () {
		
		it('classes OLSKDecorButtonNoStyle', function () {
			browser.assert.hasClass(JOXPlayDetailToolbarArchiveButton, 'OLSKDecorButtonNoStyle');
		});

		it('classes OLSKDecorTappable', function () {
			browser.assert.hasClass(JOXPlayDetailToolbarArchiveButton, 'OLSKDecorTappable');
		});

		it('classes OLSKToolbarButton', function () {
			browser.assert.hasClass(JOXPlayDetailToolbarArchiveButton, 'OLSKToolbarButton');
		});

		context('click', function () {
			
			before(function () {
				browser.assert.text('#TestJOXPlayDetailDispatchArchive', '0');
			});
			
			before(function () {
				return browser.pressButton(JOXPlayDetailToolbarArchiveButton);
			});

			it('sends JOXPlayDetailDispatchArchive', function () {
				browser.assert.text('#TestJOXPlayDetailDispatchArchive', '1');
			});
		
		});
	
	});

	describe.skip('JOXPlayDetailToolbarArchiveButtonImage', function test_JOXPlayDetailToolbarArchiveButtonImage () {

		it('sets src', function () {
			browser.assert.elements(`${ JOXPlayDetailToolbarArchiveButtonImage } #_OLSKSharedArchive`, 1);
		});
	
	});

	describe('JOXPlayDetailToolbarUnarchiveButton', function test_JOXPlayDetailToolbarUnarchiveButton () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				JOXPlayDetailItem: JSON.stringify(StubDocumentObjectValid({
					JOXDocumentIsArchived: true,
				})),
			});
		});

		it('classes OLSKDecorButtonNoStyle', function () {
			browser.assert.hasClass(JOXPlayDetailToolbarUnarchiveButton, 'OLSKDecorButtonNoStyle');
		});

		it('classes OLSKDecorTappable', function () {
			browser.assert.hasClass(JOXPlayDetailToolbarUnarchiveButton, 'OLSKDecorTappable');
		});

		it('classes OLSKToolbarButton', function () {
			browser.assert.hasClass(JOXPlayDetailToolbarUnarchiveButton, 'OLSKToolbarButton');
		});

		context('click', function () {
			
			before(function () {
				browser.assert.text('#TestJOXPlayDetailDispatchUnarchive', '0');
			});
			
			before(function () {
				return browser.pressButton(JOXPlayDetailToolbarUnarchiveButton);
			});

			it('sends JOXPlayDetailDispatchUnarchive', function () {
				browser.assert.text('#TestJOXPlayDetailDispatchUnarchive', '1');
			});
		
		});
	
	});

	describe.skip('JOXPlayDetailToolbarUnarchiveButtonImage', function test_JOXPlayDetailToolbarUnarchiveButtonImage () {

		it('sets src', function () {
			browser.assert.elements(`${ JOXPlayDetailToolbarUnarchiveButtonImage } #_OLSKSharedUnarchive`, 1);
		});
	
	});

	describe('JOXPlayDetailToolbarDiscardButton', function test_JOXPlayDetailToolbarDiscardButton () {
		
		it('classes OLSKDecorButtonNoStyle', function () {
			browser.assert.hasClass(JOXPlayDetailToolbarDiscardButton, 'OLSKDecorButtonNoStyle');
		});

		it('classes OLSKDecorTappable', function () {
			browser.assert.hasClass(JOXPlayDetailToolbarDiscardButton, 'OLSKDecorTappable');
		});

		it('classes OLSKToolbarButton', function () {
			browser.assert.hasClass(JOXPlayDetailToolbarDiscardButton, 'OLSKToolbarButton');
		});

		context('click', function () {

			context('cancel', function () {
				
				before(function () {
					browser.assert.text('#TestJOXPlayDetailDispatchDiscard', '0');
				});

				return browser.OLSKConfirm(function () {
					return browser.pressButton(JOXPlayDetailToolbarDiscardButton);
				}, function (dialog) {
					dialog.response = false;

					return dialog;
				});

				it('does nothing', function () {
					browser.assert.text('#TestJOXPlayDetailDispatchDiscard', '0');
				});
			
			});
			
			context('confirm', function () {
				
				before(function () {
					return browser.pressButton(JOXPlayDetailToolbarDiscardButton);
				});

				it('sends JOXPlayDetailDispatchDiscard', function () {
					browser.assert.text('#TestJOXPlayDetailDispatchDiscard', '1');
				});
			
			});

		});
	
	});

	describe('JOXPlayDetailToolbarDiscardButtonImage', function test_JOXPlayDetailToolbarDiscardButtonImage () {

		it('sets src', function () {
			browser.assert.elements(`${ JOXPlayDetailToolbarDiscardButtonImage } #_OLSKSharedDiscard`, 1);
		});
	
	});

	describe('JOXPlayDetailFormNotesField', function test_JOXPlayDetailFormNotesField () {

		const item = StubDocumentObjectValid();

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				JOXPlayDetailItem: JSON.stringify(item),
			});
		});

		it('sets binds JOXDocumentNotes', function () {
			browser.assert.input(JOXPlayDetailFormNotesField, item.JOXDocumentNotes);
		});
	
	});

	describe('JOXPlayDetailLauncherItemArchive', function test_JOXPlayDetailLauncherItemArchive() {
		
		before(function () {
			browser.assert.text('#TestJOXPlayDetailDispatchArchive', '0');
		});
		
		before(function () {
			return browser.OLSKLauncherRun('JOXPlayDetailLauncherItemArchive');
		});

		it('sends JOXPlayDetailDispatchArchive', function () {
			browser.assert.text('#TestJOXPlayDetailDispatchArchive', '1');
		});

	});

	describe('JOXPlayDetailLauncherItemUnarchive', function test_JOXPlayDetailLauncherItemUnarchive() {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				JOXPlayDetailItem: JSON.stringify(StubDocumentObjectValid({
					JOXDocumentIsArchived: true,
				})),
			});
		});

		before(function () {
			browser.assert.text('#TestJOXPlayDetailDispatchUnarchive', '0');
		});
		
		before(function () {
			return browser.OLSKLauncherRun('JOXPlayDetailLauncherItemUnarchive');
		});

		it('sends JOXPlayDetailDispatchUnarchive', function () {
			browser.assert.text('#TestJOXPlayDetailDispatchUnarchive', '1');
		});

	});

});