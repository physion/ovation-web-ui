(function() {
	'use strict';

	var root = this;

	root.define([
		'views/ModelNavigatorDefaultPanel'
		],
		function( Modelnavigatordefaultpanel ) {

			describe('Modelnavigatordefaultpanel View', function () {

				it('should be an instance of Modelnavigatordefaultpanel View', function () {
					var ModelNavigatorDefaultPanel = new Modelnavigatordefaultpanel();
					expect( ModelNavigatorDefaultPanel ).to.be.an.instanceof( Modelnavigatordefaultpanel );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );