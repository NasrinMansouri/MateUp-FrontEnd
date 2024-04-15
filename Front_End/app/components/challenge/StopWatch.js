// import React, { useState, useEffect } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// import colors from "../../config/colors";
// import Screen from "../Screen";

// const StopwatchApp = () => {
//   // State variables to track stopwatch status and time
//   const [isRunning, setIsRunning] = useState(false); // Tracks whether the stopwatch is running or not
//   const [seconds, setSeconds] = useState(0); // Tracks seconds
//   const [minutes, setMinutes] = useState(0); // Tracks minutes
//   const [hours, setHours] = useState(0); // Tracks hours
//   const [activeButton, setActiveButton] = useState("start"); // Tracks the active button

//   // useEffect hook to handle stopwatch logic
//   useEffect(() => {
//     let interval = null;

//     // Check if stopwatch is running, and start the interval if true
//     if (isRunning) {
//       interval = setInterval(() => {
//         // Increment seconds
//         setSeconds((prevSeconds) => prevSeconds + 1);

//         // Check if seconds reached 59, reset seconds and increment minutes
//         if (seconds === 59) {
//           setSeconds(0);
//           setMinutes((prevMinutes) => prevMinutes + 1);
//         }

//         // Check if minutes and seconds both reached 59, reset both and increment hours
//         if (minutes === 59 && seconds === 59) {
//           setSeconds(0);
//           setMinutes(0);
//           setHours((prevHours) => prevHours + 1);
//         }
//       }, 1000); // Interval of 1000ms (1 second)
//     } else if (!isRunning && seconds !== 0) {
//       clearInterval(interval); // Clear interval if stopwatch is not running
//     }

//     return () => clearInterval(interval); // Cleanup function to clear interval on component unmount or when interval is no longer needed
//   }, [isRunning, seconds, minutes, hours]); // Dependency array to watch for changes in isRunning, seconds, minutes, and hours

//   // Function to start the stopwatch
//   const startStopwatch = () => {
//     setIsRunning(true);
//     setActiveButton("start");
//   };

//   // Function to stop the stopwatch
//   const stopStopwatch = () => {
//     setIsRunning(false);
//     setActiveButton("stop");
//   };

//   // Function to reset the stopwatch
//   const resetStopwatch = () => {
//     setIsRunning(false);
//     setSeconds(0);
//     setMinutes(0);
//     setHours(0);
//     setActiveButton("reset");
//   };

//   return (
//     <Screen>
//       <View style={styles.container}>
//         <View style={styles.headerContainer}>
//           <TouchableOpacity style={styles.closeButton}>
//             <Text style={styles.closeButtonText}>Close</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.saveButton}>
//             <Text style={styles.saveButtonText}>Save</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.timeContainer}>
//           <Text style={styles.time}>
//             {hours < 10 ? "0" + hours : hours}:
//             {minutes < 10 ? "0" + minutes : minutes}:
//             {seconds < 10 ? "0" + seconds : seconds}
//           </Text>
//         </View>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={[
//               styles.button,
//               activeButton === "start"
//                 ? {
//                     backgroundColor: colors.orangeSecondary,
//                     borderColor: colors.black,
//                   }
//                 : { borderColor: colors.green },
//             ]}
//             onPress={startStopwatch}
//           >
//             <Text
//               style={[
//                 styles.buttonText,
//                 activeButton === "start" && { color: colors.white },
//               ]}
//             >
//               Start
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.button,
//               activeButton === "stop"
//                 ? {
//                     backgroundColor: colors.orangeSecondary,
//                     borderColor: colors.black,
//                   }
//                 : { borderColor: colors.green },
//             ]}
//             onPress={stopStopwatch}
//           >
//             <Text
//               style={[
//                 styles.buttonText,
//                 activeButton === "stop" && { color: colors.white },
//               ]}
//             >
//               Stop
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.button,
//               activeButton === "reset"
//                 ? {
//                     backgroundColor: colors.orangeSecondary,
//                     borderColor: colors.black,
//                   }
//                 : { borderColor: colors.green },
//             ]}
//             onPress={resetStopwatch}
//           >
//             <Text
//               style={[
//                 styles.buttonText,
//                 activeButton === "reset" && { color: colors.white },
//               ]}
//             >
//               Reset
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Screen>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "space-between",
//   },
//   headerContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: 20,
//   },
//   // closeButton: {
//   //   position: "absolute",
//   //   top: 20,
//   //   left: 20,
//   //   zIndex: 1, // Ensure it's above other elements
//   // },
//   closeButtonText: {
//     color: colors.white,
//     fontSize: 16,
//     fontFamily: "montserrat-black",
//     marginLeft: 16,
//     // textDecorationLine: "underline",
//   },
//   // saveButton: {
//   //   position: "absolute",
//   //   top: 20,
//   //   right: 20,
//   //   zIndex: 1, // Ensure it's above other elements
//   // },
//   saveButtonText: {
//     color: colors.white,
//     fontSize: 16,
//     fontFamily: "montserrat-black",
//     marginRight: 16,
//     // textDecorationLine: "underline",
//   },
//   timeContainer: {
//     flex: 4,
//     justifyContent: "center",
//     alignItems: "center",
//     // backgroundColor: colors.orangePrimary,
//   },
//   time: {
//     fontSize: 48,
//     fontFamily: "montserrat-black",
//     color: colors.white,
//     textAlign: "center",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     // backgroundColor: colors.green,
//     flex: 1,
//     alignSelf: "center",
//   },
//   button: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     justifyContent: "center",
//     alignItems: "center",
//     marginHorizontal: 5,
//     borderWidth: 1,
//   },

