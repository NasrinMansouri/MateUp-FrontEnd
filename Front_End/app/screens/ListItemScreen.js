import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import ListItem from "../components/ListItem";

export default function ListItemScreen({ style }) {
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
    // Add more dummy data objects as needed
  ];
  return (
    <FlatList
      style={[styles.container, style]}
      data={notificationsData}
      keyExtractor={(notification) => notification.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          onPress={() => console.log("my notification", item)}
          // name={capitalizeFirstLetter(item.name)}
          name={item.name}
          title={item.title}
          userImage={item.userImage}
          onPressConfirm={item.onPressConfirm}
          onPressDecline={item.onPressDecline}
          onPressResult={item.onPressResult}
          onPressReqest={item.onPressRequrst}
          showRequestResult={item.showRequestResult}
          showRequest={item.showRequest}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});
