define([
	'backbone',
	'communicator',
	'hbs!../../templates/item/EntityViewTemplate',
	'../../collections/EntityLinkCollection',
	'../collection/EntityLinkCollectionView',
	'hbs!../../templates/item/ProjectEntityViewTemplate',
	'hbs!../../templates/item/SourceEntityViewTemplate',
	'hbs!../../templates/item/ProtocolEntityViewTemplate',
	'hbs!../../templates/item/ExperimentEntityViewTemplate',
	'hbs!../../templates/item/EpochEntityViewTemplate',
	'hbs!../../templates/item/MeasurementEntityViewTemplate',
	'plupload'
	],
	function( Backbone, Communicator, EntityViewTemplate, EntityLinkCollection, EntityLinkCollectionView, ProjectEntityViewTemplate, SourceEntityViewTemplate, ProtocolEntityViewTemplate, ExperimentEntityViewTemplate, EpochEntityViewTemplate, MeasurementEntityViewTemplate ) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.ItemView.extend({
			tagName: 'li',
			initialize: function() {},

			template: EntityViewTemplate,

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {
				'click': function() {
					var i, linksArray, links;
					if(!this.entityLinkCollection && this.model.get('links').data_resource === undefined) {
						this.entityLinkCollection = new EntityLinkCollection();
						linksArray = [];
						links = this.model.get('links');
						for(i in links) {
							links[i]['display_name'] = i;
							linksArray.push(links[i]);
						}
						this.entityLinkCollection.reset(linksArray);
						this.entityLinkCollectionView = new EntityLinkCollectionView({
							collection: this.entityLinkCollection
						});
						this.$el.append(this.entityLinkCollectionView.$el);
						this.entityLinkCollectionView.render();
						this.listenTo(this.entityLinkCollectionView, 'entitylink:click', function(entityLinkModel) {
							this.trigger('entitylink:click', {
								entityLinkModel: entityLinkModel,
								entityModel: this.model
							});
						})
						this.entityLinkCollectionView.$el.slideToggle();
					}
					else if(this.entityLinkCollection) {
						this.entityLinkCollectionView.$el.slideToggle();
					}
					this.trigger('entity:click');
					return false;
				}
			},

			/* on render callback */
			onRender: function() {
				var container = this.$el.find('.entity-attributes-container:first'), entityTemplate;
				switch(this.model.get('type')) {
					case 'Project':
						entityTemplate = ProjectEntityViewTemplate;
						break;
					case 'Source':
						entityTemplate = SourceEntityViewTemplate;
						break;
					case 'Protocol':
						entityTemplate = ProtocolEntityViewTemplate;
						break;
					case 'Experiment':
						entityTemplate = ExperimentEntityViewTemplate;
						break;
					case 'Epoch':
						entityTemplate = EpochEntityViewTemplate;
						break;
					case 'Measurement':
						entityTemplate = MeasurementEntityViewTemplate;
						break;
				}
				if(entityTemplate) {
					container.html(entityTemplate(this.model.toJSON()));
				}	
			},

			onShow: function() {
				var self = this;

				if(this.model.get('type') === 'Epoch') {
					var dropzone = new mOxie.FileDrop({
						drop_zone: this.$el.get(0)
					});
					
					dropzone.ondragenter = function(event) {
						self.$el.addClass('file-drop-highlight')
					};

					dropzone.ondragleave = function(event) {
						self.$el.removeClass('file-drop-highlight');
					};

					dropzone.ondrop = function( event ) {
						var entityId = self.model.get('attributes')._id,
							uploader;

						if(!self.uploader) {
							uploader = new plupload.Uploader({
								runtimes: "html5",
								url: "http://localhost:80/upload.php",
								browse_button: self.$el.find('.plupload-browse-button').get(0),
								drop_element: self.$el.find('.plupload-drop-element').get(0),
								flash_swf_url: "http://localhost:9000/bower_components/plupload/js/moxie.js",
								multipart_params: {
									"entity": entityId
								}
							});
							self.uploader = uploader;

							uploader.bind("PostInit", function() {
								console.log( "Initialization complete." );
								console.log( "Drag-drop supported:", !! uploader.features.dragdrop );
							});
							
							uploader.bind("FilesAdded", function(uploader, files) {
								console.log("Files added to entity " + entityId);
								for(var i = 0; i < files.length; i++) {
									console.log(i+1 + ": " + files[i].name);
								}
							});

							uploader.bind("UploadComplete", function() {
								console.log("upload complete");
							});
						
							uploader.init();
						
							Communicator.mediator.on("uploadFiles", function() {
								self.uploader.start();
							});
						}

						self.uploader.addFile(dropzone.files);

						Communicator.mediator.trigger("filesDropped", {
							uploader: self.uploader,
							model: self.model,
							files: dropzone.files
						});
					};
	 
					dropzone.init();
				}
			}
		});

	});
