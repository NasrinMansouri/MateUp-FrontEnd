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
import { useNavigation } from "@react-navigation/native";

import colors from "../../config/colors";
import Screen from "../../components/Screen";
import MenueList from "../../components/home/MenueList";
import UserProfileScreen from "./UserProfileScreen";

export default function MenueScreen({
  modalVisible,
  handleModalClose,
  onPressProfile,
  onPressSettings,
  onPressLogout,
}) {
  const navigation = useNavigation();

  return (
    <Screen>
      <View style={styles.container}>
        {/* <Modal visible={modalVisible} animationType="fade" transparent={true}> */}
        <View style={styles.container}>
          {/* <TouchableWithoutFeedback onPress={handleModalClose}>
            <View style={styles.header}>
              <Ionicons
                name="chevron-back-outline"
                size={24}
                color={colors.orangeSecondary}
              />
              <Text style={styles.headerText}>MATE-UP</Text>
            </View>
          </TouchableWithoutFeedback> */}
          <View style={styles.profileContainer}>
            <MenueList
              // onPress={onPressProfile}
              onPress={() => navigation.navigate("UserProfile")}
              title="Profile"
              name="user"
              feather={true}
            />
          </View>

          <MenueList
            onPress={() => navigation.navigate("Setting")}
            // onPress={onPressSettings}
            title="Settings"
            name="settings"
            feather={true}
          />
          {/* <View style={styles.logOut}> */}
          <MenueList
            onPress={onPressLogout}
            title="Logout"
            name="log-out"
            feather={true}
          />
          {/* </View> */}
        </View>
        {/* </Modal> */}
      </View>
    </Screen>
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
  // logOut: {
  //   position: "absolute",
  //   bottom: 0,
  //   width: "100%",
  // },
  profileContainer: {
    marginTop: 40,
  },
});
