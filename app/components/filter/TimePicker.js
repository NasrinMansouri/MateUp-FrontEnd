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

export default function TimePicker({ title, setFieldValue, ...otherProps }) {
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleTimePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = (event, selectedTime) => {
    if (selectedTime) {
      setTime(selectedTime);
      if (Platform.OS === "android") {
        toggleTimePicker();
      }
    }
  };

  const confirmIOSTime = () => {
    toggleTimePicker();
  };

  const cancelIOSTime = () => {
    setTime(new Date()); // Reset the time to the current time
    toggleTimePicker();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {showPicker && Platform.OS === "ios" && (
        <View style={styles.btnContainer}>
          <AppButtonBorder
            onPress={cancelIOSTime}
            title="Cancel"
            height={40}
            width={100}
            backgroundColor={colors.white}
            borderColor={colors.black}
            textColor={colors.black}
            borderRadius={5}
          />
          <AppButtonBorder
            onPress={confirmIOSTime}
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
        <Pressable onPress={toggleTimePicker}>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Select Time"
              value={
                time
                  ? time.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : ""
              }
              editable={false}
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
          mode="time"
          display="spinner"
          value={time}
          onChange={onChange}
          style={styles.datePicker}
          textColor={colors.black}
        />
      )}
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
    fontFamily: "nunitoSans-bold",
    fontSize: 16,
    textTransform: "uppercase",
    marginBottom: 6,
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
