(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/project'
		],
		function( Project ) {

			describe('Project Collection', function () {

				it('should be an instance of Project Collection', function () {
					var project = new Project();
					expect( project ).to.be.an.instanceof( Project );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );