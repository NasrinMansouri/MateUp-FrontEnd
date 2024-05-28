import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) {
      return (
        <View>
          <Text style={styles.error}>loading...</Text>
          {console.log("error:", response.problem, response.data)}
        </View>
      );
    } else {
      setData(response.data);
    }
  };

  return { data, loading, request };
};

const styles = StyleSheet.create({
  error: {
    color: colors.orangePrimary,
    fontFamily: "montserrat-black",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    fontSize: 16,
  },
});

// import { useState } from "react";

// export default useApi = (apiFunc) => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const request = async (...args) => {
//     setLoading(true);
//     const response = await apiFunc(...args);
//     setLoading(false);

//     if (!response.ok) return setError(true);

//     setError(false);
//     setData(response.data);
//   };

//   return { data, error, loading, request };
// };
