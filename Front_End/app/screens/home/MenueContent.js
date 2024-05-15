import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Modal } from "react-native";

import colors from "../../config/colors";
import MenueList from "../../components/home/MenueList";

export default function MenueContent({ modalVisible, handleModalClose }) {
  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={handleModalClose}>
            <View style={styles.header}>
              <Ionicons
                name="chevron-back-outline"
                size={24}
                color={colors.orangeSecondary}
              />
              <Text style={styles.headerText}>MATE-UP</Text>
            </View>
          </TouchableWithoutFeedback>

          <MenueList
            onPress={() => console.log("profile")}
            title="Profile"
            name="user"
          />
          <MenueList
            onPress={() => console.log("profile")}
            title="Settings"
            name="settings"
          />
          <View style={styles.logOut}>
            <MenueList
              onPress={() => console.log("profile")}
              title="Logout"
              name="log-out"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  container: {
    flex: 1,
    backgroundColor: colors.blackBc,
  },
  header: {
    marginTop: 40,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginBottom: 30,
  },
  headerText: {
    fontSize: 16,
    color: colors.orangeSecondary,
    fontFamily: "montserrat-black",
  },
  logOut: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
