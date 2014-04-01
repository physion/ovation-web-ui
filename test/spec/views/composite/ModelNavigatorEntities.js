(function() {
	'use strict';

	var root = this;

	root.define([
		'views/composite/ModelNavigatorEntities'
		],
		function( Modelnavigatorentities ) {

			describe('Modelnavigatorentities Compositeview', function () {

				it('should be an instance of Modelnavigatorentities Compositeview', function () {
					var ModelNavigatorEntities = new Modelnavigatorentities();
					expect( ModelNavigatorEntities ).to.be.an.instanceof( Modelnavigatorentities );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );