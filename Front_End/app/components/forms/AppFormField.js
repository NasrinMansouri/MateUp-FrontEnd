import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import Colors from "../../config/colors";

export default function AppFormField({ name, questionTitle, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      {questionTitle && (
        <Text style={styles.questionTitle}>{questionTitle}</Text>
      )}
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  questionTitle: {
    fontSize: 18,
    marginTop: 20,
    fontFamily: "montserrat-black",
    color: Colors.white,
    marginBottom: 5,
    textTransform: "uppercase",
  },
});
