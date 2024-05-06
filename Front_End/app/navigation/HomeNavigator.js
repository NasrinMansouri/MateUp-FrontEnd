import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "../config/colors";
import MainHomeScreen from "../screens/home/MainHomeScreen";
import BuddyScreen from "../screens/buddy/BuddyScreen";
import BuddyProfileScreen from "../screens/buddy/BuddyProfileScreen";
import NotificationScreen from "../screens/NotificationScreen";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MainHomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Buddy"
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
    </Stack.Navigator>
  );
};

export default HomeNavigator;