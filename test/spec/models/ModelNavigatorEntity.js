(function() {
	'use strict';

	var root = this;

	root.define([
		'models/ModelNavigatorEntity'
		],
		function( Modelnavigatorentity ) {

			describe('Modelnavigatorentity Model', function () {

				it('should be an instance of Modelnavigatorentity Model', function () {
					var ModelNavigatorEntity = new Modelnavigatorentity();
					expect( ModelNavigatorEntity ).to.be.an.instanceof( Modelnavigatorentity );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );