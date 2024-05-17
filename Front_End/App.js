import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// to change the background color
import NavigationTheme from "./app/navigation/NavigationTheme";

//for fonts
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
SplashScreen.preventAutoHideAsync();

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
    <>
      <SafeAreaProvider onLayout={handleOnLayout}>
        <NavigationContainer theme={myTheme}>
          <AppNavigator />
          {/* <AuthNavigator /> */}
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({});
