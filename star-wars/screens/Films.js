import { View, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import styles from "../styles";
import Row from "../components/Row";
import Column from "../components/Column";
import Box from "../components/Box";

export default function Films() {
  const [films, setFilms] = useState([]);

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
      <Text style={styles.headerText}>Films</Text>
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
