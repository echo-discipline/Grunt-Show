module.exports = function(grunt){

    var defaultfn = function(){
        console.log("Iam the default task");
    };

    var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

    // Project configuration.
grunt.initConfig({
    concat: {
      options: {
        separator: '\n',
        sourceMap: true,
        banner: "/*processed by Jarvis on "+datetime+"*/\n"
      },
      css: {
        src: ['../css/**/*.css'
            ],
        dest: '../../htdocs/css/style.css',
      },
    },
    watch: {
        css: {
          files: ['../css/**/*.css'],
          tasks: ['concat'],
          options: {
            spawn: false,
          },
        },
      },
  });


    grunt.registerTask('helloworld', function(){
        console.log("I am grunt running...");
        console.log("This is the hello world task");
    });

    grunt.registerTask('task1', function(){
        console.log("I am Task1 running...");
    });

    grunt.registerTask('task2', function(){
        console.log("I am Task2 running...");
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['task1','task2','concat','watch']);
};