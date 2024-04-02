import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

//for fonts
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
SplashScreen.preventAutoHideAsync();

import colors from "./app/config/colors";
import AppButton from "./app/components/AppButton";
import AppButtonBorder from "./app/components/AppButtonBorder";
import GalleryEducationalContent from "./app/components/GalleryEducationalContent";
import UserNextWorkoutPlanning from "./app/components/UserNextWorkoutPlanning";

const dataEducationalContent = [
  {
    id: 1,
    image: require("./assets/image/educational-1.jpg"),
    title: "workout buddy",
    subttle: "Your buddy will thank you for it",
  },
  {
    id: 2,
    image: require("./assets/image/educational-2.jpg"),
    title: "move with me",
    subttle: "behind the scenes by sarah",
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
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollview}
        onLayout={handleOnLayout} //for fonts
      >
        <UserNextWorkoutPlanning />
        <GalleryEducationalContent
          educationalContent={dataEducationalContent}
        />
        <View style={{ alignItems: "center", marginBottom: 200 }}>
          <AppButton title={"see all"} width={222} height={45} />
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
    // paddingTop: 50,
  },
  scrollview: {
    flex: 1,
  },
});
