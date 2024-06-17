import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";
import StopWatch from "../../screens/challenge/StopWatch";

export default function StartChallengeScreen({ navigation, route }) {
  const { challengeId } = route.params;
  console.log("my challneg iddd ", challengeId);

  const handleSave = () => {
    navigation.navigate("JoinedChallenge", { challengeId: challengeId });
    console.log("Saving workout...", challengeId);
  };

  return (
    <View style={styles.screen}>
      <StopWatch
        saveWorkout={handleSave}
        navigation={navigation}
        route={route}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.blackBc,
  },
  closeButton: {
    position: "absolute",
    top: 75,
    left: 16,
    zIndex: 2,
  },
});
