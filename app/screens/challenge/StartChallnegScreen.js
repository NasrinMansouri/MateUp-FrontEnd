import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../config/colors";
import StopWatch from "../../screens/challenge/StopWatch";

export default function StartChallengeScreen({ navigation, route }) {
  const { challengeId } = route.params;
  console.log("my challneg iddd ", challengeId);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    navigation.navigate("JoinedChallenge", { challengeId: challengeId });
    console.log("Saving workout...", challengeId);
  };

  return (
    <View style={styles.screen}>
      <TouchableOpacity style={styles.closeButton} onPress={handleBackPress}>
        <Ionicons name="close" size={24} color={colors.white} />
      </TouchableOpacity>
      <StopWatch saveWorkout={handleSave} />
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
    top: 65,
    left: 16,
    zIndex: 2,
  },
});
