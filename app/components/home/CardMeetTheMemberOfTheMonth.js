// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// import colors from "../../config/colors";
// import AnimatedImage from "./AnimatedImage";

// export default function CardMeetTheMemberOfTheMonth() {
//   const images = [
//     {
//       id: "topLeft",
//       image: require("../../../assets/person-1.jpg"),
//     },
//     {
//       id: "buttomCenter",
//       image: require("../../../assets/person2.jpg"),
//     },
//     {
//       id: "topRight",
//       image: require("../../../assets/person3.jpg"),
//     },
//     {
//       id: "bottomLeft",
//       image: require("../../../assets/person4.jpg"),
//     },
//     {
//       id: "bottomRight",
//       image: require("../../../assets/person5.jpg"),
//     },
//   ];

//   return (
//     <>
//       <Text style={styles.titleText}>whats new</Text>
//       <Text style={styles.subTitleText}>
//         Checkout the lates news on MATE-UP
//       </Text>
//       <View style={styles.container}>
//         <Text style={styles.textStyle}>Meet The Member Of The Month</Text>
//         {images.map(({ id, image }) => (
//           <AnimatedImage
//             key={id}
//             style={[styles.image, getPositionStyle(id)]}
//             source={image}
//           />
//         ))}
//       </View>
//     </>
//   );
// }

// const getPositionStyle = (id) => {
//   switch (id) {
//     case "topLeft":
//       return styles.topLeft;
//     case "buttomCenter":
//       return styles.buttomCenter;
//     case "topRight":
//       return styles.topRight;
//     case "bottomLeft":
//       return styles.bottomLeft;
//     case "bottomRight":
//       return styles.bottomRight;
//     default:
//       return {};
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     height: 416,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: colors.orangeSecondary,
//     // marginTop: 76,
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
//     fontSize: 30,
//     fontFamily: "montserrat-black",
//     color: colors.white,
//     textTransform: "uppercase",
//     textAlign: "center",
//   },
//   titleText: {
//     fontFamily: "montserrat-black",
//     fontSize: 26,
//     color: colors.orangePrimary,
//     marginBottom: 10,
//     textTransform: "uppercase",
//     paddingLeft: 16,
//   },
//   subTitleText: {
//     fontFamily: "nunitoSans-regular",
//     fontSize: 14,
//     color: colors.white,
//     marginBottom: 32,
//     paddingLeft: 16,
//   },
// });

import { StyleSheet, Text, View } from "react-native";
import React from "react";

import colors from "../../config/colors";
import AnimatedImage from "./AnimatedImage";

export default function CardMeetTheMemberOfTheMonth() {
  const images = [
    {
      id: "topLeft", // Unique identifier for the image position
      images: [
        require("../../../assets/person-1.jpg"),
        require("../../../assets/person2.jpg"),
        require("../../../assets/person3.jpg"),
      ],
    },
    {
      id: "buttomCenter",
      images: [
        require("../../../assets/person2.jpg"),
        require("../../../assets/person3.jpg"),
        require("../../../assets/person4.jpg"),
      ],
    },
    {
      id: "topRight",
      images: [
        require("../../../assets/person3.jpg"),
        require("../../../assets/person4.jpg"),
        require("../../../assets/person5.jpg"),
      ],
    },
    {
      id: "bottomLeft",
      images: [
        require("../../../assets/person4.jpg"),
        require("../../../assets/person5.jpg"),
        require("../../../assets/person-1.jpg"),
      ],
    },
    {
      id: "bottomRight",
      images: [
        require("../../../assets/person5.jpg"),
        require("../../../assets/person4.jpg"),
        require("../../../assets/person3.jpg"),
      ],
    },
  ];

  return (
    <>
      <Text style={styles.titleText}>whats new</Text>
      <Text style={styles.subTitleText}>
        Checkout the latest news on MATE-UP
      </Text>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Meet The Member Of The Month</Text>
        {images.map(({ id, images }) => (
          <AnimatedImage
            key={id}
            style={[styles.image, getPositionStyle(id)]} // Apply style and position based on id
            images={images}
          />
        ))}
      </View>
    </>
  );
}

const getPositionStyle = (id) => {
  // Function to get the position style based on id
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
    backgroundColor: colors.orangeSecondary,
    // marginTop: 76,
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
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
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
    color: colors.white,
    textTransform: "uppercase",
    textAlign: "center",
  },
  titleText: {
    fontFamily: "montserrat-black",
    fontSize: 26,
    color: colors.orangePrimary,
    marginBottom: 0,
    textTransform: "uppercase",
    paddingLeft: 16,
  },
  subTitleText: {
    fontFamily: "nunitoSans-regular",
    fontSize: 16,
    color: colors.white,
    marginBottom: 10,
    paddingLeft: 16,
  },
});
