import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function AppTextInput({
  icon,
  borderWidth = 1,
  borderColor = colors.green,
  backgroundColor = colors.blackBc,
  Width = "100%",
  ...otherProps
}) {
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: borderColor,
          backgroundColor: backgroundColor,
          borderWidth: borderWidth,
          Width: Width,
        },
      ]}
    >
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.grayLight50}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.textInput}
        placeholderTextColor={colors.gray}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: "row",
    // width: "100%",
    padding: 12,
    // marginVertical: 10,
    // marginBottom: 40,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    color: colors.white,
    fontFamily: "nunitoSans-regular",
    fontSize: 18,
  },
});
