import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { useFonts } from "expo-font";

//for fonts
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
SplashScreen.preventAutoHideAsync();

import colors from "./app/config/colors";
import AppButtonBorder from "./app/components/AppButtonBorder";

import CardMeetTheMemberOfTheMonth from "./app/components/home/CardMeetTheMemberOfTheMonth";
import CardMatchClubMembers from "./app/components/buddy/CardMatchClubMembers";
import GalleryMatchClubMembers from "./app/components/buddy/GalleryMatchClubMembers";

const UserClubMembersData = [
  {
    id: 1,
    name: "John Doeeeeeeeeeeeeeeeeee",
    image: require("./assets/person-1.jpg"),
    titles: ["strength training", "running"],
  },
  {
    id: 2,
    name: "ray pather ",
    image: require("./assets/person-1.jpg"),
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 3,
    name: "ray pather ",
    image: require("./assets/person-1.jpg"),
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 3,
    name: "ray pather ",
    image: require("./assets/person-1.jpg"),
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
      <ScrollView style={styles.View}>
        <View>
          <CardMeetTheMemberOfTheMonth
            images={[
              { id: "topLeft", image: require("./assets/person-1.jpg") },
              { id: "buttomCenter", image: require("./assets/person-1.jpg") },
              { id: "topRight", image: require("./assets/person2.jpg") },
              { id: "bottomLeft", image: require("./assets/person3.jpg") },
              { id: "bottomRight", image: require("./assets/person-1.jpg") },
            ]}
          />
          <CardMatchClubMembers
            name={"Jen"}
            image={require("./assets/person2.jpg")}
            titles={[
              "strength training",
              "running",
              "swimming",
              "yoga",
              "boxing",
            ]}
          />
          <GalleryMatchClubMembers UserClubMembers={UserClubMembersData} />
          {/* <GalleryMatchClubMembers membersAtClub={membersAtClubData} /> */}
        </View>
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
  },
  View: {
    flex: 1,
  },
});
