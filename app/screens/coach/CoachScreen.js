import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";

import Screen from "../../components/Screen";
import colors from "../../config/colors";
import TopNav from "../../components/topNavigation/TopNav";
import MeetTtrainer from "./coachScreenContent/MeetTtrainer";
import MySession from "./coachScreenContent/MySession";

const Tab = createMaterialTopTabNavigator();

const CoachScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <TopNav
        showSearchBar={true}
        onPressMessage={() => {
          console.log("message");
        }}
        onPressNotification={() => {
          navigation.navigate("Notification");
        }}
      />
      <Tab.Navigator
        // initialRouteName="Meet Trainers"
        screenOptions={{
          tabBarLabelStyle: {
            fontFamily: "montserrat-black",
            fontSize: 14,
          },
          tabBarIndicatorStyle: { backgroundColor: colors.green, height: 3 },
          tabBarActiveTintColor: colors.green,
          tabBarInactiveTintColor: colors.grayLight50,
          tabBarStyle: { backgroundColor: colors.blackBc, height: 42 },
        }}
      >
        <Tab.Screen name="Meet Trainers" component={MeetTtrainer} />
        <Tab.Screen name="My Sessions" component={MySession} />
      </Tab.Navigator>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.blackBc,
  },
});

export default CoachScreen;
