import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";

import colors from "../../../config/colors";

export default function Gender() {
  const [selected, setSelected] = useState(0); // 0: All, 1: Women, 2: Men

  const handlePress = (index) => {
    setSelected(index);
  };

  const boxStyles = (index) => {
    return [
      styles.box,
      selected === index && styles.selectedBox,
      selected === index && {
        backgroundColor: colors.orangeSecondary,
        // borderRadius: 4,
      },
    ];
  };

  const textStyles = (index) => {
    return [
      styles.text,
      selected === index && styles.selectedText,
      selected === index && { color: colors.white },
    ];
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Gender</Text>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => handlePress(0)}>
          <View
            style={[
              boxStyles(0),
              { borderTopLeftRadius: 4, borderBottomLeftRadius: 4 },
            ]}
          >
            <Text style={textStyles(0)}>All</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handlePress(1)}>
          <View style={boxStyles(1)}>
            <Text style={textStyles(1)}>Women</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handlePress(2)}>
          <View
            style={[
              boxStyles(2),
              {
                borderTopRightRadius: 4,
                borderBottomRightRadius: 4,
              },
            ]}
          >
            <Text style={textStyles(2)}>Men</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 30,
    marginTop: 100,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
    backgroundColor: colors.grayLight50,
    height: 53,
    width: "100%",
    borderRadius: 4,
  },
  title: {
    color: colors.black,
    fontFamily: "nunitoSans-bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
  box: {
    width: "33.3%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedBox: {
    backgroundColor: colors.orangeSecondary,
  },
  text: {
    fontFamily: "nunitoSans-regular",
    color: colors.black,
    fontSize: 16,
  },
  selectedText: {
    color: colors.white,
  },
});
