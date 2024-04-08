// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
// import { useFonts } from "expo-font";

// //for fonts
// import * as SplashScreen from "expo-splash-screen";
// import { useCallback } from "react";
// SplashScreen.preventAutoHideAsync();

// import colors from "./app/config/colors";
// import AppButtonBorder from "./app/components/AppButtonBorder";

// export default function App() {
//   //for fonts
//   const [isLoaded] = useFonts({
//     "montserrat-black": require("./assets/fonts/Montserrat-Black.ttf"),
//     "nunitoSans-bold": require("./assets/fonts/NunitoSans7pt-Bold.ttf"),
//     "nunitoSans-regular": require("./assets/fonts/NunitoSans7pt-Regular.ttf"),
//     "nunitoSans-extraBold": require("./assets/fonts/NunitoSans7pt-ExtraBold.ttf"),
//   });
//   const handleOnLayout = useCallback(async () => {
//     if (isLoaded) {
//       await SplashScreen.hideAsync(); //hide the splashscreen
//     }
//   }, [isLoaded]);
//   if (!isLoaded) {
//     return null;
//   }

//   return (
//     <View style={styles.container} onLayout={handleOnLayout}>
//       <ScrollView style={styles.View}>
//       // //for fix btn
// {
//   /* <View
//         style={{
//           // marginBottom: 100,
//           position: "absolute",
//           top: "75%",
//           right: 24,
//           zIndex: 1,
//         }}
//       >
//         <AppButtonBorder
//           image={require("./assets/icons/calendar.png")}
//           title="calendar"
//         />
//       </View> */
// }
//         <StatusBar style="auto" />
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.blackBc,

//     // paddingTop: 50,
//     // paddingLeft: 16,
//   },
//   // View: {
//   //   flex: 1,
//   // },
// });

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

import FontLoader from "./app/components/FontLoader";
import colors from "./app/config/colors";
import MainHomeScreen from "./app/screens/home/MainHomeScreen";

export default function App() {
  return (
    <FontLoader>
      <View style={styles.container}>
        <Text>hello</Text>
        <MainHomeScreen />
        <StatusBar style="auto" />
      </View>
    </FontLoader>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackBc,
    flex: 1,
  },
});
