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

const Tab = createMaterialBottomTabNavigator();
const AppNavigator = () => {
  //using notification hooks
  // useNotifications();
  const [token, setToken] = useState(null);
  const theme = useTheme(); // to change color of bottom tab

  useEffect(() => {
    const fetchToken = async () => {
      const userToken = await getUserToken();
      setToken(userToken);
    };

    fetchToken();
  }, []);

  if (!token) {
    // Render loading indicator or return null until token is available
    return null;
  }

  console.log("Token:", token);

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
