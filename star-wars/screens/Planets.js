import { View, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import styles from "../styles";
import Row from "../components/Row";
import Column from "../components/Column";
import Box from "../components/Box";
import ConfirmationModal from "../components/ConfirmationModal";
import Input from "../components/Input";
export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const [submittedText, setSubmittedText] = useState("");
  const [changedText, setChangedText] = useState("");
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    fetchPlanets();
  }, []);
  async function fetchPlanets() {
    try {
      const res = await fetch("https://www.swapi.tech/api/planets");
      const data = await res.json();
      console.log(data);
      setPlanets(data.results);
    } catch (err) {
      console.log("Failed to Fetch Planets", err);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Planets</Text>
      <ConfirmationModal
        visible={showModal}
        onPressConfirm={() => setShowModal(false)}
        onPressCancel={() => setShowModal(false)}
      >
        <Text>{submittedText}</Text>
      </ConfirmationModal>

      <Input
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
        data={planets}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <Text style={styles.boxText}>{item.name}</Text>
        )}
      />
    </View>
  );
}
