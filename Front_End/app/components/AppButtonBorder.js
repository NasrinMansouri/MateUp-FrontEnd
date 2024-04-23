import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function AppButtonBorder({
  onPress,
  width = 146,
  height = 56,
  borderRadius = 51,
  iconName,
  title,
  materialCommunityIcons,
  backgroundColor = colors.black,
  borderColor = colors.green,
  textColor = colors.orangeSecondary,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        styles.container,
        {
          width: width,
          height: height,
          borderRadius: borderRadius,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
        },
      ]}
    >
      {materialCommunityIcons && (
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name={iconName}
            size={24}
            color={colors.orangeSecondary}
          />
        </View>
      )}
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    textTransform: "uppercase",
    fontFamily: "montserrat-black",
  },
  iconContainer: {
    marginRight: 12,
  },
});

{
  /* <AppButtonBorder
onPress={() => setModalVisible(true)}
title="Filter"
materialCommunityIcons={true}
iconName="filter-variant"
/> */
}
