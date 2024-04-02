import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

//for fonts
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
SplashScreen.preventAutoHideAsync();

import colors from "./app/config/colors";
import BulletPointWithText from "./app/components/BulletPointWithText";

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
      <BulletPointWithText
        bulletColor={colors.orangePrimary}
        width={5}
        height={5}
        borderRadius={5 / 2}
        marginRight={4}
        text="spinning"
        textColor={colors.white}
        fontFamily="nunitoSans-bold"
        textTransform={"uppercase"}
        fontSize={16}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: colors.blackBc,
    marginTop: 50,
  },
});
