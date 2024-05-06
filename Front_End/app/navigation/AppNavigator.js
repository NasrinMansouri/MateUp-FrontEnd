import React from "react";
import { Text } from "react-native";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//to change background of active  TAB
import { useTheme } from "react-native-paper";

import colors from "../config/colors";
import { Screen } from "../components/Screen";
import BuddyScreen from "../screens/buddy/BuddyScreen";
import ChallengeScreen from "../screens/challenge/ChallengeScreen";
import CoachScreen from "../screens/coach/CoachScreen";
import HomeNavigator from "./HomeNavigator";

const CalendarScreen = () => {
  <Screen>
    <Text>Calendar</Text>
  </Screen>;
};

const Tab = createMaterialBottomTabNavigator();
const AppNavigator = () => {
  const theme = useTheme(); // to change color of bottom tab

  theme.colors.secondaryContainer = "transperent"; // to change color of bottom tab
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.orangePrimary}
      inactiveColor={colors.grayLight50}
      activeIndicatorStyle={{ height: 0 }}
      barStyle={{
        backgroundColor: colors.blackBc,
        elevation: 0, // remove shadow on Android
        height: 100,
        paddingTop: 0,
        paddingRight: 16,
        paddingLeft: 1,
        paddingVertical: 10,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-variant"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="calendar-month"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Buddy"
        component={BuddyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Coach"
        component={CoachScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Challenge"
        component={ChallengeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="trophy" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
