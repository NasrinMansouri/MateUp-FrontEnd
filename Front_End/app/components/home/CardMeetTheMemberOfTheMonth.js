// import { StyleSheet, Text, View, Image } from "react-native";
// import React from "react";

// import colors from "../config/colors";

// export default function MeetTheMemberOfTheMonth({ image }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.textStyle}>Meet The Member Of The Month</Text>
//       <Image style={[styles.image, styles.topLeft]} source={image} />
//       <Image style={[styles.image, styles.buttomCenter]} source={image} />
//       <Image style={[styles.image, styles.topRight]} source={image} />
//       <Image style={[styles.image, styles.bottomLeft]} source={image} />
//       <Image style={[styles.image, styles.bottomRight]} source={image} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     height: 416,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   image: {
//     position: "absolute",
//   },
//   topLeft: {
//     width: 52,
//     height: 52,
//     borderRadius: 52 / 2,
//     top: "25%",
//     left: "25%",
//   },
//   buttomCenter: {
//     width: 62,
//     height: 62,
//     borderRadius: 62 / 2,
//     top: "70%",
//     left: "40%",
//   },
//   topRight: {
//     width: 43,
//     height: 43,
//     borderRadius: 43 / 2,
//     top: "28%",
//     right: "20%",
//   },
//   bottomLeft: {
//     width: 22,
//     height: 22,
//     borderRadius: 22 / 2,
//     bottom: "30%",
//     left: "15%",
//   },
//   bottomRight: {
//     width: 33,
//     height: 33,
//     borderRadius: 33 / 2,
//     bottom: "30%",
//     right: "20%",
//   },
//   textStyle: {
//     fontSize: 24,
//     fontFamily: "montserrat-black",
//     color: colors.orangeSecondary,
//     textTransform: "uppercase",
//     textAlign: "center",
//   },
// });

//to be used in screen as:
{
  /* <MeetTheMemberOfTheMonth
          image={require("./assets/person-1.jpg")}
          image={require("./assets/person-1.jpg")}
          image={require("./assets/person-1.jpg")}
          image={require("./assets/person-1.jpg")}
          image={require("./assets/person-1.jpg")}
        /> */
}

import { StyleSheet, Text, View } from "react-native";
import React from "react";

import colors from "../../config/colors";
import AnimatedImage from "./AnimatedImage";

export default function CardMeetTheMemberOfTheMonth({ images }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Meet The Member Of The Month</Text>
      {images.map(({ id, image }) => (
        <AnimatedImage
          key={id}
          style={[styles.image, getPositionStyle(id)]}
          source={image}
        />
      ))}
    </View>
  );
}

const getPositionStyle = (id) => {
  switch (id) {
    case "topLeft":
      return styles.topLeft;
    case "buttomCenter":
      return styles.buttomCenter;
    case "topRight":
      return styles.topRight;
    case "bottomLeft":
      return styles.bottomLeft;
    case "bottomRight":
      return styles.bottomRight;
    default:
      return {};
  }
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 416,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "absolute",
  },
  topLeft: {
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
    top: "25%",
    left: "25%",
  },
  buttomCenter: {
    width: 62,
    height: 62,
    borderRadius: 62 / 2,
    top: "70%",
    left: "40%",
  },
  topRight: {
    width: 43,
    height: 43,
    borderRadius: 43 / 2,
    top: "28%",
    right: "20%",
  },
  bottomLeft: {
    width: 22,
    height: 22,
    borderRadius: 22 / 2,
    bottom: "30%",
    left: "15%",
  },
  bottomRight: {
    width: 33,
    height: 33,
    borderRadius: 33 / 2,
    bottom: "30%",
    right: "20%",
  },
  textStyle: {
    fontSize: 30,
    fontFamily: "montserrat-black",
    color: colors.orangePrimary,
    textTransform: "uppercase",
    textAlign: "center",
  },
});
