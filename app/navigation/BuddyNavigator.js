import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "../config/colors";
import BuddyScreen from "../screens/buddy/BuddyScreen";
import BuddyProfileScreen from "../screens/buddy/BuddyProfileScreen";
import NotificationScreen from "../screens/NotificationScreen";
import DetailsChallengeScreen from "../screens/challenge/DetailsChallengeScreen";
import BuddySearchScreen from "../screens/buddy/BuddySearchScreen";

const Stack = createNativeStackNavigator();

const BuddyNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="buddy"
      // screenOptions={{ presentation: "modal" }}
    >
      <Stack.Screen
        name="buddy"
        component={BuddyScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MemberProfile"
        component={BuddyProfileScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.blackBc,
          },
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.blackBc,
            // TODO: the border bottom doesn't work!
            borderBottomWidth: 1,
            borderBottomColor: colors.grayLight50,
          },
          headerTitleStyle: {
            color: colors.white,
            fontSize: 16,
          },
          headerTitle: "Notifications",
        }}
      />

      {/* <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="SearchBuddy"
        component={BuddySearchScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ChallengeDetails"
        component={DetailsChallengeScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.blackBc,
          },
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default BuddyNavigator;
