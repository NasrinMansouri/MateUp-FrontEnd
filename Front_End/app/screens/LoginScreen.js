import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { Formik } from "formik";

import AppTextInpure from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Entypo } from "@expo/vector-icons";
import Screen from "../components/Screen";
import colors from "../config/colors";

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <TouchableWithoutFeedback>
        <Text style={styles.helpText}>Need help ?</Text>
      </TouchableWithoutFeedback>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInpure
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              placeholder="Enter Email"
              textContentType="emailAddress" //only work on ios
            />
            <AppTextInpure
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              placeholder="Enter Password"
              secureTextEntry={true}
              textContentType="password" //only work on ios
            />
            <View>
              <AppButton title="Sign In" height={55} onPress={handleSubmit} />
              <TouchableWithoutFeedback onPress={handleSubmit}>
                <View style={styles.lastBtnContainer}>
                  <Text style={styles.ForgetPassText}>Not A Member Yet ? </Text>
                  <Entypo
                    name="chevron-right"
                    size={24}
                    color={colors.orangeSecondary}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  helpText: {
    color: colors.orangeSecondary,
    fontFamily: "montserrat-black",
    fontSize: 16,
    marginTop: 16,
    marginRight: 16,
    alignSelf: "flex-end",
    textTransform: "uppercase",
  },
  ForgetPassText: {
    color: colors.white,
    fontFamily: "montserrat-black",
    fontSize: 14,
    alignSelf: "center",
    textTransform: "uppercase",
  },
  lastBtnContainer: {
    marginTop: 16,
    marginRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
