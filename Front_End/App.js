import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
} from "react-native";

//for fonts
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
SplashScreen.preventAutoHideAsync();

import colors from "./app/config/colors";
import BuddyScreen from "./app/screens/buddy/BuddyScreen";
import AddBuddyBtn from "./app/components/home/AddBuddyBtn";
import MainHomeScreen from "./app/screens/home/MainHomeScreen";
import HomeScreen from "./app/screens/home/HomeScreen";
import NotificationScreen from "./app/screens/NotificationScreen";
import Gender from "./app/components/buddy/filter/Gender";
import CreateChallengeScreen from "./app/screens/challenge/CreateChallengeScreen";
import DatePicker from "./app/components/buddy/filter/DatePicker";
import ProfileTile from "./app/components/shareMemberProfile/ProfileTile";
import Bio from "./app/components/shareMemberProfile/Bio";
import HeaderTile from "./app/components/shareMemberProfile/HeaderTile";
import BuddyProfileScreen from "./app/screens/buddy/BuddyProfileScreen";
import BulletList from "./app/components/shareMemberProfile/BulletList";
import CardJoinedChallenge from "./app/components/challenge/CardJoinedChallenge";

// dummy data for Buddy Profile screen
const userProfileData = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  location: "los angeles street" + " 123",
  bio: "Hey there, I’m a fitness enthusiast, born with love for movement, my journey to fitness has been a dynamic dance between sweat sessions and socialising.",
  userImage: require("./assets/person2.jpg"),
  userworkout: ["Running", "Swimming", "Cycling", "Strength Training", "Yoga"],
  level: ["Beginner"],
  buddiesData: [
    {
      id: 1,
      name: "John Doe",
      image: require("./assets/person3.jpg"),
    },
    {
      id: 2,
      name: "John Doeeeeeeeeeeeeeeeeeee",
      image: require("./assets/person4.jpg"),
    },
    {
      id: 3,
      name: "John Doe",
      image: require("./assets/person5.jpg"),
    },
    {
      id: 4,
      name: "John Doeeeeeeeeeeeeeeeeeee",
      image: require("./assets/person2.jpg"),
    },
    {
      id: 5,
      name: "John Doe",
      image: require("./assets/person3.jpg"),
    },
  ],
  joinedChallengeData: [
    {
      id: 1,
      challenegImage: require("./assets/person2.jpg"),
      challengeName: "Cardio Boost Challenge",
      challengeGoal: "15 Hours",
      startDate: "Aug 3",
      endDate: "Aug 4",
      year: "2022",
      time: "10:00 AM",
    },
    {
      id: 2,
      challenegImage: require("./assets/person2.jpg"),
      challengeName: "Cardio Boost Challenge",
      challengeGoal: "15 Hours",
      startDate: "Aug 3",
      endDate: "Aug 4",
      year: "2022",
      time: "10:00 AM",
    },
  ],
  firstName: "John",
};

export default function App() {
  // const [imageUri, setImageUri] = useState();

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
      <View style={styles.container} onLayout={handleOnLayout}>
        <BuddyProfileScreen userProfile={userProfileData} />
        {/* <BuddyScreen /> */}
        {/* <HeaderTile />
        {/* <BuddyProfileScreen /> */}
        {/* <DatePicker title="Select Date :" placeholder={"when?"} /> */}
        {/* <CreateChallengeScreen /> */}
        {/* <Gender /> */}
        {/* <NotificationScreen /> */}
        {/* <MainHomeScreen /> */}
        {/* <HomeScreen /> */}
        {/* <BulletList
          titles={[
            "Running",
            "Swimming",
            "Cycling",
            "Strength Training",
            "Yoga",
          ]}
        /> */}

        {/* to be continued..... */}
        {/* <CardJoinedChallenge
          challenegImage={require("./assets/person2.jpg")}
          challengeName="Cardio Boost Challenge"
          challengeGoal="15 Hours"
          startDate="Aug 3"
          endDate="Aug 4"
          year="2022"
          time="10:00 AM"
        /> */}
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackBc,
    paddingTop: 33,
    // paddingBottom: 100,
  },
});

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, View, Text } from "react-native";

// import FontLoader from "./app/components/FontLoader";
// import TopNav from "./app/components/TopNav";
// import colors from "./app/config/colors";
// import MainHomeScreen from "./app/screens/home/MainHomeScreen";

// export default function App() {
//   return (
//     <FontLoader>
//       <View style={styles.container}>
//         {/* <TopNav
//           // showProfilePic={true}
//           // userImage={require("./assets/person2.jpg")}
//           showSearchBar={true}
//         /> */}
//         <MainHomeScreen />
//         <StatusBar style="auto" />
//       </View>
//     </FontLoader>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.blackBc,
//     flex: 1,
//   },
// });
