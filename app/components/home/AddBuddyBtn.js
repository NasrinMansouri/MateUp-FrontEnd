import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "../../config/colors";

export default function AddBuddyBtn({ onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.circle}>
          <Feather name="plus" size={24} color={colors.orangeSecondary} />
        </View>
        <Text style={styles.text}>Add Buddy</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    textTransform: "capitalize",
    marginRight: 12,
    gap: 8,
    width: 97,
    height: 107,
  },
  circle: {
    width: 77,
    height: 77,
    borderRadius: 77 / 2,
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 14,
    fontFamily: "nunitoSans-regular",
    color: colors.white,
    alignSelf: "center",
  },
});
