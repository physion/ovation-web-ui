define([
	'backbone',
	'hbs!../../templates/item/MeasurementViewTemplate',
	'jqueryui',
	'c3'
	],
	function( Backbone, MeasurementViewTemplate, jqueryui, c3 ) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.ItemView.extend({

			tagName: 'div',

			initialize: function() {
				this.sampleData = {
					"E1":[0.0047,0.0028,0.0014,0.0006,0.0004,0.0002,0.0001,0,-0.0002,-0.0003,-0.0005,-0.0007,-0.0009,-0.0009,-0.0008,-0.0005,0,0.0013,0.0034,0.0075,0.0141,0.0241,0.0369,0.0523,0.069,0.0864,0.1039,0.1209,0.1372,0.1526,0.1674,0.1815,0.1955,0.2091,0.2229,0.2365,0.2494,0.2619,0.2737,0.2851],
					"E2":[0.0002,0.0007,0.001,0.001,0.0008,0.0005,0.0003,0,-0.0002,-0.0003,-0.0004,-0.0006,-0.0007,-0.0007,-0.0007,-0.0005,-0.0001,0.0009,0.0027,0.0062,0.0118,0.02,0.0307,0.0435,0.0575,0.072,0.0864,0.1005,0.1139,0.127,0.1397,0.1525,0.165,0.1773,0.1891,0.2005,0.2115,0.2222,0.2322,0.2415],
					"E3":[0.0001,0.0007,0.0008,0.0007,0.0006,0.0005,0.0004,0.0003,0.0004,0.0001,-0.0004,-0.0009,-0.0012,-0.0014,-0.0016,-0.0018,-0.0018,-0.0012,0.0001,0.0023,0.0054,0.009,0.0129,0.0164,0.0194,0.0213,0.0225,0.0232,0.0236,0.024,0.024,0.0239,0.0238,0.0235,0.0233,0.023,0.0226,0.0223,0.022,0.0219],
					"E4":[0.0012,0.0013,0.0011,0.0006,0.0003,0.0001,0.0001,0.0001,0.0001,0,-0.0004,-0.0006,-0.0008,-0.0007,-0.0009,-0.0012,-0.0012,-0.0003,0.0014,0.004,0.0074,0.0114,0.0157,0.0196,0.023,0.0252,0.0268,0.0277,0.0281,0.0284,0.0288,0.0288,0.029,0.0286,0.0285,0.0281,0.0278,0.0277,0.0276,0.0277],
					"E5":[0.0008,0.001,0.0011,0.0009,0.0008,0.0006,0.0004,0.0001,-0.0001,-0.0002,-0.0004,-0.0005,-0.0007,-0.0008,-0.0009,-0.0009,-0.0007,-0.0001,0.0012,0.0038,0.0092,0.0196,0.0397,0.0753,0.1323,0.2088,0.2958,0.3799,0.4515,0.5076,0.5479,0.5762,0.5952,0.6085,0.6187,0.6258,0.631,0.6344,0.6373,0.6399],
					"E6":[0.0007,0.0009,0.001,0.0009,0.0008,0.0006,0.0004,0.0002,0,-0.0001,-0.0003,-0.0005,-0.0006,-0.0008,-0.0008,-0.0009,-0.0007,-0.0002,0.0011,0.0036,0.0088,0.0187,0.0378,0.0717,0.1267,0.201,0.2861,0.3683,0.4387,0.4932,0.5329,0.5607,0.5802,0.5935,0.6033,0.6097,0.6148,0.6176,0.6209,0.6245],
					"E7":[-0.0009,-0.0001,0.0004,0.0005,0.0005,0.0003,0.0003,0.0002,0.0001,0.0001,0,-0.0001,-0.0002,-0.0003,-0.0003,-0.0004,-0.0004,-0.0004,-0.0004,-0.0003,0,0.0006,0.0018,0.0038,0.0075,0.0148,0.028,0.0488,0.0768,0.1083,0.138,0.1615,0.1778,0.1884,0.1949,0.1988,0.2014,0.2031,0.2045,0.2055],
					"E8":[-0.0013,-0.0001,0.0006,0.0009,0.0007,0.0005,0.0004,0.0004,0.0002,0.0001,-0.0001,-0.0002,-0.0003,-0.0004,-0.0006,-0.0006,-0.0007,-0.0007,-0.0007,-0.0006,-0.0004,0.0002,0.0011,0.0032,0.007,0.0146,0.0283,0.0503,0.0812,0.1167,0.1511,0.1785,0.198,0.211,0.2193,0.2245,0.2275,0.2294,0.2308,0.2321]
				}
			},

			template: MeasurementViewTemplate,

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {

			},

			onShow: function() {
				var container = $('.chart-container');
				var chart = c3.generate({
					bindto: '#chart-container',
					data: {
						columns: [
							["E1",0.0047,0.0028,0.0014,0.0006,0.0004,0.0002,0.0001,0,-0.0002,-0.0003,-0.0005,-0.0007,-0.0009,-0.0009,-0.0008,-0.0005,0,0.0013,0.0034,0.0075,0.0141,0.0241,0.0369,0.0523,0.069,0.0864,0.1039,0.1209,0.1372,0.1526,0.1674,0.1815,0.1955,0.2091,0.2229,0.2365,0.2494,0.2619,0.2737,0.2851],
							["E2",0.0002,0.0007,0.001,0.001,0.0008,0.0005,0.0003,0,-0.0002,-0.0003,-0.0004,-0.0006,-0.0007,-0.0007,-0.0007,-0.0005,-0.0001,0.0009,0.0027,0.0062,0.0118,0.02,0.0307,0.0435,0.0575,0.072,0.0864,0.1005,0.1139,0.127,0.1397,0.1525,0.165,0.1773,0.1891,0.2005,0.2115,0.2222,0.2322,0.2415],
							["E3",0.0001,0.0007,0.0008,0.0007,0.0006,0.0005,0.0004,0.0003,0.0004,0.0001,-0.0004,-0.0009,-0.0012,-0.0014,-0.0016,-0.0018,-0.0018,-0.0012,0.0001,0.0023,0.0054,0.009,0.0129,0.0164,0.0194,0.0213,0.0225,0.0232,0.0236,0.024,0.024,0.0239,0.0238,0.0235,0.0233,0.023,0.0226,0.0223,0.022,0.0219],
							["E4",0.0012,0.0013,0.0011,0.0006,0.0003,0.0001,0.0001,0.0001,0.0001,0,-0.0004,-0.0006,-0.0008,-0.0007,-0.0009,-0.0012,-0.0012,-0.0003,0.0014,0.004,0.0074,0.0114,0.0157,0.0196,0.023,0.0252,0.0268,0.0277,0.0281,0.0284,0.0288,0.0288,0.029,0.0286,0.0285,0.0281,0.0278,0.0277,0.0276,0.0277],
							["E5",0.0008,0.001,0.0011,0.0009,0.0008,0.0006,0.0004,0.0001,-0.0001,-0.0002,-0.0004,-0.0005,-0.0007,-0.0008,-0.0009,-0.0009,-0.0007,-0.0001,0.0012,0.0038,0.0092,0.0196,0.0397,0.0753,0.1323,0.2088,0.2958,0.3799,0.4515,0.5076,0.5479,0.5762,0.5952,0.6085,0.6187,0.6258,0.631,0.6344,0.6373,0.6399],
							["E6",0.0007,0.0009,0.001,0.0009,0.0008,0.0006,0.0004,0.0002,0,-0.0001,-0.0003,-0.0005,-0.0006,-0.0008,-0.0008,-0.0009,-0.0007,-0.0002,0.0011,0.0036,0.0088,0.0187,0.0378,0.0717,0.1267,0.201,0.2861,0.3683,0.4387,0.4932,0.5329,0.5607,0.5802,0.5935,0.6033,0.6097,0.6148,0.6176,0.6209,0.6245],
							["E7",-0.0009,-0.0001,0.0004,0.0005,0.0005,0.0003,0.0003,0.0002,0.0001,0.0001,0,-0.0001,-0.0002,-0.0003,-0.0003,-0.0004,-0.0004,-0.0004,-0.0004,-0.0003,0,0.0006,0.0018,0.0038,0.0075,0.0148,0.028,0.0488,0.0768,0.1083,0.138,0.1615,0.1778,0.1884,0.1949,0.1988,0.2014,0.2031,0.2045,0.2055],
							["E8",-0.0013,-0.0001,0.0006,0.0009,0.0007,0.0005,0.0004,0.0004,0.0002,0.0001,-0.0001,-0.0002,-0.0003,-0.0004,-0.0006,-0.0006,-0.0007,-0.0007,-0.0007,-0.0006,-0.0004,0.0002,0.0011,0.0032,0.007,0.0146,0.0283,0.0503,0.0812,0.1167,0.1511,0.1785,0.198,0.211,0.2193,0.2245,0.2275,0.2294,0.2308,0.2321]
						]
					}
				});
			}
		});

	});