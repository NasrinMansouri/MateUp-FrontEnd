import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";

export default function UserImage({
  userImage,
  imageWidth,
  imageHeight,
  imageRadius,
  marginLeft,
  marginTop,
  marginBottom,
}) {
  // const [calculateWidth, setCalculateWidth] = useState(imageWidth);
  // const [calculateHeight, setCalculateHeight] = useState(imageHeight);

  // useEffect(() => {
  //   Image.getSize(userImage.uri, (width, height) => {
  //     const aspectRatio = width / height;
  //     if (aspectRatio > 1) {
  //       // image is landscape
  //       setCalculateWidth(imageWidth);
  //       setCalculateHeight(imageWidth / aspectRatio);
  //     } else {
  //       // image is portrait
  //       setCalculateWidth(imageHeight * aspectRatio);
  //       setCalculateHeight(imageHeight);
  //     }
  //   });
  // }, [userImage.uri, imageHeight, imageWidth]);
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={userImage}
        style={[
          styles.userImage,
          {
            width: imageWidth,
            height: imageHeight,
            borderRadius: imageRadius,
            marginLeft: marginLeft,
            marginTop: marginTop,
            marginBottom: marginBottom,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  userImage: {},
});
