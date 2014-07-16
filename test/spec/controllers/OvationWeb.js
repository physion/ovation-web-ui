(function() {
	'use strict';

	var root = this;

	root.define([
		'controllers/OvationWeb'
		],
		function( Ovationweb ) {

			describe('Ovationweb Controller', function () {

				it('should be an instance of Ovationweb Controller', function () {
					var OvationWeb = new Ovationweb();
					expect( OvationWeb ).to.be.an.instanceof( Ovationweb );
				});

				it('should have more test written', function(){
					expect( true ).to.be.ok;
				});
			});

		});

}).call( this );