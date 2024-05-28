//for app picker

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

import colors from "../../config/colors";

export default function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    fontSize: 16,
    fontFamily: "nunitoSans-extraBold",
    color: colors.white,
    // textTransform: "uppercase",
    textTransform: "capitalize",
  },
});
