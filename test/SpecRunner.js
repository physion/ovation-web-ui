require.config({
    baseUrl: '../app/scripts',
    urlArgs: 'cb=' + Math.random(),

    deps: ['backbone.marionette'],

    shim: {
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        mockjax: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        communicator: {
            deps: ['backbone']
        },
        jqueryui: {
            deps: ['jquery']
        },
        plupload: {
            deps: ['moxie']
        },
        jqueryCookie: {
            deps: ['jquery']
        },
        jqueryValidate: {
            deps: ['jquery']
        },
        c3: {
            deps: ['d3']
        }
    },

    paths: {
        spec: '../../test/spec', // lives in the test directory

        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone-amd/backbone',
        underscore: '../bower_components/underscore-amd/underscore',

        /* backbone plugins */
        'backbone.syphon': '../bower_components/backbone.syphon/lib/amd/backbone.syphon',
        'backbone.iobind': '../bower_components/backbone.iobind/dist/backbone.iobind',

        /* alias all marionette libs */
        'backbone.marionette': '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr', 
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',

        /* alias the bootstrap js lib */
        bootstrap: 'vendor/bootstrap',
        'bootstrap-button': 'vendor/bootstrap-button',

        /* Alias text.js for template loading and shortcut the templates dir to tmpl */
        text: '../bower_components/requirejs-text/text',
        tmpl: "../templates",

        /* handlebars from the require handlerbars plugin below */
        handlebars: '../bower_components/require-handlebars-plugin/Handlebars',

        /* require handlebars plugin - Alex Sexton */
        i18nprecompile: '../bower_components/require-handlebars-plugin/hbs/i18nprecompile',
        json2: '../bower_components/require-handlebars-plugin/hbs/json2',
        hbs: '../bower_components/require-handlebars-plugin/hbs',
        mockjax: '../bower_components/jquery-mockjax/jquery.mockjax',

        communicator: 'communicator',

        jqueryui: '../bower_components/jquery-ui/ui/jquery-ui.custom',

        plupload: '../bower_components/plupload/js/plupload.dev',
        moxie: '../bower_components/plupload/js/moxie',

        jqueryCookie: '../bower_components/jquery-cookie/jquery.cookie',

        jqueryValidate: '../bower_components/jquery-validation/dist/jquery.validate',

        ovationService: 'controllers/OvationServiceController',

        ovationApi: 'components/OvationAPI/ovationapi',

        c3: '../bower_components/c3/c3',

        d3: '../bower_components/d3/d3'
    },
    packages: [
        {
            'name': 'PanelView',
            'location': 'components/PanelView',
            'main': 'controllers/PanelViewController'
        },
        {
            'name': 'EntityModel',
            'location': 'components/EntityModel',
            'main': 'EntityModel'
        },
        {
            'name': 'EntityCollection',
            'location': 'components/EntityCollection',
            'main': 'EntityCollection'
        }
    ],
    hbs: {
        disableI18n: true
    }
});

/* require test suite */
require([
    'jquery',
    'spec/testSuite'
],
function( $, testSuite ) {

    'use strict';

    /* on dom ready require all specs and run */
    $( function() {
        require(testSuite.specs, function() {

            if (window.mochaPhantomJS) {
                mochaPhantomJS.run();
            }
            else {
                mocha.run();
            }
            
        });
    });
});
  