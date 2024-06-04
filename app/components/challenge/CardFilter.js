import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View, Text } from "react-native";

import colors from "../../config/colors";

export default function CardFilter({ onPress, width, filter, isActive }) {
  return (
    <View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={[
            styles.container,
            { width: width },
            isActive && styles.activeContainer,
          ]}
        >
          <Text style={[styles.text, isActive && styles.activeText]}>
            {filter}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: colors.black,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderColor: colors.black,
    height: 34,
  },
  activeContainer: {
    borderColor: colors.green,
  },
  text: {
    fontFamily: "nunitoSans-extraBold",
    fontSize: 14,
    color: colors.white,
    textTransform: "capitalize",
    textAlign: "center",
  },
  activeText: {
    color: colors.orangePrimary,
  },
});
