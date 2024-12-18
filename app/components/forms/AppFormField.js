import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import colors from "../../config/colors";

export default function AppFormField({ name, questionTitle, ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    handleChange,
    errors,
    touched,
    values,
  } = useFormikContext();
  return (
    <>
      {questionTitle && (
        <Text style={styles.questionTitle}>{questionTitle}</Text>
      )}
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        // value={values[name]}
        // onchangeText={(text) => setFieldValue(name, text)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  questionTitle: {
    fontSize: 16,
    marginTop: 30,
    fontFamily: "montserrat-black",
    color: colors.white,
    marginBottom: 5,
    textTransform: "uppercase",
  },
});
