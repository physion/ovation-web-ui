(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/ModelNavigatorEntities'
		],
		function( Modelnavigatorentities ) {

			describe('Modelnavigatorentities Collection', function () {

				it('should be an instance of Modelnavigatorentities Collection', function () {
					var ModelNavigatorEntities = new Modelnavigatorentities();
					expect( ModelNavigatorEntities ).to.be.an.instanceof( Modelnavigatorentities );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );