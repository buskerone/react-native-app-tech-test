# App
This app consist in two screens:
- Registration p1 (user data + validation)
- Registration p2 (array of looks where you can choose one and save it to local storage)

![rnapp](https://user-images.githubusercontent.com/2034112/73492059-afad2b00-438e-11ea-90d6-ac6f4194cdb9.png)

## Instructions

 1. `yarn` or `yarn install`
 2. Install pods `cd ios` -> `pod install`
 3. iOS: `react-native run-ios`
 4. Android: `react-native run-android`

## Folder structure

 - src
	 - assets
	 - components
	 - navigation
	 - redux
		 - actions
		 - reducers
	- screens
		- RegistrationScreens
			- RegistrationFormScreen
			- RegistrationLookScreen

## Dependencies

 - "@react-native-community/async-storage": "^1.7.1"
 - "@react-native-community/masked-view": "^0.1.6"
 - "formik": "^2.1.2"
 - "react": "16.9.0"
 - "react-native": "0.61.5"
 - "react-native-elements": "^1.2.7"
 - "react-native-gesture-handler": "^1.5.3"
 - "react-native-keyboard-aware-scroll-view": "^0.9.1"
 - "react-native-safe-area-context": "^0.6.2"
 - "react-native-vector-icons": "^6.6.0"
 - "react-navigation": "^4.0.10"
 - "react-navigation-stack": "^2.0.15"
 - "react-redux": "^7.1.3"
 - "redux": "^4.0.5"
 - "redux-persist": "^6.0.0"
 - "redux-thunk": "^2.3.0"
 - "yup": "^0.28.0"
