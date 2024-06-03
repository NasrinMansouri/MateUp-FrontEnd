import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppButton from "../AppButton";
import colors from "../../config/colors";

function ListItem({
  showRequest,
  showRequestResult,
  userImage,
  name,
  title,
  onPressConfirm,
  onPressDecline,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.mainContainer}>
        {showRequestResult ? (
          <TouchableHighlight
            onPress={onPress}
            //   onPress={() => console.log("result pressed")}
            underlayColor={colors.black}
            style={styles.container}
          >
            <View style={styles.containerResult}>
              <View>
                <Image source={userImage} style={styles.userImage} />
              </View>
              <View style={styles.containerText}>
                <Text style={styles.name}>{name} </Text>
                <Text style={styles.textTitle} numberOfLines={2}>
                  {title}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        ) : null}

        {showRequest ? (
          <TouchableHighlight
            onPress={onPress}
            underlayColor={colors.black}
            style={styles.container}
          >
            <View style={styles.containerRequest}>
              <View style={styles.imageTextContainer}>
                <View>
                  <Image source={userImage} style={styles.userImage} />
                </View>
                <View style={styles.containerTextRequest}>
                  <Text style={styles.name}>{name} </Text>
                  <Text style={styles.textTitle} numberOfLines={2}>
                    {title}
                  </Text>
                </View>
              </View>
              <View style={styles.containerButtons}>
                <AppButton
                  title="Accept"
                  width={60}
                  height={30}
                  onPress={onPressConfirm}
                  fontFamily="nunitoSans-extraBold"
                  fontSize={12}
                  textTransform={"capitalize"}
                />

                <AppButton
                  title="Delete"
                  width={60}
                  height={30}
                  onPress={onPressDecline}
                  fontFamily="nunitoSans-extraBold"
                  fontSize={12}
                  backgroundColor={colors.black}
                  borderWidth={1}
                  borderColor={colors.danger}
                  textTransform={"capitalize"}
                />
              </View>
            </View>
          </TouchableHighlight>
        ) : null}
      </View>
    </Swipeable>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 16,
    marginTop: 16,
  },
  container: {
    marginLeft: 16,
    marginRight: 16,
  },
  containerResult: {
    flexDirection: "row",
    gap: 10,
  },
  userImage: {
    width: 49,
    height: 49,
    borderRadius: 49 / 2,
  },
  containerText: {
    flex: 1,
    flexDirection: "column",
  },
  name: {
    fontFamily: "nunitoSans-bold",
    fontSize: 14,
    color: colors.white,
  },
  textTitle: {
    fontFamily: "nunitoSans-regular",
    fontSize: 14,
    color: colors.white,
  },
  containerRequest: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  imageTextContainer: {
    flexDirection: "row",
    gap: 10,
  },
  containerButtons: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  containerTextRequest: {
    width: 150,
  },
});

//dummy data:
// const dummyData = [
//   {
//     name: "John Doe",
//     title: "Confirmed your High-Five request.",
//     userImage: require("./assets/person2.jpg"), // Replace with actual image path
//     onPressConfirm: () => console.log("Confirm pressed for John Doe"),
//     onPressDecline: () => console.log("Decline pressed for John Doe"),
//     showRequestResult: true, // or false based on your requirement
//     showRequest: false, // or true based on your requirement
//   },
//   {
//     name: "Jane Smith",
//     title: "Sent you a High-Five request.",
//     userImage: require("./assets/person3.jpg"), // Replace with actual image path
//     onPressConfirm: () => console.log("Confirm pressed for Jane Smith"),
//     onPressDecline: () => console.log("Decline pressed for Jane Smith"),
//     showRequestResult: false, // or true based on your requirement
//     showRequest: true, // or false based on your requirement
//   },
//   // Add more dummy data objects as needed
// ];

//ysed in app.js
// {dummyData.map((data, index) => (
//     <ListItem
//       key={index}
//       name={data.name}
//       title={data.title}
//       userImage={data.userImage}
//       onPressConfirm={data.onPressConfirm}
//       onPressDecline={data.onPressDecline}
//       showRequestResult={data.showRequestResult}
//       showRequest={data.showRequest}
//     />
//   ))}
