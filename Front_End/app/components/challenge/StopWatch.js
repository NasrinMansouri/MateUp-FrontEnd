// import React, { useState, useEffect } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";

// import colors from "../../config/colors";
// import Screen from "../Screen";

// const StopWatch = () => {
//   const [isRunning, setIsRunning] = useState(false);
//   const [seconds, setSeconds] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [activeButton, setActiveButton] = useState("start");
//   const [startTime, setStartTime] = useState(null); // State variable to store the start time
//   const [elapsedTime, setElapsedTime] = useState(0); // State variable to store the elapsed time
//   const [modalVisible, setModalVisible] = useState(false);

//   useEffect(() => {
//     let interval = null;

//     if (isRunning) {
//       interval = setInterval(() => {
//         setSeconds((prevSeconds) => prevSeconds + 1);

//         if (seconds === 59) {
//           setSeconds(0);
//           setMinutes((prevMinutes) => prevMinutes + 1);
//         }

//         if (minutes === 59 && seconds === 59) {
//           setSeconds(0);
//           setMinutes(0);
//           setHours((prevHours) => prevHours + 1);
//         }
//       }, 1000);
//     } else if (!isRunning && seconds !== 0) {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);
//   }, [isRunning, seconds, minutes, hours]);

//   const startStopwatch = () => {
//     setIsRunning(true);
//     setActiveButton("start");
//     setStartTime(Date.now()); // Update the start time when stopwatch starts
//   };

//   const stopStopwatch = () => {
//     setIsRunning(false);
//     setActiveButton("stop");
//     calculateElapsedTime(); // Calculate the elapsed time when stopwatch stops
//   };

//   //function to resume the stopwatch
//   const resumeStopwatch = () => {
//     setIsRunning(true);
//     setActiveButton("resume");
//     setStartTime(Date.now());
//     calculateElapsedTime();
//   };
//   const resetStopwatch = () => {
//     setIsRunning(false);
//     setSeconds(0);
//     setMinutes(0);
//     setHours(0);
//     setActiveButton("reset");
//     setElapsedTime(0);
//   };

//   const handleFinish = () => {
//     console.log("Elapsed time:", elapsedTime); // Log the elapsed time
//   };

//   const calculateElapsedTime = () => {
//     const endTime = Date.now();
//     const elapsed = endTime - startTime;
//     setElapsedTime(elapsed);
//   };

//   const handleModalOpen = () => {
//     setModalVisible(true);
//   };

//   const handleModalClose = () => {
//     setModalVisible(false);
//   };

//   const resumeAndCloseModal = () => {
//     resumeStopwatch();
//     handleModalClose();
//   };

//   return (
//     <Screen>
//       <View style={styles.container}>
//         <View style={styles.headerContainer}>
//           <TouchableOpacity style={styles.closeButton}>
//             <Text style={styles.closeButtonText}>Close</Text>
//           </TouchableOpacity>
//           {activeButton === "stop" && (
//             <TouchableOpacity
//               style={styles.saveButton}
//               onPress={() => {
//                 handleFinish();
//                 handleModalOpen();
//               }}
//             >
//               <Text style={styles.finishButton}>Finish</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//         <View style={styles.timeContainer}>
//           <Text style={styles.time}>
//             {hours < 10 ? "0" + hours : hours}:
//             {minutes < 10 ? "0" + minutes : minutes}:
//             {seconds < 10 ? "0" + seconds : seconds}
//           </Text>
//         </View>
//         <View style={styles.buttonContainer}>
//           {!isRunning && (
//             <TouchableOpacity
//               style={[
//                 styles.button,
//                 activeButton === "start"
//                   ? {
//                       backgroundColor: colors.orangeSecondary,
//                       borderColor: colors.black,
//                     }
//                   : { borderColor: colors.green },
//               ]}
//               onPress={startStopwatch}
//             >
//               <Text
//                 style={[
//                   styles.buttonText,
//                   activeButton === "start" && { color: colors.white },
//                 ]}
//               >
//                 Start
//               </Text>
//             </TouchableOpacity>
//           )}

