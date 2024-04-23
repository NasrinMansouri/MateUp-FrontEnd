import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import AppButton from "../AppButton";
import colors from "../../config/colors";
import { ModalHeader, DropDownList, DatePicker, Gender } from "./filter/index";

const FilterModal = ({ setModalVisible }) => {
  //to apply reset, when clicked on reset button

  const dataWorkout = [
    {
      Key: "1",
      value: "Strength Training",
      disabled: true,
    },
    {
      Key: "2",
      value: "Running",
    },
    {
      Key: "3",
      value: "Yoga",
    },
  ];

  const dataLocation = [
    {
      Key: "1",
      value: "Los Angeles",
    },
    {
      Key: "2",
      value: "New York",
    },
  ];

  return (
    <View>
      <ModalHeader title="Filter" onPress={() => setModalVisible(false)} />
      <ScrollView>
        <Gender />
        <DropDownList
          title={"Workout"}
          placeholder={"Select workout"}
          data={dataWorkout}
        />
        <DropDownList
          title={"Location"}
          placeholder={"Select location"}
          data={dataLocation}
        />
        <DatePicker title="When" placeholder={"Select date"} />
        <View style={styles.btnContainer}>
          <AppButton
            title="Reset"
            width="50%"
            fontSize={14}
            onPress={() => setModalVisible(false)}
          />
          <AppButton
            title="Apply"
            width="50%"
            fontSize={14}
            backgroundColor={colors.orangePrimary}
            onPress={() => setModalVisible(false)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    marginTop: 20,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 120,
  },
});

export default FilterModal;
