import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, TextInput, View } from "react-native";
import styles from "../styles";
import Row from "./Row";
export default function Input(props) {
  return (
    <View style={styles.textInputContainer}>
            
      <Row>
        <Text style={styles.textInputLabel}>{props.label}</Text>

        <TextInput style={styles.textInput} {...props} />
      </Row>
          
    </View>
  );
}
Input.propTypes = {
  label: PropTypes.string,
};
