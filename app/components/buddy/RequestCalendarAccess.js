import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../../config/colors";

export default function RequestCalendarAccess({
  userFirstName,
  onPressGoToTop,
  onPressGoToCalendar,
  isBuddy, // to check if they have access to the calendar
}) {
  return (
    <>
      {/* this will be executed when they don't have access to the calendar */}
      {!isBuddy && (
        <ScrollView style={styles.container}>
          <Text style={styles.header}>CALENDAR</Text>
          <View style={styles.orangeContainer}>
            <Text style={styles.text1}>
              Want to access {userFirstName}'s calendar?
            </Text>
            <Text style={styles.text2}>
              Send a buddy requests to {userFirstName} to get started. Someone
              has to take the first step, right? So, Go For It and Make It
              Happen!
            </Text>
            <Text style={styles.text1}>
              Once you have access, you can seamlessly view activities in your
              calendar.
            </Text>

            <View>
              <TouchableWithoutFeedback
                onPress={onPressGoToTop}
                activeOpacity={1.0}
              >
                <Text style={styles.text3}>send request now</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </ScrollView>
      )}

      {/* this will be executed when they have access to the calendar */}
      {isBuddy && (
        <TouchableHighlight activeOpacity={0.9} onPress={onPressGoToCalendar}>
          <View style={styles.haveAccessContainer}>
            <Text style={styles.header2}>CALENDAR</Text>
            <Entypo name="chevron-right" size={24} color={colors.green} />
          </View>
        </TouchableHighlight>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  orangeContainer: {
    backgroundColor: colors.orangeSecondary,
    width: "100%",
    height: 250,
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 300,
  },
  header: {
    fontFamily: "montserrat-black",
    fontSize: 26,
    color: colors.orangePrimary,
    marginBottom: 26,
    marginLeft: 16,
  },
  text1: {
    fontFamily: "nunitoSans-extraBold",
    fontSize: 16,
    color: colors.white,
  },
  text2: {
    fontFamily: "nunitoSans-extraBold",
    fontSize: 16,
    marginTop: 16,
    color: colors.white,
  },
  text3: {
    fontFamily: "montserrat-black",
    fontSize: 16,
    marginTop: 16,
    color: colors.black,
    textDecorationLine: "underline",
    textDecorationColor: colors.blackBc,
    textTransform: "uppercase",
  },

  // style for when they have access to calendar
  haveAccessContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 300,
  },
  header2: {
    fontFamily: "montserrat-black",
    fontSize: 28,
    color: colors.orangePrimary,
  },
});
