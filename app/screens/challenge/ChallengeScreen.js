import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen from "../../components/Screen";
import colors from "../../config/colors";
import TopNav from "../../components/topNavigation/TopNav";
import Join from "./challengeScreen/Join";
import MyChallenges from "./challengeScreen/MyChallenges";

const Tab = createMaterialTopTabNavigator();

const ChallengeScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <TopNav
        showSearchBar={true}
        onPressSearch={() => navigation.navigate("SearchChallenge")}
        onPressMessage={() => {
          console.log("message");
        }}
        // onPressNotification={() => {
        //   navigation.navigate("Notification");
        // }}
      />
      <Tab.Navigator
        // initialRouteName="Join"
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
        <Tab.Screen name="Join" component={Join} />
        <Tab.Screen name="My Challenges" component={MyChallenges} />
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

export default ChallengeScreen;
