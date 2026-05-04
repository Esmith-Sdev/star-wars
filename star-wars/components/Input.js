import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, TextInput, View } from "react-native";
import styles from "../styles";

export default function Input(props) {
  return (
    <View style={styles.textInputContainer}>
      <TextInput style={styles.textInput} {...props} placeholder="Search" />
    </View>
  );
}
