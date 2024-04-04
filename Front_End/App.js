import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { useFonts } from "expo-font";

//for fonts
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
SplashScreen.preventAutoHideAsync();

import colors from "./app/config/colors";
import AppButtonBorder from "./app/components/AppButtonBorder";

import CardChallenges from "./app/components/challenge/CardChallenges";
import GalleryPersonalizedChallenge from "./app/components/challenge/GalleryPersonalizedChallenge";

const challengeData = [
  {
    id: 1,
    image: require("./assets/person-1.jpg"),
    challengeName: "Weekly Challenge",
    duration: "7 Hours",
    beginingDate: "AGU 3",
    endingDate: "sep 3",
    year: 2024,
    onPress: () => {
      console.log("card pressed");
    },
    Buddies: [
      { id: 1, image: require("./assets/person-1.jpg") },
      { id: 2, image: require("./assets/person2.jpg") },
      { id: 3, image: require("./assets/person2.jpg") },
      { id: 4, image: require("./assets/person2.jpg") },
      { id: 5, image: require("./assets/person2.jpg") },
      { id: 6, image: require("./assets/person2.jpg") },
      { id: 7, image: require("./assets/person2.jpg") },
    ],
  },
  {
    id: 2,
    image: require("./assets/person-1.jpg"),
    challengeName: "Weekly Challenge",
    duration: "7 Hours",
    beginingDate: "AGU 3",
    endingDate: "sep 3",
    year: 2024,
    onPress: () => {
      console.log("card pressed");
    },
    Buddies: [{ id: 1, image: require("./assets/person-1.jpg") }],
  },
  {
    id: 3,
    image: require("./assets/person-1.jpg"),
    challengeName: "Weekly Challenge",
    duration: "7 Hours",
    beginingDate: "AGU 3",
    endingDate: "sep 3",
    year: 2024,
    onPress: () => {
      console.log("card pressed");
    },
    Buddies: [
      { id: 1, image: require("./assets/person-1.jpg") },
      { id: 2, image: require("./assets/person2.jpg") },
      { id: 3, image: require("./assets/person2.jpg") },
      { id: 4, image: require("./assets/person2.jpg") },
      { id: 5, image: require("./assets/person2.jpg") },
    ],
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
      <ScrollView style={styles.View}>
        <CardChallenges
          image={require("./assets/person2.jpg")}
          challengeName="Weekly Challenge"
          duration="7 Hours"
          beginingDate="AUG 3"
          endingDate="SEP 3"
          year={2024}
          borderWidth={0}
          cardHeight={284}
          cardWidth="100%"
        />

        <CardChallenges
          onPress={() => console.log("card pressed")}
          image={require("./assets/person2.jpg")}
          challengeName="Weekly Challenge"
          duration="7 Hours"
          beginingDate="AUG 3"
          endingDate="SEP 3"
          year={2024}
          Buddies={[
            { id: 1, image: require("./assets/person2.jpg") },
            { id: 2, image: require("./assets/person-1.jpg") },
            { id: 3, image: require("./assets/person2.jpg") },
            { id: 4, image: require("./assets/person2.jpg") },
            { id: 5, image: require("./assets/person2.jpg") },
          ]}
        />
        <GalleryPersonalizedChallenge PersonalizedChallenge={challengeData} />
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
