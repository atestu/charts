module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: {
				files: {
					"css/style.css": "css/style.less"
				},
		        options: {
		        	compress: true
		        }
			}
		},
		watch: {
			files: ["css/*.less"],
			tasks: ["less:development"]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['less']);
};