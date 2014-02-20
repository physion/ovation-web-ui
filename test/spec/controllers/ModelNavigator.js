(function() {
	'use strict';

	var root = this;

	root.define([
		'controllers/ModelNavigator'
		],
		function( Modelnavigator ) {

			describe('Modelnavigator Controller', function () {

				it('should be an instance of Modelnavigator Controller', function () {
					var ModelNavigator = new Modelnavigator();
					expect( ModelNavigator ).to.be.an.instanceof( Modelnavigator );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );