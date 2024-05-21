import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../../config/colors";

export default function ModalHeader({ onPress }) {
  return (
    <View style={styles.modalHeaderContainer}>
      <TouchableOpacity style={styles.closeIcon} onPress={onPress}>
        <Ionicons name="close" size={24} color={colors.white} />
      </TouchableOpacity>
      <View style={styles.modalHeaderTextContainer}>
        <Text style={styles.modalHeader}>FILTER</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalHeaderContainer: {
    width: "100%",
    height: 56,
    backgroundColor: colors.black,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    zIndex: 2,
  },
  modalHeaderTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: "33%",
  },
  closeIcon: {
    paddingLeft: 16,
  },
  modalHeader: {
    textAlign: "center",
    fontFamily: "montserrat-black",
    color: colors.orangePrimary,
  },
});
