(function() {
	'use strict';

	var root = this;

	root.define([
		'controllers/ModelNavigatorPanels'
		],
		function( Modelnavigatorpanels ) {

			describe('Modelnavigatorpanels Controller', function () {

				it('should be an instance of Modelnavigatorpanels Controller', function () {
					var ModelNavigatorPanels = new Modelnavigatorpanels();
					expect( ModelNavigatorPanels ).to.be.an.instanceof( Modelnavigatorpanels );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );