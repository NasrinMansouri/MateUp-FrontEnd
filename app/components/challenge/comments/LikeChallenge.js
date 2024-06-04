import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../../../config/colors";

export default function LikeChallenge({}) {
  const [liked, setLiked] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(10);

  const handleLike = () => {
    if (liked) {
      setNumberOfLikes(numberOfLikes - 1);
    } else {
      setNumberOfLikes(numberOfLikes + 1);
    }
    setLiked(!liked);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLike}>
        <MaterialCommunityIcons
          name={liked ? "heart" : "heart-outline"}
          size={24}
          color={liked ? "red" : Colors.white}
        />
      </TouchableOpacity>

      <Text style={styles.text}>likes ({numberOfLikes})</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    fontFamily: "nunitoSans-regular",
    fontSize: 16,
    color: Colors.white,
    textTransform: "capitalize",
  },
});
