import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
  AppFormDatePicker,
  AppFormImagePicker,
} from "../../components/forms";
import Screen from "../../components/Screen";
import colors from "../../config/colors";
import challengeApi from "../../api/challenge";
import ConditionalComponentForm from "../../components/challenge/ConditionalComponentForm";
import UploadScreen from "../UploadScreen";

const validationSchema = Yup.object().shape({
  workout: Yup.object().required().label("Workout Type"), //workout type
  base: Yup.object().required().label("Time or Frequency"), //time or frequency base
  start: Yup.string().required().label("Start Date"),
  end: Yup.string().required().label("End Date"),
  name: Yup.string().required().min(3).label("Challnege Name"), //naming the challenge
  description: Yup.string().label("Description"),
  image: Yup.string().required().label("Image"),
});

const workoutTypes = [
  { label: "Cardio workout", value: 1 },
  { label: "Strength training", value: 2 },
  { label: "Flexibility & Mindfulness", value: 3 },
  { label: "Group Workout", value: 4 },
];
const challengeBase = [
  { label: "Time", value: 1 },
  { label: "Frequency", value: 2 },
];
const challengeGoal = [
  { label: "daily", value: 1 },
  { label: "twice a week", value: 2 },
  { label: "three times a week ", value: 3 },
  { label: "four times a week", value: 4 },
  { label: "five times a week", value: 5 },
  { label: "six times a week", value: 6 },
  { label: "Weekly", value: 7 },
  { label: "Monthly", value: 8 },
];

export default function CreateChallengeScreen({}) {
  // for the progress bar
  const [uploadVisible, setUploadVisible] = useState(false);
  // for maintaing the progree
  const [progress, setProgress] = useState(0);

  // to send the data to the backend
  const handleSubmit = async (challenge, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    console.log("Form submitted with values:", challenge);
    const result = await challengeApi.createChallenge(
      { challenge },
      // callback function, our api will call that function
      // as the upload is progressed
      // (progress) => console.log(progress)
      (progress) => setProgress(progress)
    );
    console.log(result); //log the result to debug

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not create challenge. ");
    }
    // alert("success"); //instead i have passed OnDone to upload screen

    resetForm();
  };

  return (
    <ScrollView>
      <Screen style={styles.container}>
        <UploadScreen
          onDone={() => setUploadVisible(false)}
          progress={progress}
          visible={uploadVisible}
        />
        <AppForm
          initialValues={{
            workout: null,
            base: null,
            goalFrequency: null,
            goalTime: "",
            start: "",
            end: "",
            name: "",
            description: "",
            image: "",
          }}
          // onSubmit={(values) => console.log(values)}
          // for sending to the backend
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Creat Challenge</Text>
          </View>
          <AppFormImagePicker name="image" />
          <AppFormPicker
            questionTitle="Which workout count toward your challenge?"
            items={workoutTypes}
            name="workout"
            numberOfColumns={3}
            placeholder="Select workout type"
            width="50%"
          />

          <AppFormPicker
            questionTitle="Do you want to track time or frequency?"
            items={challengeBase}
            name="base"
            numberOfColumns={3}
            placeholder="Select challenge base"
            width="50%"
          />

          <ConditionalComponentForm challengeGoal={challengeGoal} />

          <AppFormDatePicker
            name="start"
            title="Start Date :"
            placeholder={"Start"}
          />
          <AppFormDatePicker
            name="end"
            title="End Date :"
            placeholder={"End"}
          />
          <AppFormField
            questionTitle="Give your challenge a name"
            maxLength={100}
            name="name"
            placeholder="Add name"
          />
          <AppFormField
            questionTitle="optionally add a description"
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Add description"
          />
          <View style={styles.submitBtnContainer}>
            <SubmitButton title="Create" />
          </View>
        </AppForm>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 30,
    marginBottom: 100,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 30,
    fontFamily: "montserrat-black",
    color: colors.orangePrimary,
    textAlign: "center",
    textTransform: "uppercase",
  },
  titleFormField: {
    fontSize: 16,
    fontFamily: "montserrat-black",
    color: colors.white,
  },
  submitBtnContainer: {
    marginTop: 20,
  },
});
