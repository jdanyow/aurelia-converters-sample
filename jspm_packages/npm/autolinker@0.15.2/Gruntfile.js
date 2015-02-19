/* */ 
module.exports = function(grunt) {
  'use strict';
  grunt.registerTask('default', ['jshint', 'build', 'jasmine']);
  grunt.registerTask('build', ['concat:development', 'umd', 'uglify:production']);
  grunt.registerTask('test', ['build', 'jasmine']);
  grunt.registerTask('doc', "Builds the documentation.", ['jshint', 'jsduck']);
  grunt.registerTask('serve', ['connect:server:keepalive']);
  var exec = require("child_process").exec,
      banner = createBanner(),
      distPath = 'dist/Autolinker.js',
      minDistPath = 'dist/Autolinker.min.js';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {server: {options: {
          hostname: '*',
          port: 3000,
          base: '.'
        }}},
    jshint: {files: {src: ['src/**/*.js', 'tests/**/*.js']}},
    jasmine: {dist: {
        options: {specs: 'tests/*Spec.js'},
        src: minDistPath
      }},
    concat: {development: {
        options: {
          banner: banner,
          nonull: true
        },
        src: ['src/Autolinker.js', 'src/Util.js', 'src/HtmlParser.js', 'src/HtmlTag.js', 'src/MatchValidator.js', 'src/AnchorTagBuilder.js', 'src/match/Match.js', 'src/match/Email.js', 'src/match/Twitter.js', 'src/match/Url.js'],
        dest: distPath
      }},
    uglify: {production: {
        options: {banner: banner},
        src: [distPath],
        dest: minDistPath
      }},
    jsduck: {main: {
        src: ['src/**/*.js'],
        dest: 'gh-pages/docs',
        options: {'title': 'Autolinker API Docs'}
      }},
    umd: {main: {
        src: distPath,
        globalAlias: 'Autolinker',
        objectToExport: 'Autolinker',
        indent: '\t'
      }}
  });
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsduck');
  grunt.loadNpmTasks('grunt-umd');
  function createBanner() {
    return ['/*!', ' * Autolinker.js', ' * <%= pkg.version %>', ' *', ' * Copyright(c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>', ' * <%= pkg.license %>', ' *', ' * <%= pkg.homepage %>', ' */\n'].join("\n");
  }
};
