import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

//for fonts
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
SplashScreen.preventAutoHideAsync();

import colors from "./app/config/colors";

import GalleryBuddies from "./app/components/GalleryBuddies";
const buddiesData = [
  {
    id: 1,
    name: "Red ",
    image: require("./assets/person-1.jpg"),
  },
  {
    id: 2,
    name: "Coucheeeeeeee ",
    image: require("./assets/person-1.jpg"),
  },
  {
    id: 3,
    name: "Couchhhhhhhhh ",
    image: require("./assets/person-1.jpg"),
  },
  {
    id: 4,
    name: "Couch ",
    image: require("./assets/person-1.jpg"),
  },
  {
    id: 5,
    name: "Couch ",
    image: require("./assets/person-1.jpg"),
  },
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
    <View
      style={styles.container}
      onLayout={handleOnLayout} //for fonts
    >
      <GalleryBuddies buddies={buddiesData} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blackBc,
    marginTop: 50,
  },
});
