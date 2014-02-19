(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/ModelNavigator'
		],
		function( Modelnavigator ) {

			describe('Modelnavigator Layout', function () {

				it('should be an instance of Modelnavigator Layout', function () {
					var ModelNavigator = new Modelnavigator();
					expect( ModelNavigator ).to.be.an.instanceof( Modelnavigator );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );