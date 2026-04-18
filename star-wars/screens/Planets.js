import { View, Text, FlatList, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import styles from "../styles";
import Row from "../components/Row";
import Column from "../components/Column";
import Box from "../components/Box";
import ConfirmationModal from "../components/ConfirmationModal";
import Input from "../components/Input";
import Swipeable from "../components/Swipeable";
import LazyImage from "../components/LazyImage";

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
      <LazyImage
        source={{
          uri: "https://i.imgur.com/WT0i7ns.png",
        }}
        style={{ width: "100%", height: 300 }}
      />
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
        style={{ height: 300 }}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <Swipeable
            name={item.name}
            onSwipe={() => {
              setSubmittedText(item.name);
              setShowModal(true);
            }}
          />
        )}
      />
    </View>
  );
}
