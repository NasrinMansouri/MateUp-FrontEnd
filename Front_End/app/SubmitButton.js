import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import AppButton from "./components/AppButton";

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} height={48} onPress={handleSubmit} />;
}

const styles = StyleSheet.create({});