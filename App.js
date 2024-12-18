import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { navigationRef } from "./app/navigation/rootNavigation";
import { useFonts } from "expo-font";
import {
  checkAndDeleteKey,
  getFromAsyncStorage,
  clearStorage,
} from "./app/auth/asyncStorage";
// import { AppLoading } from "expo";

// to change the background color
import NavigationTheme from "./app/navigation/NavigationTheme";

//for fonts
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
SplashScreen.preventAutoHideAsync();

import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import AppNavigator from "./app/navigation/AppNavigator";
import LoginScreen from "./app/screens/LoginScreen";
import myTheme from "./app/navigation/NavigationTheme";
import { setUserToken } from "./app/auth/userToken";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [memberId, setMemberId] = useState(null);
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [isLoaded] = useFonts({
    "montserrat-black": require("./assets/fonts/Montserrat-Black.ttf"),
    "nunitoSans-bold": require("./assets/fonts/NunitoSans7pt-Bold.ttf"),
    "nunitoSans-regular": require("./assets/fonts/NunitoSans7pt-Regular.ttf"),
    "nunitoSans-extraBold": require("./assets/fonts/NunitoSans7pt-ExtraBold.ttf"),
  });

  useEffect(() => {
    const clearStorageOnLaunch = async () => {
      await clearStorage();
    };
    clearStorageOnLaunch();
  }, []);

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  useEffect(() => {
    const checkAuthToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("userToken");
        if (storedToken) {
          setUserToken(storedToken);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error retrieving userToken:", error);
      }
    };

    const checkUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem("userId");
        if (storedUserId) {
          setUserId(storedUserId);
        }
      } catch (error) {
        console.error("Error retrieving userId:", error);
      }
    };

    const checkMemberId = async () => {
      try {
        const storedMemberId = await AsyncStorage.getItem("memberId");
        if (storedMemberId) {
          setMemberId(storedMemberId);
        }
      } catch (error) {
        console.error("Error retrieving memberId:", error);
      }
    };

    checkAuthToken();
    checkUserId();
    checkMemberId();
  }, []);

  const handleLogin = async (userToken, userId, memberId) => {
    try {
      await AsyncStorage.setItem("userToken", userToken);
      await AsyncStorage.setItem("userId", userId.toString());
      await AsyncStorage.setItem("memberId", memberId.toString());
      setUserToken(userToken);
      setUserId(userId);
      setMemberId(memberId);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error saving userToken and userId:", error);
    }
  };

  if (error) {
    console.error("Error loading fonts:", error);
    return null;
  }

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <SafeAreaProvider onLayout={handleOnLayout}>
        <NavigationContainer ref={navigationRef} theme={myTheme}>
          {isAuthenticated ? (
            <AppNavigator
              userToken={userToken}
              userId={userId}
              memberId={memberId}
            />
          ) : (
            <AuthNavigator onLogin={handleLogin} />
          )}
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({});

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
};

//show buddies
const buddies = [
  {
    id: 1,
    name: "MMMMMMMMMMMMMMMM ",
    image: require("./assets/person2.jpg"),
  },
  {
    id: 2,
    name: "Coucheeeeeeee ",
    image: require("./assets/person-1.jpg"),
  },
  {
    id: 3,
    name: "Couchhhhhhhhh ",
    image: require("./assets/person-1.jpg"),
  },
  {
    id: 4,
    name: "NNNNNN NNNNN ",
    image: require("./assets/person-1.jpg"),
  },
  {
    id: 5,
    name: "Couch ",
    image: require("./assets/person-1.jpg"),
  },
];
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
    challengeName: "Vitality Voyage Challenge",
    duration: "7 Hours",
    beginingDate: "AGU 3",
    endingDate: "sep 3",
    year: 2024,
    onPress: () => {
      // console.log("card pressed");
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
    challengeName: "Muscle Power Marathon",
    duration: "7 Hours",
    beginingDate: "AGU 3",
    endingDate: "sep 3",
    year: 2024,
    onPress: () => {
      // console.log("card pressed");
    },
    Buddies: [{ id: 1, image: require("./assets/person-1.jpg") }],
  },
  {
    id: 3,
    image: require("./assets/person-1.jpg"),
    challengeName: "Fitness Elevation",
    duration: "7 Hours",
    beginingDate: "AGU 3",
    endingDate: "sep 3",
    year: 2024,
    onPress: () => {
      // console.log("card pressed");
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
// dummy data for member profile
const memberProfile = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  location: "los angeles street" + " 123",
  bio: "Hey there, I’m a fitness enthusiast, born with love for movement, my journey to fitness has been a dynamic dance between sweat sessions and socialising.",
  userImage: require("./assets/person3.jpg"),
  userWorkout: ["Running", "Swimming", "Cycling", "Strength Training", "Yoga"],
  level: ["Beginner"],
  buddiesData: [
    {
      id: 1,
      name: "John Doe",
      image: require("./assets/person3.jpg"),
    },
    {
      id: 2,
      name: "John Doe",
      image: require("./assets/person3.jpg"),
    },
    {
      id: 3,
      name: "John Doe",
      image: require("./assets/person3.jpg"),
    },
    {
      id: 4,
      name: "John Doe",
      image: require("./assets/person3.jpg"),
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
      challenegImage: require("./assets/person3.jpg"),
      challengeName: "Cardio Boost Challenge",
      challengeGoal: "15 Hours",
      startDate: "Aug 3",
      endDate: "Aug 4",
      year: "2022",
      time: "10:00 AM",
    },
    {
      id: 2,
      challenegImage: require("./assets/person3.jpg"),
      challengeName: "Cardio Boost Challenge",
      challengeGoal: "15 Hours",
      startDate: "Aug 3",
      endDate: "Aug 4",
      year: "2022",
      time: "10:00 AM",
    },
  ],
};
