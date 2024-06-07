import React, { useState, useEffect } from "react";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import navigation from "./rootNavigation";

//to change background of active  TAB
import { useTheme } from "react-native-paper";

import colors from "../config/colors";
import HomeNavigator from "./HomeNavigator";
import BuddyNavigator from "./BuddyNavigator";
import CoachNavigator from "./CoachNavigator";
import ChallengeNavigator from "./ChallengeNavigator";
import Calendar from "../screens/calendar/Calendar";
import useNotifications from "../hooks/useNotifications";
import { getUserToken } from '../auth/userToken';
import { saveToAsyncStorage , getFromAsyncStorage} from '../auth/asyncStorage';

const Tab = createMaterialBottomTabNavigator();
const AppNavigator = ({ userToken, userId, memberId, onLogout }) => {
  //using notification hooks
  // useNotifications();
  const theme = useTheme(); // to change color of bottom tab

  useEffect(() => {
    // You can access userToken and userId here
    console.log('User Token on AppNavigator:', userToken);
    console.log('User ID on AppNavigator:', userId);
    console.log('Member ID on AppNavigator:', memberId);
  }, [userToken, userId, memberId]);

  // save the userToken, userId, memberId to AsyncStorage
  useEffect(() => {
    saveToAsyncStorage(userToken, userId, memberId);
  }, [userToken, userId, memberId]);

  if (!userToken) {
    // Render loading indicator or return null until token is available
    return null;
  }

  if (!userId) {
    // Render loading indicator or return null until token is available
    return null;
  }

  if (!memberId) {
    // Render loading indicator or return null until token is available
    return null;
  }

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
        component={Calendar}
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
        component={BuddyNavigator}
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
        component={CoachNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Challenge"
        component={ChallengeNavigator}
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
