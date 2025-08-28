// react-native.config.js
module.exports = {
  project: {
    android: {
      // name of the Gradle app module
      appName: 'app',

      // where the Android project lives
      sourceDir: './android',

      // must match your applicationId in app/build.gradle
      packageName: 'com.teker.tekerapp',

      // helps RN CLI resolve the package if needed
      manifestPath: './android/app/src/main/AndroidManifest.xml',
    },
    ios: {},
  },
  dependencies: {},
};