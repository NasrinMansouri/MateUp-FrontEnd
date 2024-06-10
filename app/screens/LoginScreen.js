import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Linking,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Entypo } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";

import Screen from "../components/Screen";
import colors from "../config/colors";
import { AppFormField, SubmitButton, AppForm } from "../components/forms";
import axios from "axios";
import { saveToAsyncStorage, getFromAsyncStorage } from "../auth/asyncStorage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = ({ route }, props) => {
  const [userToken, setUserToken] = useState("");
  const [userId, setUserId] = useState(0);
  const [memberId, setMemberId] = useState(0);

  const { onLogin } = route.params;
  const [error, setError] = useState("");

  const handleSignUp = () => {
    // navigate to basic-fit website
    Linking.openURL("https://www.basic-fit.com/en-be/home");
  };

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/user/login",
        {
          email,
          password,
        }
      );
      console.log("Response:", response.data);
      if (!response.data.status) {
        setError(response.data.message);
        return;
      } else {
        console.log("Before token update");
        const userToken = response.data.userToken;
        const userId = response.data.userData.id;
        const memberId = response.data.userData.member.id;

        // Save user token and user data to AsyncStorage
        await saveToAsyncStorage("userToken", userToken);
        await saveToAsyncStorage("userId", userId);
        await saveToAsyncStorage("memberId", memberId);
        // await saveToAsyncStorage('userData', JSON.stringify(userData));

        console.log("After token update");

        resetForm();
        onLogin(userToken, userId, memberId);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <Screen style={styles.screen}>
      <TouchableWithoutFeedback>
        <Text style={styles.helpText}>Need help ?</Text>
      </TouchableWithoutFeedback>
      <View style={styles.logoContainer}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={90}
          height={51}
          viewBox="0 0 115 76"
          fill="none"
          {...props}
        >
          <Path
            d="M36.481 7.17455L36.481 27.1436C36.481 27.2507 36.3899 27.3373 36.2783 27.3388C28.7849 27.4397 22.3331 33.1277 22.3331 41.0056C22.3331 49.633 29.7103 54.6737 36.4807 54.6737C42.6011 54.6737 50.413 49.897 50.7238 41.1971C50.7276 41.0918 50.8173 41.0056 50.9272 41.0056L71.7488 41.0056C71.8604 41.0056 71.951 41.0912 71.9503 41.1983C71.8493 56.3821 59.8253 74.934 36.1776 75.0305C20.009 75.0965 1.01074 62.3317 1.01074 41.3933C1.01074 24.868 14.1676 7.09011 36.2766 6.98117C36.3882 6.98062 36.481 7.06747 36.481 7.17455Z"
            fill="#FE7000"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36.1817 75.9997C19.5597 76.0676 1.62039e-07 62.9653 4.30211e-07 41.3932C6.40982e-07 24.4385 13.5035 6.12386 36.2712 6.01168C36.9315 6.00843 37.4913 6.51913 37.4913 7.17441L37.4913 27.1435C37.4913 27.793 36.9434 28.2992 36.2922 28.308C29.3277 28.4018 23.3434 33.6801 23.3434 41.0055C23.3434 49.0097 30.1721 53.7042 36.4805 53.7042C42.165 53.7042 49.425 49.2432 49.7137 41.1638C49.7354 40.5563 50.2518 40.0361 50.927 40.0361L71.7486 40.0361C72.4087 40.0361 72.965 40.5479 72.9606 41.2044C72.8569 56.7927 60.5067 75.9004 36.1817 75.9997ZM2.02109 41.3932C2.02109 61.6979 20.4578 74.1252 36.1731 74.061C58.7393 73.9689 70.4262 56.5989 70.9236 41.9748L51.6893 41.9748C50.9509 50.8214 42.8601 55.6429 36.4805 55.6429C29.248 55.6429 21.3223 50.2559 21.3223 41.0055C21.3223 32.8544 27.7907 26.8841 35.4702 26.3998L35.4702 7.96263C14.5086 8.49289 2.02109 25.5012 2.02109 41.3932Z"
            fill="#FE7000"
          />
          <Path
            d="M78.519 68.8255L78.519 48.8564C78.519 48.7493 78.6101 48.6627 78.7217 48.6611C86.2151 48.5551 92.6669 42.5841 92.6669 34.9944C92.6669 26.367 84.9868 21.428 78.5193 21.3263C72.3997 21.2301 64.587 26.1016 64.2762 34.8029C64.2724 34.9083 64.1827 34.9944 64.0728 34.9944L43.2512 34.9944C43.1396 34.9944 43.049 34.9088 43.0497 34.8017C43.1507 19.6179 55.1747 1.06603 78.8224 0.96949C94.991 0.903483 113.989 13.6683 113.989 34.6067C113.989 51.132 100.832 68.9099 78.7234 69.0188C78.6118 69.0194 78.519 68.9325 78.519 68.8255Z"
            fill="#FE7000"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M78.8183 0.000258884C95.4403 -0.0675989 115 13.0347 115 34.6068C115 51.5615 101.496 69.8761 78.7288 69.9883C78.0685 69.9916 77.5087 69.4809 77.5087 68.8256L77.5087 48.8565C77.5087 48.2068 78.0566 47.7011 78.707 47.692C85.6586 47.5936 91.6566 42.0444 91.6566 34.9945C91.6566 27.0137 84.5498 22.3908 78.5029 22.2957C72.8461 22.2067 65.5754 26.744 65.2863 34.8363C65.2646 35.444 64.7479 35.9639 64.073 35.9639L43.2514 35.9639C42.5913 35.9639 42.035 35.4521 42.0394 34.7956C42.1431 19.2072 54.4933 0.0995642 78.8183 0.000258884ZM112.979 34.6068C112.979 14.3021 94.5422 1.87483 78.8269 1.93898C56.2607 2.03111 44.5738 19.4011 44.0764 34.0252L63.3107 34.0252C64.0486 25.1825 72.1312 20.2565 78.536 20.3572C85.4241 20.4655 93.6777 25.7206 93.6777 34.9945C93.6777 42.8553 87.2209 49.0923 79.5298 49.5988L79.5298 68.0374C100.491 67.5071 112.979 50.4988 112.979 34.6068Z"
            fill="#FE7000"
          />
        </Svg>
      </View>

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {error && <Text style={styles.errorText}>{error}</Text>}
        <View style={styles.emailConatiner}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Enter Email"
            textContentType="emailAddress" //only work on ios
          />
        </View>
        <View style={styles.passwordConatiner}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Enter Password"
            secureTextEntry={true}
            textContentType="password" //only work on ios
          />
        </View>

        <View style={styles.buttonContainer}>
          <SubmitButton title="Login" />
          <TouchableWithoutFeedback onPress={handleSignUp}>
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
};

export default LoginScreen;
// Extract relevant user data
// const userData = {
//   id: response.data.userData.id,
//   role: response.data.userData.role,
//   username: response.data.userData.username,
//   name: response.data.userData.name,
//   surname: response.data.userData.surname,
// };
const styles = StyleSheet.create({
  screen: {
    padding: 10,
    // backgroundColor: colors.blackBc,
  },
  helpText: {
    color: colors.orangePrimary,
    fontFamily: "montserrat-black",
    fontSize: 13,
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
  emailConatiner: {
    marginBottom: 20,
  },
  passwordConatiner: {
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 120,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    marginBottom: 50,
  },
  errorText: {
    color: colors.danger,
    fontSize: 16,
    // textAlign: "center",
    marginVertical: 4,
  },
});
