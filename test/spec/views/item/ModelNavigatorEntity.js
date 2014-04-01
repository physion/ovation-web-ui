(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/ModelNavigatorEntity'
		],
		function( Modelnavigatorentity ) {

			describe('Modelnavigatorentity Itemview', function () {

				it('should be an instance of Modelnavigatorentity Itemview', function () {
					var ModelNavigatorEntity = new Modelnavigatorentity();
					expect( ModelNavigatorEntity ).to.be.an.instanceof( Modelnavigatorentity );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );