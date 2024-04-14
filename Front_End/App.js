import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

//for fonts
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
SplashScreen.preventAutoHideAsync();

import colors from "./app/config/colors";

import Screen from "./app/components/Screen";
import StopwatchApp from "./app/components/challenge/StopWatch";

export default function App() {
  // const [imageUri, setImageUri] = useState();
  // const requestPermission = async () => {
  //   const { granted } = await ImagePicker.requestCameraPermissionsAsync();
  //   if (!granted) alert("You need to enable permission to access the library.");
  // };
  // useEffect(() => {
  //   requestPermission();
  // }, []);

  // const selectImage = async () => {
  //   try {
  //     const result = await ImagePicker.launchImageLibraryAsync();
  //     console.log("Image picker result:", result);
  //     if (!result.canceled) {
  //       console.log("Selected image URI:", result.uri);
  //       // setImageUri(result.uri);
  //       setImageUri(result.assets[0].uri);
  //     }
  //   } catch (error) {
  //     console.log(" errorr reading image:", error);
  //   }
  // };

  //for fonts
  const [isLoaded] = useFonts({
    "montserrat-black": require("./assets/fonts/Montserrat-Black.ttf"),
    "nunitoSans-bold": require("./assets/fonts/NunitoSans7pt-Bold.ttf"),
    "nunitoSans-regular": require("./assets/fonts/NunitoSans7pt-Regular.ttf"),
    "nunitoSans-extraBold": require("./assets/fonts/NunitoSans7pt-ExtraBold.ttf"),
  });
  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [isLoaded]);
  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <View style={styles.container} onLayout={handleOnLayout}>
        {/* <CreateChallengeScreen /> */}
        {/* <NotificationScreen /> */}
        {/* <ListItem /> */}
        {/* <LoginScreen /> */}
        <StopwatchApp />
        {/* <Screen> */}
        {/* <Button title="select image" onPress={selectImage} /> */}
        {/* <Image
            source={{ uri: imageUri }}
            style={{ width: 200, height: 200 }}
          /> */}
        {/* {imageUri && (
            <Image
              source={{ uri: imageUri }}
              style={{ width: 200, height: 200, margin: 10 }}
            />
          )} */}
        {/* </Screen> */}
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackBc,
    // paddingTop: 33,
  },
});

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, View, Text } from "react-native";

// import FontLoader from "./app/components/FontLoader";
// import TopNav from "./app/components/TopNav";
// import colors from "./app/config/colors";
// import MainHomeScreen from "./app/screens/home/MainHomeScreen";

// export default function App() {
//   return (
//     <FontLoader>
//       <View style={styles.container}>
//         {/* <TopNav
//           // showProfilePic={true}
//           // userImage={require("./assets/person2.jpg")}
//           showSearchBar={true}
//         /> */}
//         <MainHomeScreen />
//         <StatusBar style="auto" />
//       </View>
//     </FontLoader>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.blackBc,
//     flex: 1,
//   },
// });
