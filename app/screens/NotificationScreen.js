import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { ListItem, ListItemDeletAction } from "../components/lists";
import colors from "../config/colors";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/lists/ListItemSeperator";

//dummy data
const initialNotifications = [
  {
    id: 1,
    name: "linda lee",
    title: "Confirmed your buddy request.",
    userImage: require("../../assets/person2.jpg"), // Replace with actual image path
    onPressConfirm: () => console.log("Confirm pressed for John Doe"),
    onPressDecline: () => console.log("Decline pressed for John Doe"),
    showRequestResult: true, // or false based on your requirement
    showRequest: false, // or true based on your requirement
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Sent you a buddy request.",
    userImage: require("../../assets/person4.jpg"), // Replace with actual image path
    onPressConfirm: () => console.log("Confirm pressed for Jane Smith"),
    onPressDecline: () => console.log("Decline pressed for Jane Smith"),
    showRequestResult: false, // or true based on your requirement
    showRequest: true, // or false based on your requirement
  },
  {
    id: 3,
    name: "Sarah Johnson",
    title: "Sent you a buddy request.",
    userImage: require("../../assets/person5.jpg"), // Replace with actual image path
    onPressConfirm: () => console.log("Confirm pressed for Jane Smith"),
    onPressDecline: () => console.log("Decline pressed for Jane Smith"),
    showRequestResult: false, // or true based on your requirement
    showRequest: true, // or false based on your requirement
  },
];

export default function ListItemGallery({ style }) {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (notification) => {
    // Delete the notification from notifications
    // Later all the server API to delete the notification!
    const newNotifications = notifications.filter(
      (n) => n.id !== notification.id
    );
    setNotifications(newNotifications);
  };

  return (
    <Screen>
      <GestureHandlerRootView>
        <FlatList
          style={[styles.container, style]}
          data={notifications}
          keyExtractor={(notification) => notification.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              //to direct user to different Gallery
              onPress={() => console.log("my notification", item)}
              name={item.name}
              title={item.title}
              userImage={item.userImage}
              onPressConfirm={item.onPressConfirm}
              onPressDecline={() => handleDelete(item)}
              showRequestResult={item.showRequestResult}
              showRequest={item.showRequest}
              renderRightActions={() => (
                <ListItemDeletAction onPress={() => handleDelete(item)} />
              )}
            />
          )}
          ItemSeparatorComponent={
            <ListItemSeparator backgroundColor={colors.black} />
          }
          refreshing={refreshing}
          onRefresh={() =>
            setNotifications([
              {
                id: 1,
                name: "Linda Lee",
                title: "Confirmed your High-Five request.",
                userImage: require("../../assets/person2.jpg"), // Replace with actual image path
                onPressConfirm: () =>
                  console.log("Confirm pressed for John Doe"),
                onPressDecline: () =>
                  console.log("Decline pressed for John Doe"),
                showRequestResult: true, // or false based on your requirement
                showRequest: false, // or true based on your requirement
              },
              {
                id: 2,
                name: "Sarah Johnson",
                title: "Sent you a High-Five request.",
                userImage: require("../../assets/person4.jpg"), // Replace with actual image path
                onPressConfirm: () =>
                  console.log("Confirm pressed for Jane Smith"),
                onPressDecline: () =>
                  console.log("Decline pressed for Jane Smith"),
                showRequestResult: false, // or true based on your requirement
                showRequest: true, // or false based on your requirement
              },
            ])
          }
        />
      </GestureHandlerRootView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    height: "100%",
  },
});