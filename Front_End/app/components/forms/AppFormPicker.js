import React from "react";
import { useFormikContext } from "formik";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

import AppPicker from "../AppPicker";
import colors from "../../config/colors";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
  questionTitle,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      {questionTitle && (
        <Text style={styles.questionTitle}>{questionTitle}</Text>
      )}
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;

const styles = StyleSheet.create({
  questionTitle: {
    fontSize: 18,
    fontFamily: "montserrat-black",
    color: colors.white,
    marginBottom: 5,
    textTransform: "uppercase",
    marginTop: 20,
  },
});
