import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../../../config/colors";

const Header = ({ resetStopwatch, isRunning, navigation, route }) => {
  const { challengeId } = route.params;
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.closeButton} onPress={handleBackPress}>
        <View style={styles.closeIcon}>
          <Ionicons name="close" size={24} color={colors.white} />
        </View>
      </TouchableOpacity>
      {isRunning && (
        <TouchableOpacity
          style={styles.resetContainer}
          onPress={resetStopwatch}
        >
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  resetContainer: {
    marginRight: 16,
  },
  resetText: {
    color: colors.green,
    fontSize: 16,
    fontFamily: "montserrat-black",
  },
  closeButton: {
    marginLeft: 16,
  },
});

export default Header;
