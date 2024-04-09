import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
//for fonts
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
SplashScreen.preventAutoHideAsync();

import colors from "./app/config/colors";
import MainHomeScreen from "./app/screens/home/MainHomeScreen";
import SearchBar from "./app/components/SearchBar";
import ListItem from "./app/components/ListItem";
import ListItemScreen from "./app/screens/ListItemScreen";

const dummyData = [
  {
    name: "John Doe",
    title: "Confirmed your High-Five request.",
    userImage: require("./assets/person2.jpg"), // Replace with actual image path
    onPressConfirm: () => console.log("Confirm pressed for John Doe"),
    onPressDecline: () => console.log("Decline pressed for John Doe"),
    showRequestResult: true, // or false based on your requirement
    showRequest: false, // or true based on your requirement
  },
  {
    name: "Jane Smith",
    title: "Sent you a High-Five request.",
    userImage: require("./assets/person3.jpg"), // Replace with actual image path
    onPressConfirm: () => console.log("Confirm pressed for Jane Smith"),
    onPressDecline: () => console.log("Decline pressed for Jane Smith"),
    showRequestResult: false, // or true based on your requirement
    showRequest: true, // or false based on your requirement
  },
  // Add more dummy data objects as needed
];

export default function App() {
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
    <View style={styles.container} onLayout={handleOnLayout}>
      {/* <MainHomeScreen /> */}
      {/* <SearchBar /> */}
      {dummyData.map((data, index) => (
        <ListItem
          key={index}
          name={data.name}
          title={data.title}
          userImage={data.userImage}
          onPressConfirm={data.onPressConfirm}
          onPressDecline={data.onPressDecline}
          showRequestResult={data.showRequestResult}
          showRequest={data.showRequest}
        />
      ))}
      <ListItemScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackBc,
    paddingTop: 32,
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
