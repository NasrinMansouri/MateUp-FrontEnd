import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../../config/colors";
import Screen from "../../components/Screen";
import MenueList from "../../components/home/MenueList";

export default function MenueScreen({ onPressLogout }) {
  const navigation = useNavigation();

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <MenueList
              onPress={() => navigation.navigate("UserProfile")}
              title="Profile"
              name="user"
              feather={true}
            />
          </View>

          <MenueList
            onPress={() => navigation.navigate("Setting")}
            title="Settings"
            name="settings"
            feather={true}
          />
          <MenueList
            onPress={onPressLogout}
            title="Logout"
            name="log-out"
            feather={true}
          />
        </View>
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
  profileContainer: {
    marginTop: 40,
  },
});
