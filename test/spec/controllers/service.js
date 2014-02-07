(function() {
	'use strict';

	var root = this;

	root.define([
		'controllers/service'
		],
		function( Service ) {

			describe('Service Controller', function () {

				it('should be an instance of Service Controller', function () {
					var service = new Service();
					expect( service ).to.be.an.instanceof( Service );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );