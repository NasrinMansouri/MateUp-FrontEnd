import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

export default function UserNextWorkoutPlanning({ onPress }) {
  // const [firstName, setFirstName] = useState("John ");

  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.textStyle}>
            <Text style={styles.whiteColorText}>Tomorrow</Text> is your{" "}
            <Text style={styles.whiteColorText}>leg</Text> workout at {""}{" "}
            <Text style={styles.whiteColorText}>7 pm</Text>.{" "}
          </Text>
          <Text style={styles.textStyle}>
            don't forget, you'have got 2 companies.{" "}
          </Text>
          <Text style={styles.textStyle}>
            <Text style={styles.whiteColorText}>Sarah</Text> and{" "}
            <Text style={styles.whiteColorText}>bob</Text> are joining you too.
          </Text>
          <Text style={styles.textStyleLast}>Have fun together !</Text>
          <View style={styles.buddyContainer}>
            <View style={styles.buddy1}>
              <TouchableWithoutFeedback onPress={onPress}>
                <Image
                  source={require("../../../assets/person-1.jpg")}
                  style={styles.image}
                />
              </TouchableWithoutFeedback>
              <View style={styles.icons}>
                <TouchableWithoutFeedback onPress={onPress}>
                  <MaterialCommunityIcons
                    name="cards-heart-outline"
                    size={20}
                    color={colors.white}
                    style={styles.heartIcon}
                  />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={onPress}>
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color={colors.white}
                    style={styles.emailIcon}
                  />
                </TouchableWithoutFeedback>
              </View>
            </View>
            <View style={styles.buddy2}>
              <TouchableWithoutFeedback onPress={onPress}>
                <Image
                  source={require("../../../assets/person2.jpg")}
                  style={styles.image}
                />
              </TouchableWithoutFeedback>
              <View style={styles.icons}>
                <TouchableWithoutFeedback onPress={onPress}>
                  <MaterialCommunityIcons
                    name="cards-heart-outline"
                    size={20}
                    color={colors.white}
                    style={styles.heartIcon}
                  />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={onPress}>
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color={colors.white}
                    style={styles.emailIcon}
                  />
                </TouchableWithoutFeedback>
              </View>
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
    height: 360,
    width: "100%",
    textTransform: "uppercase",
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 23,
    // paddingBottom: 64,
  },
  welcomeText: {
    fontFamily: "montserrat-black",
    fontSize: 48,
    color: colors.white,
    marginBottom: 10,
    paddingLeft: 16,
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
    marginTop: 8,
  },
  emailIcon: {
    marginTop: 8,
  },
});
