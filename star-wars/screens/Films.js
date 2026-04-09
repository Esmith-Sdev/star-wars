import { View, Text, FlatList, TextInput } from "react-native";
import { useState, useEffect } from "react";
import styles from "../styles";
import Row from "../components/Row";
import Column from "../components/Column";
import Box from "../components/Box";
import ConfirmationModal from "../components/ConfirmationModal";
import PropTypes from "prop-types";
import Input from "../components/Input";
export default function Films() {
  const [films, setFilms] = useState([]);
  const [submittedText, setSubmittedText] = useState("");
  const [changedText, setChangedText] = useState("");
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    fetchFilms();
  }, []);
  async function fetchFilms() {
    try {
      const res = await fetch("https://www.swapi.tech/api/films");
      const data = await res.json();
      console.log(data);
      setFilms(data.result);
    } catch (err) {
      console.log("Failed to Fetch Films", err);
    }
  }
  return (
    <View style={styles.container}>
      <ConfirmationModal
        visible={showModal}
        onPressConfirm={() => setShowModal(false)}
        onPressCancel={() => setShowModal(false)}
      >
        <Text>{submittedText}</Text>
      </ConfirmationModal>
      <Text style={styles.headerText}>Films</Text>
      <Input
        label="Search:"
        onChangeText={(e) => {
          setChangedText(e);
        }}
        onSubmitEditing={(e) => {
          setSubmittedText(changedText);
          setShowModal(true);
        }}
        onFocus={() => {
          setChangedText("");
          setSubmittedText("");
        }}
      />
      <FlatList
        data={films}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <Text style={styles.boxText}>{item.properties.title}</Text>
        )}
      />
    </View>
  );
}
