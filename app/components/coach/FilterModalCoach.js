import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import AppButton from "../AppButton";
import colors from "../../config/colors";
import { ModalHeader, DropDownList, DatePicker, Gender } from "../filter";
import TimePicker from "../filter/TimePicker";

const FilterModalCoach = ({ setModalVisible }) => {
  const dataExpertise = [
    {
      Key: "1",
      value: "Get Fitter",
    },
    {
      Key: "2",
      value: "Lose Weight",
    },
    {
      Key: "3",
      value: "Functional Training",
    },
    {
      Key: "4",
      value: "Improve Performance",
    },
    {
      Key: "5",
      value: "Gey stronger",
    },
    {
      Key: "6",
      value: "Improve muscle tone",
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

  const dataLanguage = [
    {
      Key: "1",
      value: "English",
    },
    {
      Key: "2",
      value: "French",
    },
    {
      Key: "3",
      value: "Dutch",
    },
    {
      Key: "4",
      value: "Spanish",
    },
    {
      Key: "5",
      value: "German",
    },
  ];

  const dataRate = [
    {
      Key: "1",
      value: "90 euro per hour and group",
    },
    {
      Key: "2",
      value: "100 euro per hour and group",
    },
    {
      Key: "3",
      value: "120 euro per hour and group",
    },
    {
      Key: "4",
      value: "150 euro per hour and group",
    },
  ];

  return (
    <View>
      <ModalHeader title="Filter" onPress={() => setModalVisible(false)} />
      <ScrollView>
        <Gender />
        <DropDownList
          title={"Expertise"}
          placeholder={"Select workout"}
          data={dataExpertise}
        />
        <DropDownList
          title={"Location"}
          placeholder={"Select location"}
          data={dataLocation}
        />
        <DatePicker title="Date" placeholder={"Select date"} />
        <TimePicker title="Time" placeholder={"Select time"} />
        <DropDownList
          title={"Language"}
          placeholder={"Select location"}
          data={dataLanguage}
        />
        <DropDownList
          title={"rate"}
          placeholder={"Select Rate"}
          data={dataRate}
        />
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

export default FilterModalCoach;
