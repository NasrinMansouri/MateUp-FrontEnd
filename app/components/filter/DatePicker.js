import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome } from "@expo/vector-icons";

import colors from "../../config/colors";
import AppButtonBorder from "../AppButtonBorder";

export default function DatePicker({ title, setFieldValue, ...otherProps }) {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type === "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
      }
    } else {
      toggleDatePicker();
    }
  };

  const confirmIOSDate = () => {
    toggleDatePicker();
  };

  const cancelIOSDate = () => {
    setDate(new Date()); // Reset the date to the current date
    toggleDatePicker();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {showPicker && Platform.OS === "ios" && (
        <View style={styles.btnContainer}>
          <AppButtonBorder
            // onPress={toggleDatePicker}
            onPress={cancelIOSDate}
            title="cancel"
            height={40}
            width={100}
            backgroundColor={colors.white}
            borderColor={colors.black}
            textColor={colors.black}
            borderRadius={5}
          />
          <AppButtonBorder
            onPress={confirmIOSDate}
            title="Confirm"
            height={40}
            width={100}
            backgroundColor={colors.black}
            borderColor={colors.green}
            textColor={colors.orangePrimary}
            borderRadius={5}
          />
        </View>
      )}
      {!showPicker && (
        <Pressable onPress={toggleDatePicker}>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Select Date"
              value={date ? date.toDateString() : ""} // Set the form field value and handle null date
              onChangeText={setDate}
              editable={false}
              onPressIn={toggleDatePicker}
              onBlur={() => setFieldTouched}
              style={styles.textInput}
              placeholderTextColor={colors.gray}
              {...otherProps}
            />
            <FontAwesome
              name="chevron-down"
              size={12}
              color={colors.green}
              style={styles.icon}
            />
          </View>
        </Pressable>
      )}

      {showPicker && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={date}
          onChange={onChange}
          style={styles.datePicker}
          textColor={colors.black}
        />
      )}

      {/* to show time */}
      {/* {showPicker && (
        <DateTimePicker
          mode="time"
          display="spinner"
          value={date}
          onChange={onChange}
          style={styles.datePicker}
          textColor={colors.black}
        />
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 30,
  },
  textInputContainer: {
    position: "relative",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    // color: colors.black,
    fontFamily: "nunitoSans-bold",
    fontSize: 16,
    textTransform: "uppercase",
    marginBottom: 6,
    // marginLeft: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.grayLight50,
    borderRadius: 4,
    flex: 1,
    width: "100%",
    height: 45,
    paddingRight: 30,
    paddingLeft: 20,
  },
  icon: {
    position: "absolute",
    right: 20,
    top: 15,
  },
});
