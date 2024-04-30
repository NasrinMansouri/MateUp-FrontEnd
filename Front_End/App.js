import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//to change background of active  TAB
// import { useTheme } from "react-native-paper";
// to change the background color
import NavigationTheme from "./app/navigation/NavigationTheme";

//for fonts
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
SplashScreen.preventAutoHideAsync();

import colors from "./app/config/colors";
import BuddyScreen from "./app/screens/buddy/BuddyScreen";
import { GalleryBuddiesWorkout } from "./app/components/home";
import { CardAllCoaches, GalleryAllCoaches } from "./app/components/coach";
import MeetTtrainer from "./app/screens/coach/coachScreenContent/MeetTtrainer";
import CoachScreen from "./app/screens/coach/CoachScreen";
import { Gender } from "./app/components/buddy/filter";
import CardMySession from "./app/components/coach/CardMySession";
import GalleryBuddiesJoinedChallenge from "./app/components/challenge/GalleryBuddiesJoinedChallenge";
import BuddyProfileScreen from "./app/screens/buddy/BuddyProfileScreen";
import MySessions from "./app/screens/coach/coachScreenContent/MySessions";
import CoachProfileScreen from "./app/screens/coach/CoachProfileScreen";
import ListBulletPointWithText from "./app/components/ListBulletPointWithText";
import DisplayVideo from "./app/components/coach/DisplayVideo";
import AvailableGroupsScreen from "./app/screens/coach/AvailableGroupsScreen";
import CardAvailableGroup from "./app/components/coach/CardAvailableGroup";
import MainHomeScreen from "./app/screens/home/MainHomeScreen";
import ChallengeScreen from "./app/screens/challenge/ChallengeScreen";
import DetailsChallengeScreen from "./app/screens/challenge/DetailsChallengeScreen";
import JoinedChallnegeScreen from "./app/screens/challenge/JoinedChallnegeScreen";
import CreateChallengeScreen from "./app/screens/challenge/CreateChallengeScreen";
import NotificationScreen from "./app/screens/NotificationScreen";
import { TabActions } from "@react-navigation/native";
import Screen from "./app/components/Screen";
import LoginScreen from "./app/screens/LoginScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";

// dummy data for Buddy Profile screen
const userProfileData = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  location: "los angeles street" + " 123",
  bio: "Hey there, I’m a fitness enthusiast, born with love for movement, my journey to fitness has been a dynamic dance between sweat sessions and socialising.",
  userImage: require("./assets/person3.jpg"),
  userworkout: ["Running", "Swimming", "Cycling", "Strength Training", "Yoga"],
  education: "University of California, Los Angeles",
  expertise: ["lose weight", "get started", "lose belly fat"],
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

// dummy data for coach Profile screen
const coachProfileData = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  location: "los angeles street" + " 123",
  bio: "Hey there, I’m a fitness enthusiast, born with love for movement, my journey to fitness has been a dynamic dance between sweat sessions and socialising.",
  userImage: require("./assets/person3.jpg"),
  userworkout: ["Running", "Swimming", "Cycling", "Strength Training", "Yoga"],
  education: ["erps 3", "University of California, Los Angeles"],
  expertise: ["lose weight", "get started", "lose belly fat", "lose weight"],
  language: ["English", "Spanish", "French"],
  ratingDetails:
    "The cost for the service is 100 euros per hour for each group of 3 participants. This means that each person within the group will contribute 33.3 euros.",

  BehindSceneDetails:
    "“I live for hyping people up. I’m not a personal trainer, I’m an energy dealer.”",
  firstName: "John",
  videos: [
    {
      id: 1,
      source: require("./assets/videos/trainer1.mp4"),
    },
  ],
};

const coachesClubMembersData = [
  {
    id: 1,
    name: "John Doeeeeeeeeeeeeeeeeee",
    image: require("./assets/person2.jpg"),
    titles: ["strength training", "running"],
  },
  {
    id: 2,
    name: "ray pather ",
    image: require("./assets/person2.jpg"),
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 3,
    name: "ray pather ",
    image: require("./assets/person2.jpg"),
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 4,
    name: "ray pather ",
    image: require("./assets/person2.jpg"),
    titles: ["strength training"],
  },
];

