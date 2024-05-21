import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../../config/colors";

const Body = ({ time, formatTime }) => {
  return (
    <View style={styles.timeContainer}>
      <Text style={styles.time}>{formatTime(time)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timeContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 48,
    fontFamily: "montserrat-black",
    color: colors.orangePrimary,
    textAlign: "center",
  },
});

export default Body;
