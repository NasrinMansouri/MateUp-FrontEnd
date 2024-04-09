import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import ListItem from "./ListItem";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import colors from "../config/colors";

export default function ListItemGallery({ style }) {
  const notificationsData = [
    {
      id: 1,
      name: "John Doe",
      title: "Confirmed your High-Five request.",
      userImage: require("../../assets/person2.jpg"), // Replace with actual image path
      onPressConfirm: () => console.log("Confirm pressed for John Doe"),
      onPressDecline: () => console.log("Decline pressed for John Doe"),
      showRequestResult: true, // or false based on your requirement
      showRequest: false, // or true based on your requirement
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Sent you a High-Five request.",
      userImage: require("../../assets/person3.jpg"), // Replace with actual image path
      onPressConfirm: () => console.log("Confirm pressed for Jane Smith"),
      onPressDecline: () => console.log("Decline pressed for Jane Smith"),
      showRequestResult: false, // or true based on your requirement
      showRequest: true, // or false based on your requirement
    },
    {
      id: 3,
      name: "Jane Smith",
      title: "Sent you a High-Five request.",
      userImage: require("../../assets/person3.jpg"), // Replace with actual image path
      onPressConfirm: () => console.log("Confirm pressed for Jane Smith"),
      onPressDecline: () => console.log("Decline pressed for Jane Smith"),
      showRequestResult: false, // or true based on your requirement
      showRequest: true, // or false based on your requirement
    },
  ];
  return (
    <GestureHandlerRootView>
      <FlatList
        style={[styles.container, style]}
        data={notificationsData}
        keyExtractor={(notification) => notification.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            //to direct user to different Gallery
            onPress={() => console.log("my notification", item)}
            name={item.name}
            title={item.title}
            userImage={item.userImage}
            onPressConfirm={item.onPressConfirm}
            onPressDecline={item.onPressDecline}
            showRequestResult={item.showRequestResult}
            showRequest={item.showRequest}
            renderRightActions={() => (
              <View style={{ backgroundColor: "red", width: 50 }}></View>
            )}
          />
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: colors.black,
            }}
          />
        )}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});
