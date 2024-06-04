//for picking category!

import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import colors from "../../config/colors";
import Screen from "../Screen";
import PickerItem from "./PickerItem";

export default function AppPicker({
  icon,
  items,
  onSelectItem,
  selectedItem,
  PickerItemComponent = PickerItem,
  placeholder,
  borderWidth = 1,
  borderColor = colors.green,
  backgroundColor = colors.blackBc,
  ...otherProps
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <GestureHandlerRootView>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
          <View
            style={[
              styles.container,
              {
                borderColor: borderColor,
                backgroundColor: backgroundColor,
                borderWidth: borderWidth,
              },
            ]}
          >
            {icon && (
              <MaterialCommunityIcons
                name={icon}
                size={20}
                color={colors.grayLight50}
                style={styles.icon}
              />
            )}
            {selectedItem ? (
              <Text style={styles.text}>{selectedItem.label}</Text>
            ) : (
              <Text style={styles.placeholder}>{placeholder}</Text>
            )}

            <MaterialCommunityIcons
              name="chevron-down"
              size={24}
              color={colors.green}
            />
          </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
          <Screen style={styles.screen}>
            <Button
              title="Close"
              color={colors.orangeSecondary}
              style={styles.button}
              onPress={() => setModalVisible(false)}
            />
            <FlatList
              data={items}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <PickerItemComponent
                  label={item.label}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                  }}
                />
              )}
            />
          </Screen>
        </Modal>
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: "row",
    width: "100%",
    padding: 12,
    // marginVertical: 10,
    // marginBottom: 40,
  },
  screen: {
    backgroundColor: colors.blackBc,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1, // Take as much space as possible and push chevron to the right
    color: colors.white,
    fontFamily: "nunitoSans-regular",
    fontSize: 18,
  },
  placeholder: {
    flex: 1,
    color: colors.gray,
    fontFamily: "nunitoSans-regular",
    fontSize: 18,
  },
});

//dummy data
// const categories = [
//   {
//     label: "Category 1",
//     value: 1,
//   },
//   {
//     label: "Category 2",
//     value: 2,
//   },
//   {
//     label: "Category 3",
//     value: 3,
//   },
// ];

//make it empty initially if no category want to be selected
//ex: const [category, setCategory] = useState();

// const [category, setCategory] = useState(categories[0]);
/* <AppPicker
selectedItem={category}
onSelectItem={(item) => setCategory(item)}
items={categories}
placeholder={"category"}
/> */
