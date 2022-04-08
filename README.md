# __Depenedencies__

## Followig pre-requisite to run react native App.
Here is the official environment setup link : 'https://reactnative.dev/docs/environment-setup'

## Navigation
Mobile apps are rarely made up of single screen. Managing the transition between multiple screens is handled by navigator. For navigation between one screen to second screen we are installing  navigation npm(node package manager) within our react-native project.

Below are packages which are using while performing navigation.

* @react-navigation/native
* @react-navigation/stack
* @react-navigation/bottom-tabs(This package is necessary while showing bottom tabs navigation).

Necessary dependency libraries required for react-navigation below:-
* install react-native-reanimated
* react-native-gesture-handler
* react-native-screens
* react-native-safe-area-context
* @react-native-community/masked-view .

I have installed "react-native-linear-gradient" this package also to make gradient view. (Given screen top View)

## __Steps to run the project__

* Take latest pull from git
* You need to install the packages uring 'npm install' command.
	Reason: NPM is short for node package manager, an online directory that contains the various already registered open-source packages. NPM modules consume the various functions as a third-party package when installed into an app using the NPM command npm install.
	Note : This will generate node-modules folder in your project

* Android :
	> To run the application on andorid platform just below commands:
				react-native run-android
* IOS : 
	> To run the application on ios platform firstly go to ios folder (cd ios)
	> Run the command 'pod install' to install pods for ios 
		Reason :  PODS are text file used for documenting source code written in the Perl programming language
		Note : This will generate Pods folder in your ios folder.

* You can run the code in ios by 2 methods:
	> From XCode directly
	> You can run the code by using the command 'react-native run-ios' form your visual studio also.

## Component related Notes
* In the project PatientHistory class has the main code of given screen.
* There are reuseable components under 'src/components' - SearchBar, HeaderItem, PatientItem, ImageIcon.
