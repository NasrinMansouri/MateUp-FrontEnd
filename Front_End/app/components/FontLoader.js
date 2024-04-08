import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
SplashScreen.preventAutoHideAsync();

import { View } from "react-native";

export default function FontLoader({ children }) {
  //for fonts
  const [isLoaded] = useFonts({
    "montserrat-black": require("../../assets/fonts/Montserrat-Black.ttf"),
    "nunitoSans-bold": require("../../assets/fonts/NunitoSans7pt-Bold.ttf"),
    "nunitoSans-regular": require("../../assets/fonts/NunitoSans7pt-Regular.ttf"),
    "nunitoSans-extraBold": require("../../assets/fonts/NunitoSans7pt-ExtraBold.ttf"),
  });
  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [isLoaded]);
  if (!isLoaded) {
    return null;
  }
  return children;
}
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// import { useCallback } from "react";
// SplashScreen.preventAutoHideAsync();

// import { View } from "react-native";

// export default function FontLoader({ children }) {
//   //for fonts
//   const [isLoaded] = useFonts({
//     "montserrat-black": require("../../assets/fonts/Montserrat-Black.ttf"),
//     "nunitoSans-bold": require("../../assets/fonts/NunitoSans7pt-Bold.ttf"),
//     "nunitoSans-regular": require("../../assets/fonts/NunitoSans7pt-Regular.ttf"),
//     "nunitoSans-extraBold": require("../../assets/fonts/NunitoSans7pt-ExtraBold.ttf"),
//   });
//   const handleOnLayout = useCallback(async () => {
//     if (isLoaded) {
//       await SplashScreen.hideAsync(); //hide the splashscreen
//     }
//   }, [isLoaded]);
//   if (!isLoaded) {
//     return null;
//   }
//   return <View onLayout={handleOnLayout}>{children}</View>;
// }
