import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function UserImage({ userImage }) {
  return (
    <View style={styles.container}>
      <Image source={userImage} style={styles.userImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  userImage: {
    width: 116,
    height: 116,
    borderRadius: 116 / 2,
    marginLeft: 16,
    marginTop: 40,
    // marginBottom: 22,
  },
});
