(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/OvationWeb'
		],
		function( Ovationweb ) {

			describe('Ovationweb Layout', function () {

				it('should be an instance of Ovationweb Layout', function () {
					var OvationWeb = new Ovationweb();
					expect( OvationWeb ).to.be.an.instanceof( Ovationweb );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );