import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../../components/forms";
import Screen from "../../components/Screen";

const validationSchema = Yup.object().shape({
  workout: Yup.object().required().label("Workout Type"), //workout type
  base: Yup.object().required().label("Time or Frequency"), //time or frequency base
  goal: Yup.object().required().label("Goal"), //goal for time, everyday, , etc
  name: Yup.string().required().min(3).label("Challnege Name"), //naming the challenge
  description: Yup.string().label("Description"),
});

const workoutTypes = [
  { label: "Cardio", value: 1 },
  { label: "Strength", value: 2 },
  { label: "Yoga", value: 3 },
];
const challengeBase = [
  { label: "Time", value: 1 },
  { label: "Frequency", value: 2 },
];
const challengeGoal = [
  { label: "Everyday", value: 1 },
  { label: "Weekly", value: 2 },
  { label: "Monthly", value: 3 },
];

export default function CreateChallengeScreen({}) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          workout: null,
          base: null,
          goal: null,
          name: "",
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormPicker
          items={workoutTypes}
          name="workout"
          numberOfColumns={3}
          // PickerItemComponent={WorkoutPickerItem}
          placeholder="select workout type"
          width="50%"
        />
        <AppFormPicker
          items={challengeBase}
          name="base"
          numberOfColumns={3}
          // PickerItemComponent={ChallenegBasePickerItem}
          placeholder="select challenge base"
          width="50%"
        />
        <AppFormPicker
          items={challengeGoal}
          name="goal"
          numberOfColumns={3}
          // PickerItemComponent={ChallenegGoalPickerItem}
          placeholder="select challenge goal"
          width="50%"
        />
        <AppFormField
          maxLength={100}
          name="name"
          placeholder="give it a name"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Create" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
