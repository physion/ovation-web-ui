require.config({

    baseUrl: "/scripts",

    /* starting point for application */
    deps: ['backbone.marionette', 'bootstrap', 'main'],


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
        }
    },

    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone-amd/backbone',
        underscore: '../bower_components/underscore-amd/underscore',

        /* alias all marionette libs */
        'backbone.marionette': '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',

        'backbone-associations': '../bower_components/backbone-associations/backbone-associations',

        /* alias the bootstrap js lib */
        bootstrap: '../bower_components/bootstrap-sass/dist/js/bootstrap',

        /* Alias text.js for template loading and shortcut the templates dir to tmpl */
        text: '../bower_components/requirejs-text/text',
        tmpl: "../templates",

        /* handlebars from the require handlerbars plugin below */
        handlebars: '../bower_components/require-handlebars-plugin/Handlebars',

        /* require handlebars plugin - Alex Sexton */
        i18nprecompile: '../bower_components/require-handlebars-plugin/hbs/i18nprecompile',
        json2: '../bower_components/require-handlebars-plugin/hbs/json2',
        hbs: '../bower_components/require-handlebars-plugin/hbs',

        /* Includes for mocking services */
        mockjax: '../bower_components/jquery-mockjax/jquery.mockjax',

        communicator: 'communicator',

        jqueryui: '../bower_components/jquery-ui/ui/jquery-ui.custom',

        plupload: '../bower_components/plupload/js/plupload.dev',
        moxie: '../bower_components/plupload/js/moxie',

        jqueryCookie: '../bower_components/jquery-cookie/jquery.cookie',

        jqueryValidate: '../bower_components/jquery-validation/dist/jquery.validate'
    },

    hbs: {
        disableI18n: true
    }
});
