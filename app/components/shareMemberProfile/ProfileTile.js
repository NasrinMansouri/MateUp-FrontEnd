import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import colors from "../../config/colors";
import LocationWithIcon from "../LocationWithIcon";

export default function ProfileTile({
  firstName,
  lastName,
  fontFamily = "montserrat-black",
  fontSize = 16,
  onpressmessage,
  onPressShare,
  location,
}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text
          style={[styles.name, { fontFamily: fontFamily, fontSize: fontSize }]}
        >
          {firstName} {""}
          {lastName}
        </Text>
        <View style={styles.iconsContainer}>
          <TouchableWithoutFeedback onPress={onpressmessage}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color={colors.grayLight50}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={onPressShare}>
            <Octicons name="share" size={24} color={colors.grayLight50} />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.locationContainer}>
        <LocationWithIcon
          location={location}
          fontSize={14}
          color={colors.white}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 22,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 16,
    marginRight: 16,
  },
  name: {
    color: colors.white,
    textTransform: "uppercase",
    marginRight: 5,
  },
  locationContainer: {
    marginTop: 8,
    marginLeft: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
});

{
  /* <ProfileTile
firstName="John"
lastName="Doe"
location={"los angeles street" + " 123"}
/>  */
}
