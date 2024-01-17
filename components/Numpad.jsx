import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const NumberPad = ({ number, ...rest }) => {
  return (
    <TouchableOpacity style={styles.numPad} {...rest}>
      <Text style={styles.numPadText}>{number}</Text>
    </TouchableOpacity>
  );
};

const Numpad = ({ number, setNumber, maxLength = 7, topComponent }) => {
  const handleChange = (input) => {
    if (number?.length >= maxLength && input !== "-1") return;
    let val;
    if (input === "-1") {
      if (number?.length <= 0 || !number) {
        val = "";
      } else {
        val = number.toString().substring(0, number.length - 1);
      }
    } else if ((!number && input === "0") || (!number && input === "00")) {
      val = "";
    } else {
      val = number ? number + input : input;
    }

    setNumber(val);
  };
  return (
    <View style={styles.container}>
      {topComponent && topComponent}
      <View style={styles.row}>
        <NumberPad number={1} onPress={() => handleChange("1")} />
        <NumberPad number={2} onPress={() => handleChange("2")} />
        <NumberPad number={3} onPress={() => handleChange("3")} />
      </View>
      <View style={styles.row}>
        <NumberPad number={4} onPress={() => handleChange("4")} />
        <NumberPad number={5} onPress={() => handleChange("5")} />
        <NumberPad number={6} onPress={() => handleChange("6")} />
      </View>
      <View style={styles.row}>
        <NumberPad number={7} onPress={() => handleChange("7")} />
        <NumberPad number={8} onPress={() => handleChange("8")} />
        <NumberPad number={9} onPress={() => handleChange("9")} />
      </View>
      <View style={styles.row}>
        <NumberPad number={"\t\t\t\t\t"} disabled />
        <NumberPad number={0} onPress={() => handleChange("0")} />
        <NumberPad
          number={<Ionicons name="backspace" size={30} />}
          onPress={() => handleChange("-1")}
        />
      </View>
    </View>
  );
};

export default Numpad;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  numPad: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  numPadText: {
    fontSize: 32,
    color: "#777",
    fontWeight: "bold",
  },
});