import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Video } from "expo-av";

export default function DisplayVideo({ videoSource }) {
  const video = React.useRef(null);

  useEffect(() => {
    return () => {
      if (video.current) {
        video.current.pauseAsync();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={videoSource}
        useNativeControls={true}
        resizeMode="cover"
        valume={4.0}
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

// isLooping //maybe to delete later
// isMuted={false}
// playsInSilenceModeAndroid={true}
// shouldPlay={true}
