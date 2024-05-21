import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
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

const validationSchema = Yup.object().shape({
  workout: Yup.object().required().label("Workout Type"), //workout type
  base: Yup.object().required().label("Time or Frequency"), //time or frequency base
  goal: Yup.object().required().label("Goal"), //goal for time, everyday, , etc
  start: Yup.string().required().label("Start Date"),
  end: Yup.string().required().label("End Date"),
  name: Yup.string().required().min(3).label("Challnege Name"), //naming the challenge
  description: Yup.string().label("Description"),
  image: Yup.string().required().label("Image"),
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
    <ScrollView>
      <Screen style={styles.container}>
        <AppForm
          initialValues={{
            workout: null,
            base: null,
            goal: null,
            start: "",
            end: "",
            name: "",
            description: "",
            image: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Creat Challenge</Text>
          </View>

          <AppFormImagePicker name="image" />
          <AppFormPicker
            questionTitle="which workout count toward your challenge?"
            items={workoutTypes}
            name="workout"
            numberOfColumns={3}
            // PickerItemComponent={WorkoutPickerItem}
            placeholder="Select workout type"
            width="50%"
          />
          <AppFormPicker
            questionTitle="do you want to track time or frequency?"
            items={challengeBase}
            name="base"
            numberOfColumns={3}
            // PickerItemComponent={ChallenegBasePickerItem}
            placeholder="Select challenge base"
            width="50%"
          />
          <AppFormPicker
            questionTitle="set goal for your challenge :"
            items={challengeGoal}
            name="goal"
            numberOfColumns={3}
            // PickerItemComponent={ChallenegGoalPickerItem}
            placeholder="Select goal"
            width="50%"
          />
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

// import { ScrollView, StyleSheet, Text, View } from "react-native";
// import React from "react";
// import * as Yup from "yup";

// import {
//   AppForm,
//   AppFormField,
//   SubmitButton,
//   AppFormPicker,
// } from "../../components/forms";
// import Screen from "../../components/Screen";
// import colors from "../../config/colors";

// const validationSchema = Yup.object().shape({
//   workout: Yup.object().required().label("Workout Type"), //workout type
//   base: Yup.object().required().label("Time or Frequency"), //time or frequency base
//   goal: Yup.object().required().label("Goal"), //goal for time, everyday, , etc
//   name: Yup.string().required().min(3).label("Challnege Name"), //naming the challenge
//   description: Yup.string().label("Description"),
// });

// const workoutTypes = [
//   { label: "Cardio", value: 1 },
//   { label: "Strength", value: 2 },
//   { label: "Yoga", value: 3 },
// ];
// const challengeBase = [
//   { label: "Time", value: 1 },
//   { label: "Frequency", value: 2 },
// ];
// const challengeGoal = [
//   { label: "Everyday", value: 1 },
//   { label: "Weekly", value: 2 },
//   { label: "Monthly", value: 3 },
// ];

// export default function CreateChallengeScreen({}) {
//   return (
//     <ScrollView>
//       <Screen style={styles.container}>
//         <AppForm
//           initialValues={{
//             workout: null,
//             base: null,
//             goal: null,
//             name: "",
//             description: "",
//           }}
//           onSubmit={(values) => console.log(values)}
//           validationSchema={validationSchema}
//         >
//           <View style={styles.headerContainer}>
//             <Text style={styles.headerText}>Creat Challenge</Text>
//           </View>

//           <AppFormPicker
//             questionTitle="which workout count toward your challenge?"
//             items={workoutTypes}
//             name="workout"
//             numberOfColumns={3}
//             // PickerItemComponent={WorkoutPickerItem}
//             placeholder="Select workout type"
//             width="50%"
//           />
//           <AppFormPicker
//             questionTitle="do you want to track time or frequency?"
//             items={challengeBase}
//             name="base"
//             numberOfColumns={3}
//             // PickerItemComponent={ChallenegBasePickerItem}
//             placeholder="Select challenge base"
//             width="50%"
//           />
//           <AppFormPicker
//             questionTitle="set the goal for your challenge :"
//             items={challengeGoal}
//             name="goal"
//             numberOfColumns={3}
//             // PickerItemComponent={ChallenegGoalPickerItem}
//             placeholder="Select goal"
//             width="50%"
//           />
//           <AppFormField
//             questionTitle="Give your challenge a name"
//             maxLength={100}
//             name="name"
//             placeholder="Add name"
//           />
//           <AppFormField
//             questionTitle="optionally add a description here:"
//             maxLength={255}
//             multiline
//             name="description"
//             numberOfLines={3}
//             placeholder="Add description"
//           />
//           <View style={styles.submitBtnContainer}>
//             <SubmitButton title="Create" />
//           </View>
//         </AppForm>
//       </Screen>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     marginTop: 30,
//     marginBottom: 100,
//   },
//   headerContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 20,
//   },
//   headerText: {
//     fontSize: 30,
//     fontFamily: "montserrat-black",
//     color: colors.orangePrimary,
//     textAlign: "center",
//     textTransform: "uppercase",
//   },
//   titleFormField: {
//     fontSize: 16,
//     fontFamily: "montserrat-black",
//     color: colors.white,
//   },
//   submitBtnContainer: {
//     marginTop: 20,
//   },
// });
