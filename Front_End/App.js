import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

//for fonts
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
SplashScreen.preventAutoHideAsync();

import AppButtonBorder from "./app/components/AppButtonBorder";

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
      <AppButtonBorder
        title="join"
        image={require("./assets/icons/calendar.png")}
        onPress={() => console.log("tapped")}
      />

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
  },
});
