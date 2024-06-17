import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import * as Notifications from "expo-notifications";

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
    userImage: require("../../assets/person2.jpg"),
    onPressConfirm: () => console.log("Confirm pressed for John Doe"),
    showRequestResult: true,
    showRequest: false,
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Sent you a buddy request.",
    userImage: require("../../assets/person4.jpg"),
    onPressConfirm: () => console.log("Confirm pressed for Jane Smith"),
    showRequestResult: false,
    showRequest: true,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    title: "Sent you a buddy request.",
    userImage: require("../../assets/person5.jpg"),
    onPressConfirm: () => console.log("Confirm pressed for Jane Smith"),
    showRequestResult: false,
    showRequest: true,
  },
];

export default function ListItemGallery({ style }) {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [refreshing, setRefreshing] = useState(false);

  // for recieveing notification
  // useEffect(() => {
  //   // Request notification permissions
  //   const requestPermissions = async () => {
  //     const { status } = await Notifications.requestPermissionsAsync();
  //     if (status !== "granted") {
  //       alert("You need to enable notifications permissions in settings.");
  //     }
  //   };

  //   requestPermissions();

  //   // Set the notification handler
  //   Notifications.setNotificationHandler({
  //     handleNotification: async () => ({
  //       shouldShowAlert: true,
  //       shouldPlaySound: true,
  //       shouldSetBadge: true,
  //     }),
  //   });
  // }, []);

  const handleDelete = (notification) => {
    // to show notification when delete button is pressed
    // showNotification();

    // Delete the notification from notifications
    // Later all the server API to delete the notification!
    const newNotifications = notifications.filter(
      (n) => n.id !== notification.id
    );
    setNotifications(newNotifications);
  };

  // const showNotification = async () => {
  //   try {
  //     const notificationId = await Notifications.scheduleNotificationAsync({
  //       content: {
  //         title: "Notification",
  //         body: "Are you sure you want to delete this?",
  //         data: {
  //           _displayInForeground: true,
  //         },
  //         sound: true,
  //       },
  //       trigger: { seconds: 1 },
  //     });
  //     console.log("Notification scheduled with ID:", notificationId);
  //   } catch (error) {
  //     console.log("Error scheduling notification:", error);
  //   }
  // };

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
                userImage: require("../../assets/person2.jpg"),
                onPressConfirm: () =>
                  console.log("Confirm pressed for John Doe"),
                showRequestResult: true,
                showRequest: false,
              },
              {
                id: 2,
                name: "Sarah Johnson",
                title: "Sent you a High-Five request.",
                userImage: require("../../assets/person4.jpg"),
                onPressConfirm: () =>
                  console.log("Confirm pressed for Jane Smith"),
                showRequestResult: false,
                showRequest: true,
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
