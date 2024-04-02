import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function UserNextWorkoutPlanning({}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>
          on <Text style={styles.whiteColorText}>12 Nov</Text> is your{" "}
          <Text style={styles.whiteColorText}>leg</Text>
          workout at {""} <Text style={styles.whiteColorText}>7 pm</Text>.{" "}
        </Text>
        <Text style={styles.textStyle}>
          don't forget, you'have got 2 companies.{" "}
        </Text>
        <Text style={styles.textStyle}>
          <Text style={styles.whiteColorText}>Sarah</Text> and{" "}
          <Text style={styles.whiteColorText}>bob</Text> are joining you too.{" "}
        </Text>
        <Text style={styles.textStyleLast}> Have fun together !</Text>
        <View style={styles.buddyContainer}>
          <View style={styles.buddy1}>
            <Image
              source={require("../../assets/person-1.jpg")}
              style={styles.image}
            />
            <View style={styles.icons}>
              <MaterialCommunityIcons
                name="cards-heart-outline"
                size={20}
                color={colors.white}
                style={styles.heartIcon}
              />
              <MaterialCommunityIcons
                name="email-outline"
                size={20}
                color={colors.white}
                style={styles.emailIcon}
              />
            </View>
          </View>
          <View style={styles.buddy2}>
            <Image
              source={require("../../assets/person-1.jpg")}
              style={styles.image}
            />
            <View style={styles.icons}>
              <MaterialCommunityIcons
                name="cards-heart-outline"
                size={20}
                color={colors.white}
                style={styles.heartIcon}
              />
              <MaterialCommunityIcons
                name="email-outline"
                size={20}
                color={colors.white}
                style={styles.emailIcon}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orangeSecondary,
    height: 485,
    width: "100%",
    textTransform: "uppercase",
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 23,
    paddingBottom: 64,
  },
  buddyContainer: {
    flexDirection: "row",
    height: 153,
    marginTop: 42,
  },
  buddy1: {
    width: 103,
    height: 103,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 32,
  },
  buddy2: {
    width: 103,
    height: 103,
    justifyContent: "center",
    alignItems: "center",
  },

  textStyle: {
    fontFamily: "montserrat-black",
    textTransform: "uppercase",
    fontSize: 16,
    color: colors.blackBc,
  },
  textStyleLast: {
    fontFamily: "montserrat-black",
    textTransform: "uppercase",
    fontSize: 16,
    color: colors.blackBc,
    marginTop: 16,
  },
  whiteColorText: {
    color: colors.white,
  },
  image: {
    width: 103,
    height: 103,
    borderRadius: 103 / 2,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  heartIcon: {
    marginRight: 20,
    marginTop: 16,
    strokeWidth: 4,
  },
  emailIcon: {
    marginTop: 16,
  },
});
