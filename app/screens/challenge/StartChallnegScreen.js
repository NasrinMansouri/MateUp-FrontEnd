import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../config/colors";
import StopWatch from "../../screens/challenge/StopWatch";
import { useNavigation } from "@react-navigation/native";

export default function StartChallengeScreen({ saveWorkout }) {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };

  //   const handleSave = () => {
  //     navigation.navigate("JoinedChallenge");
  //   };

  return (
    <View style={styles.screen}>
      <TouchableOpacity style={styles.closeButton} onPress={handleBackPress}>
        <Ionicons name="close" size={24} color={colors.white} />
      </TouchableOpacity>
      <StopWatch
        saveWorkout={saveWorkout}
        //    saveWorkout={handleSave}
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
    top: 35,
    left: 16,
    zIndex: 2,
  },
});
