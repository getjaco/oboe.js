module.exports = function(config) {
   config.set({

      frameworks:['jasmine'],
   
      // base path, that will be used to resolve files and exclude
      basePath : '..',
      
      // list of files / patterns to load in the browser
      files : [
         'test/libs/es5-shim.js'        
      ,  'test/libs/es5-sham.js'        
      ,  'test/libs/sinon.js'
      ,  'test/libs/sinon-ie.js'
      ,  'test/libs/*.js'
      ,  'test/require/require.js'
      ,  'dist/oboe-browser.min.js'
      
      ,  'test/specs/amd.integration.spec.js'
      ],
                            
      // level of logging
      // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
      logLevel : config.LOG_INFO,
            
      // enable / disable watching file and executing tests whenever any file changes
      autoWatch : false,
           
      // Continuous Integration mode
      // if true, it capture browsers, run tests and exit
      singleRun : true
  });
};
