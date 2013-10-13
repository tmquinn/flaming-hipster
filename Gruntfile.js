/**
 * Created by quinn on 10/12/13.
 */
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			all: ['client/js/*.js', 'server/*.js'],
			options: {
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
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');
	grunt.loadNpmTasks('grunt-contrib-qunit');

	grunt.registerTask('default', ['jshint']);

};