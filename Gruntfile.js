module.exports = function(grunt) {
	
	grunt.loadNpmTasks("grunt-babel");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-contrib-clean');
	
	
	grunt.initConfig({
		"babel": {
			"options": {
				"sourceMap": true,
				"presets": ['es2015']
			},
			dist: {
				files: [{
					"expand": true,
					"cwd": "src/",
					"src": ["**/*.js"],
					"dest": "build/",
					"ext": ".js",
					"plugins": ["transform-es2015-models-amd"] //This is the line to be added.
				}]
			}
		},
		watch: {
			scripts: {
				files: "src/**/*.js",
				tasks: ["clean","babel"]
			}
		},
		nodemon: {
			dev: {
				script: 'build/app.js',
			},
		},
		concurrent: {
			default: ['watch', 'nodemon'],
			options: {
				logConcurrentOutput: true
			}
		},
		clean: ['build']
	});
		
	grunt.registerTask('default', ['clean','babel','concurrent']);
  grunt.registerTask('test', ['clean','babel','watch']);

};