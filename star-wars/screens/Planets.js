import { View, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import styles from "../styles";
import Row from "../components/Row";
import Column from "../components/Column";
import Box from "../components/Box";

export default function Planets() {
  const [planets, setPlanets] = useState([]);

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
