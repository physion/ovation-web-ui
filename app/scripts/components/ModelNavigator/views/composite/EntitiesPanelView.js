define([
	'backbone',
	'communicator',
	'../item/PanelEntityView',
	'hbs!../../templates/composite/EntitiesPanelViewTemplate'
	],
	function( Backbone, Communicator, PanelEntityView, EntitiesPanelViewTemplate  ) {
		'use strict';

		/* Return a CompositeView class definition */
		return Backbone.Marionette.CompositeView.extend({
			className: 'model-navigator-panel',
			initialize: function() {
				this.listenTo(this, "itemview:entitylink:click", function(context, data) {
					context.$el.siblings().find('li').removeClass('active').end().removeClass('active');
					context.$el.addClass('active');
					Communicator.mediator.trigger("panel:click", {
						entityLinkModel: data.entityLinkModel,
						entityModel: data.entityModel,
						view: this
					});
				});
				this.listenTo(this, 'itemview:entity:click', function(context) {
					context.$el.siblings().find('li').removeClass('active').end().removeClass('active');
					context.$el.addClass('active');
					Communicator.mediator.trigger('entity:select', context.model);
				});
				this.onShowCallbacks = new Backbone.Marionette.Callbacks();
			},

			itemView: PanelEntityView,

			template: EntitiesPanelViewTemplate,


			appendHtml: function(compositeView, itemView, index){
				if (compositeView.isBuffering) {
					compositeView.elBuffer.appendChild(itemView.el);
					compositeView._bufferedChildren.push(itemView);
				}
				else {
					var $container = this.getItemViewContainer(compositeView);
					$container.append(itemView.el);
				}
				if (itemView.onShow) {
					this.onShowCallbacks.add(itemView.onShow, itemView);
				}
  		},

			/* ui selector cache */
			ui: {},

			/* where are we appending the items views */
			itemViewContainer: "ul",

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {
				var self = this;
				this.onShowCallbacks.run();

				if(this.model && this.model.get('type') === 'Epoch') {
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
