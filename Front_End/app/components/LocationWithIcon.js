import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function LocationWithIcon({
  gap = 4,
  fontSize = 12,
  color = colors.white,
  location,
}) {
  return (
    <View>
      <View style={[styles.container, { gap: gap }]}>
        <MaterialIcons
          name="location-on"
          size={20}
          color={colors.orangeSecondary}
        />
        <Text
          style={[
            styles.text,
            { fontSize: fontSize, color: color, location: location },
          ]}
          numberOfLines={1}
        >
          {location}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontFamily: "nunitoSans-regular",
    textTransform: "capitalize",
  },
});
