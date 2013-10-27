/**
 * Created by quinn on 10/12/13.
 */
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			all: ['client/js/*.js', 'server/*.js'],
			options: {
				ignores: ['client/js/templates.js'],
				strict: true,
				undef: true
			}
		},

		yuidoc: {
			compile: {
				name: '<%= pkg.name %>',
				description: '<%= pkg.description %>',
				version: '<%= pkg.version %>',
				options: {
					paths: 'client/js',
					outdir: 'docs',
					norecurse: true
				}
			}
		},

		qunit: {
			all: ['test/test.html']
		},

		emberTemplates: {
			default: {
				files: {
					"client/js/templates.js": ['client/hbs/*.hbs', 'client/hbs/hipster/*.hbs']
				},
				options: {
					precompile: true,
					templateBasePath: /client\/hbs\//
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-ember-templates');

	grunt.registerTask('default', ['jshint']);

};