# EcommerceStoreFront #

react-native codebase repo for EcommerceStoreFront for both iOS and Android mobile app.


# Development

## Running the app locally - iOS

1. Install the react-native-cli - instructions [on the React Native website](https://facebook.github.io/react-native/docs/getting-started)
2. [Install cocoapods](https://guides.cocoapods.org/using/getting-started.html)
3. Make sure you've installed xcode and opened it to accept terms etc
4. Install js dependencies: `yarn install`
5. Install native dependencies: `cd ios && pod install`
6. Create `app/config/local.js` - local dev config that isn't committed. Default options can be copied from `app/config/local-example.js`
7. Start the js bundler: `react-native start`
8. Run the project: `react-native run-ios`

## Running the app locally - Android

1. Install the react-native-cli - instructions [on the React Native website](https://facebook.github.io/react-native/docs/getting-started)
2. Make sure you've installed Android Studio, have the jdk etc. You'll likely need to create at least one emulator using the Virtual Device Manager (or have a real device connected)
3. Install js dependencies: `yarn install`
4. Start the js bundler: `react-native start`
5. Create `app/config/local.js` - local dev config that isn't committed. Default options can be copied from `app/config/local-example.js`
6. Run the project: `react-native run-android`