import React, { useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import * as Notifications from "expo-notifications";

import Screen from "../../components/Screen";
import colors from "../../config/colors";
import TopNav from "../../components/topNavigation/TopNav";
import Line from "../../components/Line";
import CardAvailableGroup from "../../components/coach/CardAvailableGroup";
import coaches from "../../api/coaches";

export default function AvailableGroupsScreen({ navigation, route }) {
  const { trainerId } = route.params;
  console.log("trainerId on AvailableGroupsScreen", trainerId);
  // for recieveing notification
  useEffect(() => {
    // Request notification permissions
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("You need to enable notifications permissions in settings.");
      }
    };

    requestPermissions();

    // Set the notification handler
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });
  }, []);

  const showNotification = async () => {
    try {
      const notificationId = await Notifications.scheduleNotificationAsync({
        content: {
          title: "Thanks for your interest!",
          body: "You will shortly recieve a message from your instructor.",
          data: {
            _displayInForeground: true,
          },
          sound: true,
        },
        trigger: { seconds: 1 },
      });
      console.log("Notification scheduled with ID:", notificationId);
    } catch (error) {
      console.log("Error scheduling notification:", error);
    }
  };



  // const availableGroups = [
  //   {
  //     id: 1,
  //     members: [
  //       {
  //         id: 1,
  //         image: require("../../../assets/person3.jpg"),
  //       },
  //       {
  //         id: 2,
  //         image: require("../../../assets/person3.jpg"),
  //       },
  //     ],
  //     goal: "Get Strong and get toned",
  //     date: "Aug 3",
  //     year: "2024",
  //     start: "5 PM",
  //     end: "7 PM",
  //     spots: "1 spot is still available",
  //   },
  //   {
  //     id: 2,
  //     members: [
  //       {
  //         id: 1,
  //         image: require("../../../assets/person3.jpg"),
  //       },
  //     ],
  //     goal: "Get Strong and get toned",
  //     date: "Aug 3",
  //     year: "2024",
  //     start: "5 PM",
  //     end: "7 PM",
  //     spots: "2 spot is still available",
  //   },
  // ];


  const [availableGroups, setAvailableGroups] = React.useState([]);

  useEffect(() => {
    loadSessions();
  }, []);

  const loadSessions = async () => {
    try {
      const response = await coaches.getCoachesSessions(trainerId)
      console.log(response.data.sessions);
      setAvailableGroups(response.data.sessions);
    } catch (error) {
      console.error("Error loading member profile:", error);
    }
  };
  return (
    <Screen style={styles.mainContainer}>
      {/* <TopNav /> */}
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.title}>Available Groups to Join</Text>
          </View>
          <Line marginTop={0} marginBottom={22} />
          {availableGroups.map((group, id) => (
            <CardAvailableGroup
              key={id}
              //members={group.members}
              members={[{
                id: 1,
                image: require("../../../assets/person3.jpg"),
              }]}
              goal={group.goal}
              date={group.session_date}
              //year={group.year}
              start={group.start_time}
              end={group.end_time}
              spots={group.available_spots}
              onPress={() => showNotification()}
            />
          ))}
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.blackBc,
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontFamily: "montserrat-black",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 16,
    marginRight: 16,
    color: colors.white,
    textTransform: "uppercase",
  },
  container: {
    flex: 1,
    backgroundColor: colors.blackBc,
    height: "100%",
    width: "100%",
  },
  header: {
    // backgroundColor: colors.blackBc,
  },
});
