import React from "react";
import { StyleSheet, View } from "react-native";
import { Video } from "expo-av";

export default function DisplayVideo({ videoSource }) {
  const video = React.useRef(null);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={videoSource}
        useNativeControls
        resizeMode="cover"
        isLooping //maybe to delete later
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 430,
    backgroundColor: "black",
    marginBottom: 8,
  },
  video: {
    flex: 1,
  },
});
