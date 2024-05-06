import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "../config/colors";
import NotificationScreen from "../screens/NotificationScreen";
import ChallengeScreen from "../screens/challenge/ChallengeScreen";
import DetailsChallengeScreen from "../screens/challenge/DetailsChallengeScreen";
import JoinedChallengeScreen from "../screens/challenge/JoinedChallengeScreen";
import CreateChallengeScreen from "../screens/challenge/CreateChallengeScreen";

const Stack = createNativeStackNavigator();

const ChallengeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Challenge">
      <Stack.Screen
        name="Challenge"
        component={ChallengeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ChallengeDetails"
        component={DetailsChallengeScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.blackBc,
          },
          headerTitle: "Challenge Details",
        }}
      />

      <Stack.Screen
        name="JoinedChallenge"
        component={JoinedChallengeScreen}
        options={{ headerShown: false }}
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

      <Stack.Screen
        name="CreateChallenge"
        component={CreateChallengeScreen}
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

export default ChallengeNavigator;
