(function (root, factory) {

	// AMD
	if(typeof define === 'function' && define.amd) {
		define(['jquery', 'exports'], function(jquery, exports) {
			root.OvationAPI = factory(root, exports, jquery);
		});
	} 

	// Node.js and CommonJS
	else if(typeof exports !== 'undefined') {
		var jquery = require('jquery');
		factory(root, exports, jquery);
	}

	//Browser global
	else {
		root.OvationAPI = factory(root, {}, root.jQuery || root.$);
	}

} (this, function (root, OvationAPI, $) {


	OvationAPI.authenticate = function() {
		var userData = this.getCookie('ovationUser'),
			self = this;
		if(userData === "" || userData === undefined) {
			this.trigger("OvationAPI:login-needed");
		}
		else {
			this.userData = JSON.parse(userData);
			$.ajax({
				url: 'http://localhost:3000/project',
				type: 'GET',
				dataType: 'json',
				data: {
					'api-key': this.userData['api_key']
				}
			})
			.done(function() {
				self.trigger("OvationAPI:authenticated");
			})
			.error(function() {
				self.trigger("OvationAPI:login-needed");
			});
		}
	}

	OvationAPI.login = function(email, password) {
		var self = this;
		return $.ajax({
			url: 'https://dev.ovation.io/api/v1/sessions',
			type: 'POST',
			dataType: 'json',
			data: {
				'email': email,
				'password': password
			}
		})
		.done(function(data) {
			self.userData = data;
			self.setCookie('ovationUser', JSON.stringify(data));
			self.trigger("OvationAPI:authenticated");
		});
	}

	OvationAPI.setCookie = function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+d.toGMTString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}

	OvationAPI.getCookie = function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
		    var c = ca[i].trim();
		    if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
		}
		return "";
	}

	OvationAPI.trigger = function(eventName, data) {
		$(this).trigger(eventName, data);
	}

	OvationAPI.on = function(eventName, callback) {
		$(this).on(eventName, callback);
	}

	OvationAPI.Project = {
		getUserProjects: function() {
			var deferred = $.Deferred();
			$.ajax({
				url: 'http://localhost:3000/project',
				type: 'GET',
				dataType: 'json',
				data: {
					'api-key': OvationAPI.userData['api_key']
				},
				success: function(data) {
					$.each(data, function(i, value) {
						OvationAPI.convertToUI(value);
					});
					deferred.resolve(data);
				}
			});
			return deferred.promise();
		}
	}

	OvationAPI.Source = {
		getUserSources: function() {
			var deferred = $.Deferred();
			$.ajax({
				url: 'http://localhost:3000/source',
				type: 'GET',
				dataType: 'json',
				data: {
					'api-key': OvationAPI.userData['api_key']
				},
				success: function(data) {
					$.each(data, function(i, value) {
						OvationAPI.convertToUI(value);
					});
					deferred.resolve(data);
				}
			});
			return deferred.promise();
		}
	}

	OvationAPI.Protocol = {
		getUserProtocols: function() {
			var deferred = $.Deferred();
			$.ajax({
				url: 'http://localhost:3000/protocol',
				type: 'GET',
				dataType: 'json',
				data: {
					'api-key': OvationAPI.userData['api_key']
				},
				success: function(data) {
					$.each(data, function(i, value) {
						OvationAPI.convertToUI(value);
					});
					deferred.resolve(data);
				}
			});
			return deferred.promise();
		}
	}

	OvationAPI.convertToUI = function(doc) {
		var ui_hints;
		ui_hints = {
			display_name: null,
			primary_link: null,
			secondary_link: null
		};
		switch (doc.type) {
			case "Project":
				if (doc.attributes.name != null) {
					ui_hints.display_name = doc.attributes.name;
				}
				if (doc.links.experiments != null) {
					ui_hints.primary_link = doc.links.experiments;
				}
				ui_hints.secondary_link = null;
				break;
			case "Experiment":
				if (doc.attributes.purpose != null) {
					ui_hints.display_name = doc.attributes.purpose;
				}
				if (doc.links.epoch_groups != null) {
					ui_hints.primary_link = doc.links.epoch_groups;
				}
				if (doc.links.epoch != null) {
					ui_hints.secondary_link = doc.links.epoch;
				}
				break;
			case "EpochGroup":
				if (doc.attributes.label != null) {
					ui_hints.display_name = doc.attributes.label;
				}
				if (doc.links.children != null) {
					ui_hints.primary_link = doc.links.children;
				}
				if (doc.links.epochs != null) {
					ui_hints.secondary_link = doc.links.epochs;
				}
				break;
			case "Source":
				ui_hints.display_name = "" + (doc.attributes.label != null ? doc.attributes.label : void 0) + "(" + (doc.attributes.identifier != null ? doc.attributes.identifier : void 0) + ")";
				if (doc.links.children != null) {
					ui_hints.primary_link = doc.links.children;
				}
				if (doc.links.experiments != null) {
					ui_hints.secondary_link = doc.links.experiments;
				}
				break;
			case "Epoch":
				ui_hints.display_name = "" + (doc.attributes.label != null ? doc.attributes.label : void 0) + "(" + (doc.attributes.identifier != null ? doc.attributes.identifier : void 0) + ")";
				if (doc.links.measurements != null) {
					ui_hints.primary_link = doc.links.measurements;
				}
				ui_hints.secondary_link = typeof null !== "undefined" && null !== null;
				break;
			case "Measurement":
				ui_hints.display_name = "" + (doc.attributes.name != null ? doc.attributes.name : void 0);
				ui_hints.primary_link = null;
				ui_hints.secondary_link = null;
				break;
			case "AnalysisRecord":
				if (doc.attributes.name != null) {
					ui_hints.display_name = doc.attributes;
				}
				if (doc.links.outputs != null) {
					ui_hints.primary_link = doc.links.outputs;
				}
				if (doc.links.inputs != null) {
					ui_hints.secondary_link = doc.links.inputs;
				}
				break;
			case "Protocol":
				ui_hints.display_name = "" + (doc.attributes.name != null ? doc.attributes.name : void 0) + "(" + (doc.attributes.version != null ? doc.attributes.version : void 0) + ")";
				if (doc.links.children != null) {
					ui_hints.primary_link = doc.links.children;
				}
				if (doc.links.procedures != null) {
					ui_hints.secondary_link = doc.links.procedures;
				}
		}
		doc.ui_hints = ui_hints;
		return doc;
	};

	OvationAPI.convertToServer = function(doc) {
		if (doc.hasOwnProperty("ui_hints")) {
			delete doc.ui_hints;
		}
		return doc;
	};

	return OvationAPI;

}));