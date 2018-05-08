module.exports = function (grunt) {

  grunt.initConfig({
    crx: {
      myPublicExtension: {
        src: ['css/**', 'images/**', 'icon*.png', 'manifest.json', 'inject.js'],
        dest: "dark-vcenter.zip",
      },
      // mySignedExtension: {
      //   src: ['css/**', 'images/**', 'icon.png', 'manifest.json', 'inject.js'],
      //   dest: "dist/myPrivateExtension.crx",
      //   options: {
      //     privateKey: "~/myPrivateExtensionKey.pem"
      //   }
      // }
    }
  });

  grunt.loadNpmTasks('grunt-crx');

  grunt.registerTask('default', ['crx']);

};
