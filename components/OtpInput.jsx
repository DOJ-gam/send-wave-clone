import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constant/colors";

const OtpInput = ({ maxLength = 7, number, showPlainPin = false }) => {
  const numLengthArray = new Array(maxLength).fill(0); //fill indexes with 0

  return (
    <View style={styles.container}>
      {numLengthArray.map((_value, index) => (
        <View
          style={[styles.input, { borderBottomWidth: showPlainPin ? 2 : 0 }]}
          key={index}
        >
          {showPlainPin ? (
            <Text style={styles.text}>{number ? number[index] : ""}</Text>
          ) : number && number[index] ? (
            <View style={styles.dot} />
          ) : (
            <View style={styles.lightDot} />
          )}
        </View>
      ))}
    </View>
  );
};

export default OtpInput;

const styles = StyleSheet.create({
  container: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: {
    minWidth: "15%",
    minHeight: 55,
    padding: 12,
    // borderColor: COLORS.primary,
    borderColor: "#ccc",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  dot: {
    height: 20,
    width: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
  },
  lightDot: {
    height: 20,
    width: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    opacity: 0.3,
  },
});
