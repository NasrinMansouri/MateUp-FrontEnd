import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";
import colors from "../../config/colors";

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      title={title}
      height={48}
      onPress={handleSubmit}
      backgroundColor={colors.orangeSecondary}
    />
  );
}

const styles = StyleSheet.create({});
