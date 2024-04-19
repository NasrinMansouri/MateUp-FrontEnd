import React from "react";
import { StyleSheet, View } from "react-native";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInpute from "./ImageInpute";

export default function AppFormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <View style={styles.container}>
      <ImageInpute
        imageUri={values[name]}
        onChangeImage={(uri) => setFieldValue(name, uri)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
