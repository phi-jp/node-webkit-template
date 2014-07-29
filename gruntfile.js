module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({
        nodewebkit: {
            src: ['package.json', 'index.html', 'sample.txt'],
            name: 'node-webkit-template'
        }
    });

    grunt.loadNpmTasks('grunt-node-webkit-builder');
    grunt.registerTask('default', ['nodewebkit']);
};
