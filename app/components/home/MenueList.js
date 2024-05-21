import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableHighlight } from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "../../config/colors";

export default function MenueList({
  onPress,
  title,
  name,
  feather,
  profilePicture,
  userName,
}) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={onPress}
        activeOpacity={0.9}
        underlayColor={colors.grayLight50}
      >
        <View style={styles.containerBox}>
          {feather && <Feather name={name} size={24} color={colors.green} />}
          {profilePicture && (
            <View style={styles.imageContainer}>
              <Image source={profilePicture} style={styles.image} />
              <Text style={styles.text}>{userName}</Text>
            </View>
          )}
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  containerBox: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 10,
    height: 70,
    backgroundColor: colors.black,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "nunitoSans-regular",
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  imageContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
