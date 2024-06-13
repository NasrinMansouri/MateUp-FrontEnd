import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import AppButton from "../AppButton";
import colors from "../../config/colors";
import { ModalHeader, DropDownList, DatePicker, Gender } from "../filter";
// import TimePicker from "../filter/TimePicker";

const FilterModal = ({ setModalVisible }) => {
  //to apply reset, when clicked on reset button

  const dataWorkout = [
    {
      Key: "1",
      value: "Strength Training",
    },
    {
      Key: "2",
      value: "Running",
    },
    {
      Key: "3",
      value: "Yoga",
    },
    {
      Key: "4",
      value: "GXR",
    },
    {
      Key: "5",
      value: "Group Class",
    },
    {
      Key: "6",
      value: "Cycling",
    },
    {
      Key: "7",
      value: "Dance",
    },
  ];

  const dataLocation = [
    {
      Key: "1",
      value: "Avenue Louis, Brussel",
    },
    {
      Key: "2",
      value: "uccle Bascule, Brussel",
    },
    {
      Key: "3",
      value: "Rue du Lac, Mechelen",
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
        {/* <TimePicker title="Time" placeholder={"Select time"} /> */}
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
