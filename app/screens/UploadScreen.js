import React from "react";
import { Modal, StyleSheet, View, Text } from "react-native";

import colors from "../config/colors";

export default function UploadScreen({ progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Text>{progress * 100}%</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: colors.blackBc,
  },
});