const coachesData = [
  {
    id: 1,
    name: "John Doee",
    image: require("./assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running"],
  },
  {
    id: 2,
    name: "ray pather ",
    image: require("./assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 3,
    name: "aaron",
    image: require("./assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 4,
    name: "ray pather ",
    image: require("./assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training"],
  },
];

const sessionMembersData = [
  {
    id: 1,
    image: require("./assets/person3.jpg"),
  },
  {
    id: 2,
    image: require("./assets/person4.jpg"),
  },
];
const challengeYourBuddiesJoined = [
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

const sessionDetails = {
  id: 1,
  imageTrainer: require("./assets/person2.jpg"),
  trainerName: "John Doe",
  sessionGoal: "Get Strong and get toned",
  date: "Aug 3",
  start: "5 PM",
  end: "7 PM",
  members: [
    {
      id: 1,
      image: require("./assets/person3.jpg"),
    },
    {
      id: 2,
      image: require("./assets/person3.jpg"),
    },
    {
      id: 3,
      image: require("./assets/person3.jpg"),
    },
    {
      id: 4,
      image: require("./assets/person3.jpg"),
    },
    {
      id: 5,
      image: require("./assets/person3.jpg"),
    },
  ],
};

const members = [
  {
    id: 1,
    image: require("./assets/person3.jpg"),
  },
  // {
  //   id: 2,
  //   image: require("./assets/person2.jpg"),
  // },

  (goal = "Get Strong and get toned"),
  (date = "Aug 3"),
  (year = "2024"),
  (start = "5 PM"),
  (end = "7 PM"),
  (spots = "1 spot is still available"),
];

const availableGroups = [
  {
    id: 1,
    members: [
      {
        id: 1,
        image: require("./assets/person3.jpg"),
      },
      {
        id: 2,
        image: require("./assets/person3.jpg"),
      },
    ],
    goal: "Get Strong and get toned",
    date: "Aug 3",
    year: "2024",
    start: "5 PM",
    end: "7 PM",
    spots: "1 spot is still available",
  },
  {
    id: 2,
    members: [
      {
        id: 1,
        image: require("./assets/person3.jpg"),
      },
    ],
    goal: "Get Strong and get toned",
    date: "Aug 3",
    year: "2024",
    start: "5 PM",
    end: "7 PM",
    spots: "2 spot is still available",
  },
];
//dummy data for joined challenge screen
const challengeDetailsData = {
  challengeImage: require("./assets/person3.jpg"),
  ChallengeName: "Cardio Boost Challenge ",
  challengeType: "Cardio workout",
  duration: "15 Hours",
  startDate: "Aug 3",
  endDate: "Aug 4",
  year: "2022",
  challengeDescription:
    "Embark on a transformative journey! Commit to completing  15 hours of cardio within the next 30 days! Join me in making every step count during this four-week adventure! Let's share our experiences here and uplift each other along the way. We've got this! 💪🏃‍♀️🏃‍♂️",
  numberOfMembers: 10,
  yourBuddies: [
    {
      id: 1,
      name: "John Doeeeeeeeeeeeeeeeeeee",
      image: require("./assets/person4.jpg"),
    },
    {
      id: 2,
      name: "John Doeeeeeeeeeeeeeeeeeee",
      image: require("./assets/person5.jpg"),
    },
    {
      id: 3,
      name: "John Doeeeeeeeeeeeeeeeeeee",
      image: require("./assets/person4.jpg"),
    },
    {
      id: 4,
      name: "John Doeeeeeeeeeeeeeeeeeee",
      image: require("./assets/person5.jpg"),
    },
  ],
  numberOfLikes: 30,
  numberOfComments: 10,
};

export default function App() {
  // to change color of bottom tab
  // const theme = useTheme();

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

  // to change color of bottom tab
  // theme.colors.secondaryContainer = "transperent";
  // const CalendarScreen = () => {
  //   <Screen>
  //     <Text>Calendar</Text>
  //   </Screen>;
  // };
  // const Tab = createMaterialBottomTabNavigator();
  // const TabNavigator = () => {
  //   return (
  //     <Tab.Navigator
  //       initialRouteName="Home"
  //       activeColor={colors.orangePrimary}
  //       inactiveColor={colors.grayLight50}
  //       activeIndicatorStyle={{ height: 0 }}
  //       barStyle={{
  //         backgroundColor: colors.blackBc,
  //         elevation: 0, // remove shadow on Android
  //         height: 100,
  //         paddingTop: 0,
  //         paddingRight: 16,
  //         paddingLeft: 1,
  //         paddingVertical: 10,
  //       }}
  //     >
  //       <Tab.Screen
  //         name="Home"
  //         component={MainHomeScreen}
  //         options={{
  //           tabBarIcon: ({ color }) => (
  //             <MaterialCommunityIcons name="home" color={color} size={24} />
  //           ),
  //         }}
  //       />
  //       <Tab.Screen
  //         name="Calendar"
  //         component={CalendarScreen}
  //         options={{
  //           tabBarIcon: ({ color }) => (
  //             <MaterialCommunityIcons
  //               name="calendar-month"
  //               color={color}
  //               size={24}
  //             />
  //           ),
  //         }}
  //       />
  //       <Tab.Screen
  //         name="Buddy"
  //         component={BuddyScreen}
  //         options={{
  //           tabBarIcon: ({ color }) => (
  //             <MaterialCommunityIcons
  //               name="account-group"
  //               color={color}
  //               size={22}
  //             />
  //           ),
  //         }}
  //       />
  //       <Tab.Screen
  //         name="Coach"
  //         component={CoachScreen}
  //         options={{
  //           tabBarIcon: ({ color }) => (
  //             <MaterialCommunityIcons name="account" color={color} size={24} />
  //           ),
  //         }}
  //       />
  //       <Tab.Screen
  //         name="Challenge"
  //         component={ChallengeScreen}
  //         options={{
  //           tabBarIcon: ({ color }) => (
  //             <MaterialCommunityIcons name="trophy" color={color} size={22} />
  //           ),
  //         }}
  //       />
  //     </Tab.Navigator>
  //   );
  // };

  return (
    <>
      <SafeAreaProvider onLayout={handleOnLayout}>
        <NavigationContainer theme={NavigationTheme}>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>

      {/* <View style={styles.container} onLayout={handleOnLayout}> */}
      {/* <LoginScreen /> */}
      {/* <AvailableGroupsScreen availableGroups={availableGroups} /> */}
      {/* <MeetTtrainer /> */}
      {/* <CoachProfileScreen coachProfile={coachProfileData} /> */}
      {/* <DisplayVideo /> */}
      {/* <ChallengeScreen /> */}
      {/* <CoachScreen /> */}
      {/* <DetailsChallengeScreen challengeDetails={challengeDetailsData} /> */}
      {/* <JoinedChallnegeScreen
          challengeDetailsProgress={challengeDetailsData}
        /> */}
      {/* <NotificationScreen /> */}
      {/* <MainHomeScreen /> */}
      {/* <CoachScreen /> */}
      {/* <MySessions sessionDetails={sessionDetails} /> */}

      {/* <GalleryBuddiesJoinedChallenge
          BuddiesJoinedChallenge={challengeYourBuddiesJoined}
        /> */}
      {/* <BuddyScreen /> */}
      {/* <CreateChallengeScreen /> */}

      {/* <BuddyProfileScreen userProfile={userProfileData} /> */}

      {/* <BuddyScreen /> */}
      {/* <MainHomeScreen /> */}
      {/* <ChallengeScreen /> */}
      {/* <GalleryAllCoaches meetAllCoaches={coachesData} /> */}

      {/* <GalleryBuddiesWorkout /> */}
      {/* <BuddyScreen /> */}
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
      {/* <StatusBar style="auto" /> */}
      {/* </View> */}
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
