import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Entypo } from "@expo/vector-icons";

import Screen from "../components/Screen";
import colors from "../config/colors";
import { AppFormField, SubmitButton, AppForm } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <TouchableWithoutFeedback>
        <Text style={styles.helpText}>Need help ?</Text>
      </TouchableWithoutFeedback>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Enter Email"
          textContentType="emailAddress" //only work on ios
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Enter Password"
          secureTextEntry={true}
          textContentType="password" //only work on ios
        />
        <View>
          <SubmitButton title="Login" />
          {/* TODO */}
          {/* i need to pass basic fit url */}
          <TouchableWithoutFeedback onPress={() => console.log("not a member")}>
            <View style={styles.lastBtnContainer}>
              <Text style={styles.ForgetPassText}>Not A Member Yet ? </Text>
              <Entypo
                name="chevron-right"
                size={24}
                color={colors.orangePrimary}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  helpText: {
    color: colors.orangePrimary,
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
