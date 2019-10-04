# Find Our Missing

**Prerequisites Required to Properly Run This Project:**

* Android Studio
* Emulator set up within Android Studio **_without Play Store compatability_** (Emulation must be enabled in your BIOS settings)
* Node.js
* Command Line/Terminal

To run this project, create a new directory on your local machine and git clone this repository in the newly created folder.
Open Android Studio and open the `android` folder in this project in the Studio environment. This will automatically trigger the Gradle build.
Allow the build to complete then begin your Andriod Virtual Device.

In your terminal, run the following commands:

`cd android && ./gradlew clean` _This must complete successfully._

`cd ..` back into the project root folder.


By now your emulator should be booted up and displaying the home screen. If it is you may begin the project:

`react-native run-android` This will begin building the project and once it is completed successfully it will send the package to your emulator to be run.

---

If you would like to view the logs, open a new terminal and type this command: `adb logcat *:S ReactNative:V ReactNativeJS:V`
