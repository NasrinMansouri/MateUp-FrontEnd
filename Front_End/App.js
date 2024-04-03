import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";

//for fonts
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
SplashScreen.preventAutoHideAsync();

import colors from "./app/config/colors";
import AppButtonBorder from "./app/components/AppButtonBorder";

import CardMeetTheMemberOfTheMonth from "./app/components/CardMeetTheMemberOfTheMonth";
import CardMeetYourClubMembers from "./app/components/buddy/CardMeetYourClubMembers";
//to be used in screen as:

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

        <View style={{ flexDirection: "row" }}>
          <CardMeetYourClubMembers
            name={"Jen"}
            image={require("./assets/person2.jpg")}
            titles={["strengthhhhhh training", "running"]}
          />
          <CardMeetYourClubMembers
            name={"Jenn"}
            image={require("./assets/person2.jpg")}
            titles={["spinning", "running", "swimming", "yoga", "boxing"]}
          />
          <CardMeetYourClubMembers
            name={"Jen"}
            image={require("./assets/person2.jpg")}
            titles={["spinning"]}
          />
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
  },
  scrollview: {
    flex: 1,
  },
});
