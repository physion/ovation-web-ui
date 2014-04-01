(function() {
	'use strict';

	var root = this;

	root.define([
		'views/ModelNavigatorPanel'
		],
		function( Modelnavigatorpanel ) {

			describe('Modelnavigatorpanel View', function () {

				it('should be an instance of Modelnavigatorpanel View', function () {
					var ModelNavigatorPanel = new Modelnavigatorpanel();
					expect( ModelNavigatorPanel ).to.be.an.instanceof( Modelnavigatorpanel );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );