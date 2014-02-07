(function() {
	'use strict';

	var root = this;

	root.define([
		'models/project'
		],
		function( Project ) {

			describe('Project Model', function () {

				it('should be an instance of Project Model', function () {
					var project = new Project();
					expect( project ).to.be.an.instanceof( Project );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );