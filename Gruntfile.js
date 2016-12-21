module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({


    sass: {
      options: {
        sourceMap: true
      },
      dist: {
             files: [{
             expand: true,
            cwd: 'pliki_scss/',
            src: ['*.scss'],
            dest: 'pliki_css/',
            ext: '.css'
        }]
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/build/'
        }]
      }
    },

  watch: {
      scripts: {
          files: ['pliki_scss/*.scss'],
          tasks: ['sass'],
          options: {
              spawn: false,
          },
      } 
  },

  browserSync: {
    bsFiles: {
        src : [
          'pliki_css/*.css',
          '*.html'
        ]
    },
    options: {
      watchTask: true,
        server: {
            baseDir: "./"
        }
    }
  }

  });

  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  
  grunt.registerTask('default', ['sass', 'imagemin','watch']);
  grunt.registerTask('sync', ['browserSync', 'watch']);
};

