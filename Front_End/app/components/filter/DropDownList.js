//  npm install react-native-dropdown-select-list

import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import { FontAwesome } from "@expo/vector-icons";

import colors from "../../config/colors";

export default function DropDownList({ placeholder, title, data }) {
  const [selected, setSelected] = useState([]);

  //   const data = [
  //     { key: "1", value: "All" },
  //     { key: "2", value: "Mobiles", disabled: true },
  //     { key: "3", value: "Appliances" },
  //     { key: "4", value: "Cameras" },
  //     { key: "5", value: "Computers", disabled: true },
  //     { key: "6", value: "Vegetables" },
  //     { key: "7", value: "Diary Products" },
  //     { key: "8", value: "Drinks" },
  //   ];

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.dropdown}>
        <MultipleSelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          label="selected :"
          labelStyles={{ color: colors.grayLight100 }}
          //shows the selected items
          onSelect={() => console.log(selected)}
          save="key"
          placeholder={placeholder}
          arrowicon={
            <FontAwesome name="chevron-down" size={12} color={colors.green} />
          }
          boxStyles={{
            borderWidth: 1,
            borderColor: colors.grayLight50,
            borderRadius: 4,
            width: "100%",
          }}
          inputStyles={{
            fontFamily: "nunitoSans-regular",
            fontSize: 14,
            color: colors.grayLight100,
            flex: 1,
          }}
          dropdownStyles={{
            borderWidth: 1,
            borderColor: colors.grayLight50,
            borderRadius: 4,
          }}
          dropdownTextStyles={{
            fontFamily: "nunitoSans-extraBold",
            fontSize: 16,
            color: colors.black,
          }}
          notFoundText="No Results Found"
          badgeStyles={{
            backgroundColor: colors.black,
            borderColor: colors.green,
            borderWidth: 2,
            borderRadius: 4,
          }}
          badgeTextStyles={{
            fontFamily: "nunitoSans-extraBold",
            fontSize: 14,
            color: colors.white,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flex: 1,
  },
  dropdown: {
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    color: colors.black,
    fontFamily: "nunitoSans-bold",
    fontSize: 16,
    textTransform: "uppercase",
    marginBottom: 6,
    marginLeft: 16,
  },
});
