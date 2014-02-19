(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/Project'
		],
		function( Project ) {

			describe('Project Itemview', function () {

				it('should be an instance of Project Itemview', function () {
					var Project = new Project();
					expect( Project ).to.be.an.instanceof( Project );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );