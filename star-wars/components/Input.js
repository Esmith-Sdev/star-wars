import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, TextInput, View } from "react-native";
import styles from "../styles";
import Row from "./Row";
export default function Input(props) {
  return (
    <View style={styles.textInputContainer}>
            
      <Text style={styles.textInputLabel}>{props.label}</Text>
      <TextInput style={styles.textInput} {...props} />
          
    </View>
  );
}
Input.propTypes = {
  label: PropTypes.string,
};
