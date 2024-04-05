import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../../config/colors";

const StopwatchApp = () => {
  // State variables to track stopwatch status and time
  const [isRunning, setIsRunning] = useState(false); // Tracks whether the stopwatch is running or not
  const [seconds, setSeconds] = useState(0); // Tracks seconds
  const [minutes, setMinutes] = useState(0); // Tracks minutes
  const [hours, setHours] = useState(0); // Tracks hours
  const [activeButton, setActiveButton] = useState("start"); // Tracks the active button

  // useEffect hook to handle stopwatch logic
  useEffect(() => {
    let interval = null;

    // Check if stopwatch is running, and start the interval if true
    if (isRunning) {
      interval = setInterval(() => {
        // Increment seconds
        setSeconds((prevSeconds) => prevSeconds + 1);

        // Check if seconds reached 59, reset seconds and increment minutes
        if (seconds === 59) {
          setSeconds(0);
          setMinutes((prevMinutes) => prevMinutes + 1);
        }

        // Check if minutes and seconds both reached 59, reset both and increment hours
        if (minutes === 59 && seconds === 59) {
          setSeconds(0);
          setMinutes(0);
          setHours((prevHours) => prevHours + 1);
        }
      }, 1000); // Interval of 1000ms (1 second)
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval); // Clear interval if stopwatch is not running
    }

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount or when interval is no longer needed
  }, [isRunning, seconds, minutes, hours]); // Dependency array to watch for changes in isRunning, seconds, minutes, and hours

  // Function to start the stopwatch
  const startStopwatch = () => {
    setIsRunning(true);
    setActiveButton("start");
  };

  // Function to stop the stopwatch
  const stopStopwatch = () => {
    setIsRunning(false);
    setActiveButton("stop");
  };

  // Function to reset the stopwatch
  const resetStopwatch = () => {
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setActiveButton("reset");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === "start"
              ? {
                  backgroundColor: colors.orangePrimary,
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
                  backgroundColor: colors.orangePrimary,
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
                  backgroundColor: colors.orangePrimary,
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 48,
    fontFamily: "montserrat-black",
    color: colors.white,
    marginTop: "50%",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 230,
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
});

export default StopwatchApp;

// import React, { useState, useEffect } from "react";
// import { View, Text, Button, StyleSheet } from "react-native";

// import colors from "../../config/colors";

// const StopwatchApp = () => {
//   // State variables to track stopwatch status and time
//   const [isRunning, setIsRunning] = useState(false); // Tracks whether the stopwatch is running or not
//   const [seconds, setSeconds] = useState(0); // Tracks seconds
//   const [minutes, setMinutes] = useState(0); // Tracks minutes
//   const [hours, setHours] = useState(0); // Tracks hours

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
//   };

//   // Function to stop the stopwatch
//   const stopStopwatch = () => {
//     setIsRunning(false);
//   };

//   // Function to reset the stopwatch
//   const resetStopwatch = () => {
//     setIsRunning(false);
//     setSeconds(0);
//     setMinutes(0);
//     setHours(0);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.time}>
//         {hours < 10 ? "0" + hours : hours}:
//         {minutes < 10 ? "0" + minutes : minutes}:
//         {seconds < 10 ? "0" + seconds : seconds}
//       </Text>
//       <View style={styles.buttonContainer}>
//         <Button title="Start" onPress={startStopwatch} style={styles.button} />
//         <Button title="Stop" onPress={stopStopwatch} />
//         <Button title="Reset" onPress={resetStopwatch} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   time: {
//     fontSize: 48,
//     fontFamily: "montserrat-black",
//     color: colors.white,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     marginTop: 20,
//   },
//   button: {
//     backgroundColor: colors.green,
//   },
// });

// export default StopwatchApp;
