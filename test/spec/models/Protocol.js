(function() {
	'use strict';

	var root = this;

	root.define([
		'models/Protocol'
		],
		function( Protocol ) {

			describe('Protocol Model', function () {

				it('should be an instance of Protocol Model', function () {
					var Protocol = new Protocol();
					expect( Protocol ).to.be.an.instanceof( Protocol );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );