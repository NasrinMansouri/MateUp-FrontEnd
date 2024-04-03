import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";

//for fonts
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
SplashScreen.preventAutoHideAsync();

import colors from "./app/config/colors";
import AppButtonBorder from "./app/components/AppButtonBorder";

import GalleryAllCoaches from "./app/components/coach/GalleryAllCoaches";
import Avatar from "./app/components/coach/Avatar";
import GroupAvatar from "./app/components/coach/Avatar";

const coachesData = [
  {
    id: 1,
    name: "John Doee",
    image: require("./assets/person-1.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running"],
  },
  {
    id: 2,
    name: "ray pather ",
    image: require("./assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 3,
    name: "aaron",
    image: require("./assets/person-1.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 4,
    name: "ray pather ",
    image: require("./assets/person-1.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training"],
  },
];

export default function App() {
  const buddies = [
    { id: 1, image: require("./assets/person-1.jpg") },
    { id: 2, image: require("./assets/person2.jpg") },
    { id: 3, image: require("./assets/person2.jpg") },
    { id: 4, image: require("./assets/person2.jpg") },
    { id: 5, image: require("./assets/person2.jpg") },
    { id: 6, image: require("./assets/person2.jpg") },
    { id: 7, image: require("./assets/person2.jpg") },
    // Add more buddies as needed
  ];

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
      <ScrollView style={styles.scrollview}>
        <GalleryAllCoaches meetAllCoaches={coachesData} />
        <GroupAvatar buddies={buddies} />
        {/* <Avatar image={coachesData} /> */}
        <StatusBar style="auto" />
      </ScrollView>
      <View
        style={{
          // marginBottom: 100,
          position: "absolute",
          top: "75%",
          right: 24,
          zIndex: 1,
        }}
      >
        <AppButtonBorder
          image={require("./assets/icons/calendar.png")}
          title="calendar"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackBc,
    paddingTop: 50,
  },
  scrollview: {
    flex: 1,
  },
});