//           {isRunning && (
//             <TouchableOpacity
//               style={[
//                 styles.button,
//                 activeButton === "stop"
//                   ? {
//                       backgroundColor: colors.orangeSecondary,
//                       borderColor: colors.black,
//                     }
//                   : { borderColor: colors.green },
//               ]}
//               onPress={stopStopwatch}
//             >
//               <Text
//                 style={[
//                   styles.buttonText,
//                   activeButton === "stop" && { color: colors.white },
//                 ]}
//               >
//                 Pause
//               </Text>
//             </TouchableOpacity>
//           )}
//           {!isRunning && (
//             <TouchableOpacity
//               style={[
//                 styles.button,
//                 activeButton === "reset"
//                   ? {
//                       backgroundColor: colors.orangeSecondary,
//                       borderColor: colors.black,
//                     }
//                   : { borderColor: colors.green },
//               ]}
//               onPress={resetStopwatch}
//             >
//               <Text
//                 style={[
//                   styles.buttonText,
//                   activeButton === "reset" && { color: colors.white },
//                 ]}
//               >
//                 Reset
//               </Text>
//             </TouchableOpacity>
//           )}
//         </View>
//         <Modal visible={modalVisible} animationType="slide">
//           <View style={styles.modalContainer}>
//             <TouchableOpacity
//               style={styles.modalResumeButton}
//               onPress={resumeAndCloseModal}
//             >
//               <Text style={styles.modalResumeButtonText}>Resume</Text>
//             </TouchableOpacity>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalText}>
//                 Workout Time: {hours}:{minutes}:{seconds}
//               </Text>
//             </View>
//           </View>
//         </Modal>
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
//   closeButtonText: {
//     color: colors.white,
//     fontSize: 16,
//     fontFamily: "montserrat-black",
//     marginLeft: 16,
//   },
//   finishButton: {
//     color: colors.orangePrimary,
//     fontSize: 16,
//     fontFamily: "montserrat-black",
//     marginRight: 16,
//   },
//   timeContainer: {
//     flex: 4,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   time: {
//     fontSize: 48,
//     fontFamily: "montserrat-black",
//     color: colors.orangePrimary,
//     textAlign: "center",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
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
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     // backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
//     backgroundColor: colors.blackBc,
//   },
//   modalResumeButton: {
//     position: "absolute",
//     top: 20,
//     left: 16,
//     zIndex: 1, // Ensure it's above the modal content
//   },
//   modalResumeButtonText: {
//     color: colors.white,
//     fontSize: 16,
//     fontFamily: "montserrat-black",
//   },
//   // modalContent: {
//   //   backgroundColor: colors.white, // Background color white
//   //   padding: 20,
//   //   borderRadius: 10,
//   //   elevation: 5, // Android shadow
//   //   shadowColor: "#000", // iOS shadow
//   //   marginTop: 50, // Top margin
//   // },
//   modalText: {
//     fontSize: 16,
//     fontFamily: "montserrat-black",
//     color: colors.white,
//   },
// });

// export default StopWatch;

import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";

import colors from "../../config/colors";
import Screen from "../Screen";

const StopWatch = () => {
  const [time, setTime] = useState(0); // Store the elapsed time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [activeButton, setActiveButton] = useState("start");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increment the elapsed time every second
      }, 1000);
    } else if (!isRunning) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
    setActiveButton("start");
  };

  const stopStopwatch = () => {
    setIsRunning(false);
    setActiveButton("stop");
  };

  //function to resume the stopwatch
  const resumeStopwatch = () => {
    setIsRunning(true);
    setActiveButton("resume");
  };
  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
    setActiveButton("reset");
  };

  const handleFinish = () => {
    console.log("Elapsed time:", time); // Log the elapsed time
  };

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const resumeAndCloseModal = () => {
    resumeStopwatch();
    handleModalClose();
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
    const seconds = timeInSeconds - hours * 3600 - minutes * 60;

    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
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
              <Text style={styles.finishButton}>Finish</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{formatTime(time)}</Text>
        </View>
        <View style={styles.buttonContainer}>
          {!isRunning && (
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
          )}

          {isRunning && (
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
                Pause
              </Text>
            </TouchableOpacity>
          )}
          {!isRunning && (
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
          )}
        </View>
        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.modalResumeButton}
              onPress={resumeAndCloseModal}
            >
              <Text style={styles.modalResumeButtonText}>Resume</Text>
            </TouchableOpacity>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Workout Time: {formatTime(time)}
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
  finishButton: {
    color: colors.orangePrimary,
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
    color: colors.orangePrimary,
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
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    backgroundColor: colors.blackBc,
  },
  modalResumeButton: {
    position: "absolute",
    top: 20,
    left: 16,
    zIndex: 1, // Ensure it's above the modal content
  },
  modalResumeButtonText: {
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
    color: colors.white,
  },
});

export default StopWatch;
