import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import DisplayVideo from "./DisplayVideo";

export default function GalleryDisplayVideos({ videos }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {videos.map((video, id) => (
          <DisplayVideo key={id} videoSource={video.source} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
