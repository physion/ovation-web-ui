(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/OvationMain'
		],
		function( Ovationmain ) {

			describe('Ovationmain Layout', function () {

				it('should be an instance of Ovationmain Layout', function () {
					var OvationMain = new Ovationmain();
					expect( OvationMain ).to.be.an.instanceof( Ovationmain );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );