import React from "react";
import { StyleSheet, View } from "react-native";
import { Video } from "expo-av";

// import AppButton from "../AppButton";

export default function DisplayVideo() {
  const video = React.useRef(null);
  const secondVideo = React.useRef(null);
  // const [status, setStatus] = React.useState({});
  // const [statusSecondVideo, setStatusSecondVideo] = React.useState({});

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode="contain"
        // isLooping
        // onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      {/* <View style={styles.btnContainer}>
        <AppButton
          title="play from 5s"
          onPress={() => video.current.playFromPositionAsync(5000)}
        />
        <AppButton
          title={status.isLooping ? "set to not loop" : "set to loop"}
          onPress={() => video.current.setIsLoopingAsync(!status.isLooping)}
        />
      </View> */}

      <Video
        ref={secondVideo}
        style={styles.video}
        source={require("../../../assets/videos/trainer1.mp4")}
        useNativeControls
        resizeMode="contain"
        // isLooping
        // onPlaybackStatusUpdate={setStatusSecondVideo}
      />
      {/* <View style={styles.btnContainer}>
        <AppButton
          title="play from 50s"
          onPress={() => secondVideo.current.playFromPositionAsync(50000)}
        />
        <AppButton
          title={
            statusSecondVideo.isLooping ? "set to not loop" : "set to loop"
          }
          onPress={() =>
            secondVideo.current.setIsLoopingAsync(!statusSecondVideo.isLooping)
          }
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  video: {
    flex: 1,
    alignSelf: "stretch",
  },
});
