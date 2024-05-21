import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import LocationWithIcon from "../LocationWithIcon";

export default function ProfileTile({
  firstName,
  lastName,
  fontFamily = "montserrat-black",
  fontSize = 16,
  onpressmessage,
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
        <TouchableWithoutFeedback onPress={onpressmessage}>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color={colors.white}
          />
        </TouchableWithoutFeedback>
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
});

{
  /* <ProfileTile
firstName="John"
lastName="Doe"
location={"los angeles street" + " 123"}
/>  */
}
