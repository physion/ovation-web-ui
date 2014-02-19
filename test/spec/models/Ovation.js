(function() {
	'use strict';

	var root = this;

	root.define([
		'models/Ovation'
		],
		function( Ovation ) {

			describe('Ovation Model', function () {

				it('should be an instance of Ovation Model', function () {
					var Ovation = new Ovation();
					expect( Ovation ).to.be.an.instanceof( Ovation );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );