import React, { useState } from "react";
import { Pressable, StyleSheet, View, Animated } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../../config/colors";

export default function Like() {
  const [liked, setLiked] = useState(false);
  const [scaleValue] = useState(new Animated.Value(1)); // Initial scale value

  const handleLike = () => {
    setLiked(!liked);

    // Applying animation
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2, // Scale up
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.spring(scaleValue, {
        toValue: 1, // Scale down
        friction: 4,
        tension: 30,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleLike}>
        <Animated.View
          style={[styles.iconContainer, { transform: [{ scale: scaleValue }] }]}
        >
          <MaterialCommunityIcons
            name={liked ? "heart" : "heart-outline"}
            size={24}
            color={liked ? "red" : Colors.white}
          />
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  iconContainer: {
    alignItems: "center", // Center the icon
    justifyContent: "center", // Center the icon
  },
});
