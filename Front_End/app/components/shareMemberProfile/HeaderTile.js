import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import colors from "../../config/colors";
import Line from "../Line";

export default function HeaderTile({ onPressBack, onPressShare }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.back}>
          <TouchableWithoutFeedback
            onPress={onPressBack}
            // onPress={() => console.log("pressed")}
          >
            <Ionicons
              name="chevron-back-outline"
              size={24}
              color={colors.grayLight50}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.share}>
          <TouchableWithoutFeedback onPress={onPressShare}>
            <Octicons name="share" size={24} color={colors.grayLight50} />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <Line marginTop={20} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    width: "100%",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 9,
    marginRight: 19,
  },
});