//   buttonText: {
//     color: colors.white,
//     fontSize: 14,
//     fontFamily: "montserrat-black",
//     textTransform: "uppercase",
//   },
// });

// export default StopwatchApp;

import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";

import colors from "../../config/colors";
import Screen from "../Screen";

const StopwatchApp = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [activeButton, setActiveButton] = useState("start");
  const [startTime, setStartTime] = useState(null); // State variable to store the start time
  const [elapsedTime, setElapsedTime] = useState(0); // State variable to store the elapsed time
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);

        if (seconds === 59) {
          setSeconds(0);
          setMinutes((prevMinutes) => prevMinutes + 1);
        }

        if (minutes === 59 && seconds === 59) {
          setSeconds(0);
          setMinutes(0);
          setHours((prevHours) => prevHours + 1);
        }
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds, minutes, hours]);

  const startStopwatch = () => {
    setIsRunning(true);
    setActiveButton("start");
    setStartTime(Date.now()); // Update the start time when stopwatch starts
  };

  const stopStopwatch = () => {
    setIsRunning(false);
    setActiveButton("stop");
    calculateElapsedTime(); // Calculate the elapsed time when stopwatch stops
  };

  const calculateElapsedTime = () => {
    const endTime = Date.now();
    const elapsed = endTime - startTime;
    setElapsedTime(elapsed);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setActiveButton("reset");
    setElapsedTime(0);
  };

  const handleFinish = () => {
    console.log("Elapsed time:", elapsedTime); // Log the elapsed time
  };

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          {activeButton === "stop" && (
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => {
                handleFinish();
                handleModalOpen();
              }}
            >
              <Text style={styles.saveButtonText}>Finish</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>
            {hours < 10 ? "0" + hours : hours}:
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              activeButton === "start"
                ? {
                    backgroundColor: colors.orangeSecondary,
                    borderColor: colors.black,
                  }
                : { borderColor: colors.green },
            ]}
            onPress={startStopwatch}
          >
            <Text
              style={[
                styles.buttonText,
                activeButton === "start" && { color: colors.white },
              ]}
            >
              Start
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              activeButton === "stop"
                ? {
                    backgroundColor: colors.orangeSecondary,
                    borderColor: colors.black,
                  }
                : { borderColor: colors.green },
            ]}
            onPress={stopStopwatch}
          >
            <Text
              style={[
                styles.buttonText,
                activeButton === "stop" && { color: colors.white },
              ]}
            >
              Stop
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              activeButton === "reset"
                ? {
                    backgroundColor: colors.orangeSecondary,
                    borderColor: colors.black,
                  }
                : { borderColor: colors.green },
            ]}
            onPress={resetStopwatch}
          >
            <Text
              style={[
                styles.buttonText,
                activeButton === "reset" && { color: colors.white },
              ]}
            >
              Reset
            </Text>
          </TouchableOpacity>
        </View>
        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={handleModalClose}
            >
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </TouchableOpacity>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Workout Time: {hours}:{minutes}:{seconds}
              </Text>
            </View>
          </View>
        </Modal>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  closeButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "montserrat-black",
    marginLeft: 16,
  },
  saveButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "montserrat-black",
    marginRight: 16,
  },
  timeContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 48,
    fontFamily: "montserrat-black",
    color: colors.white,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    alignSelf: "center",
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderWidth: 1,
  },
  buttonText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "montserrat-black",
    textTransform: "uppercase",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalCloseButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1, // Ensure it's above the modal content
  },
  modalCloseButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "montserrat-black",
  },
  // modalContent: {
  //   backgroundColor: colors.white, // Background color white
  //   padding: 20,
  //   borderRadius: 10,
  //   elevation: 5, // Android shadow
  //   shadowColor: "#000", // iOS shadow
  //   marginTop: 50, // Top margin
  // },
  modalText: {
    fontSize: 16,
    fontFamily: "montserrat-black",
    color: colors.black,
  },
});

export default StopwatchApp;
