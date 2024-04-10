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

import colors from "../config/colors";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

export default function AppPicker({
  icon,
  items,
  borderWidth = 1,
  borderColor = colors.grayLight50,
  backgroundColor = colors.blackBc,
  placeholder,
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
            <Text style={styles.text}> {placeholder} </Text>
            <MaterialCommunityIcons
              name="chevron-down"
              size={24}
              color={colors.grayLight50}
            />
          </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
          <Screen>
            <Button title="Close" onPress={() => setModalVisible(false)} />
            <FlatList
              data={items}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <PickerItem
                  label={item.label}
                  onPress={() => console.log(item)}
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
    padding: 15,
    marginVertical: 10,
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
});
