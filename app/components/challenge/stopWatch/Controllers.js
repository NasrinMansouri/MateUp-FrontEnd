import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../../../config/colors";

const Controllers = ({
  isRunning,
  startStopwatch,
  pauseStopWatch,
  handleFinish,
  handleModalOpen,
}) => {
  return (
    <View style={styles.buttonContainer}>
      {!isRunning && (
        <TouchableOpacity
          style={styles.startContainer}
          onPress={startStopwatch}
        >
          <Text style={styles.startText}>Start</Text>
        </TouchableOpacity>
      )}
      <View style={styles.btnsContainer}>
        {isRunning && (
          <>
            <TouchableOpacity style={styles.button} onPress={pauseStopWatch}>
              <Text style={styles.buttonText}>Pause</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonFinish}
              onPress={() => {
                handleFinish();
                handleModalOpen();
              }}
            >
              <Text style={styles.textFinish}>Finish</Text>
            </TouchableOpacity>
          </>
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
  startContainer: {
    height: 45,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.orangeSecondary,
    width: "100%",
  },
  startText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "montserrat-black",
    textTransform: "uppercase",
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
    color: colors.green,
    fontSize: 14,
    fontFamily: "montserrat-black",
    textTransform: "uppercase",
  },
  buttonFinish: {
    flex: 1,
    width: "100%",
    height: 45,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.orangeSecondary,
  },
  textFinish: {
    color: colors.orangeSecondary,
    fontSize: 14,
    fontFamily: "montserrat-black",
    textTransform: "uppercase",
  },
});

export default Controllers;
