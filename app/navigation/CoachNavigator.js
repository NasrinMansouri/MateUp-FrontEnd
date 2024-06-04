import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AvailableGroupsScreen from "../screens/coach/AvailableGroupsScreen";
import colors from "../config/colors";
import CoachProfileScreen from "../screens/coach/CoachProfileScreen";
import NotificationScreen from "../screens/NotificationScreen";
import CoachScreen from "../screens/coach/CoachScreen";
import SearchScreen from "../screens/SearchScreen";
import CoachSearchScreen from "../screens/coach/CoachSearchScreen";

const Stack = createNativeStackNavigator();

const CoachNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="coach">
      <Stack.Screen
        name="coach"
        component={CoachScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CoachProfile"
        component={CoachProfileScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.blackBc,
          },
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="AvailableGroups"
        component={AvailableGroupsScreen}
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
          headerTitle: "Available Groups",
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
        name="SearchCoach"
        component={CoachSearchScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CoachNavigator;
