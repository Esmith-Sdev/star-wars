import { View, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";

import styles from "../styles";
import Row from "../components/Row";
import Column from "../components/Column";
import Box from "../components/Box";

export default function Films() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    fetchStarships();
  }, []);

  async function fetchStarships() {
    try {
      const res = await fetch("https://www.swapi.tech/api/starships");
      const data = await res.json();
      console.log(data);
      setStarships(data.results);
    } catch (err) {
      console.log("Fetch Starships Failed", err);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Starships</Text>
      <FlatList
        data={starships}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <Text style={styles.boxText}>{item.name}</Text>
        )}
      />
    </View>
  );
}
