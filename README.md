# RiddleApp
This is a fun riddle Application build with react-native, react navigation and react-native-cli.

## How to run
```
git clone https://github.com/Shrek53/Riddle.git
cd Riddle
npm install
```
After that inside node-module/react-native-admob/android/build.gradle file
change the line  
compile 'com.google.android.gms:play-services-ads:+'  
with the following line  
compile 'com.google.android.gms:play-services-ads:16.0.0'  

Then run the following commnd 
```
react-native run-android
```

## How to build APK for android
Firstly Build a keystore and then configure "android/gradle.properties" file accordingly.

Secondly in  
"node-module/react-native-admob/android/build.gradle"  
file change the compileSdkVersion and buildToolsVersion to following values  
compileSdkVersion 27  
buildToolsVersion "27.0.3"  

then run the following command inside android folder
```
./gradlew assembleRelease
```


for more info about how to setup initial environment and run react-native code with react-native-cli follow this link 
https://facebook.github.io/react-native/docs/getting-started
go to "Building Projects With Native Code" tab

