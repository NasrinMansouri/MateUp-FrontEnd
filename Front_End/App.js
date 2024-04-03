import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";

//for fonts
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
SplashScreen.preventAutoHideAsync();

import colors from "./app/config/colors";
import AppButtonBorder from "./app/components/AppButtonBorder";

import GalleryMatchBasedWorkout from "./app/components/buddy/GalleryMatchBasedWorkout";
import CardProfile from "./app/components/CardProfile";
import GalleryBuddies from "./app/components/GalleryBuddies";
const matchClubMembersData = [
  {
    id: 1,
    name: "John Doeeeeeeeeeeeeeeeeee",
    image: require("./assets/person-1.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running"],
  },
  {
    id: 2,
    name: "ray pather ",
    image: require("./assets/person-1.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 3,
    name: "ray pather ",
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
const Data = [
  {
    id: 1,

    image: require("./assets/person-1.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running"],
  },
  {
    id: 2,

    image: require("./assets/person-1.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 3,

    image: require("./assets/person-1.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 4,

    image: require("./assets/person-1.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training"],
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
    <View style={styles.container} onLayout={handleOnLayout}>
      <ScrollView style={styles.scrollview}>
        <Text
          style={{
            color: "white",
            fontFamily: "montserrat-black",
            fontSize: 24,
          }}
        >
          hiiiii
        </Text>
        <View style={{ marginBottom: 26 }}>
          <CardProfile
            onPress={() => console.log("tapped")}
            backgroundColor={colors.blackBc}
            flexDirection={"column"}
            cardWidth={97}
            image={require("./assets/person-1.jpg")}
            imageHeight={77}
            imageWidth={77}
            imageRadius={77 / 2}
            fontSize={14}
          />
        </View>
        <GalleryBuddies buddies={Data} />
        <GalleryMatchBasedWorkout matchMemberWorkout={matchClubMembersData} />
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
    // paddingLeft: 16,
    // paddingRight: 16,
  },
  scrollview: {
    flex: 1,
  },
});
