import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../../../config/colors";

const Controllers = ({
  isRunning,
  activeButton,
  startStopwatch,
  pauseStopWatch,
  resetStopwatch,
}) => {
  const btnStartStyle = [
    styles.buttonStart,
    activeButton === "start"
      ? {
          backgroundColor: colors.orangeSecondary,
          borderColor: colors.black,
        }
      : { borderColor: colors.green },
  ];

  const btnTextStyle = [
    styles.buttonText,
    activeButton === "start" && { color: colors.white },
  ];

  return (
    <View style={styles.buttonContainer}>
      {!isRunning && (
        <TouchableOpacity style={btnStartStyle} onPress={startStopwatch}>
          <Text style={btnTextStyle}>Start</Text>
        </TouchableOpacity>
      )}
      <View style={styles.btnsContainer}>
        {isRunning && (
          <TouchableOpacity style={styles.button} onPress={pauseStopWatch}>
            <Text style={styles.buttonText}>Pause</Text>
          </TouchableOpacity>
        )}
        {isRunning && (
          <TouchableOpacity style={styles.button} onPress={resetStopwatch}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    alignSelf: "center",
    marginHorizontal: 16,
  },
  buttonStart: {
    height: 45,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.green,
    width: "100%",
  },
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    alignSelf: "center",
    gap: 16,
  },
  button: {
    flex: 1,
    width: "100%",
    height: 45,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.green,
  },
  buttonText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "montserrat-black",
    textTransform: "uppercase",
  },
});

export default Controllers;
