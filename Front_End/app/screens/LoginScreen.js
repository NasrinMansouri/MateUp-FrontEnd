import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";

import AppTextInpure from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import colors from "../config/colors";

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <TouchableWithoutFeedback>
        <Text style={styles.helpText}>Need help?</Text>
      </TouchableWithoutFeedback>
      <AppTextInpure
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter Email"
        textContentType="emailAddress" //only work on ios
      />
      <AppTextInpure
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        placeholder="Enter Password"
        secureTextEntry={true}
        textContentType="password" //only work on ios
      />
      <AppButton
        title="Sign In"
        height={48}
        onPress={() => console.log(email, password)}
      />
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
});
