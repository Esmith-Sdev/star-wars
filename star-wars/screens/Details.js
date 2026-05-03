import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "expo-router";
import styles from "../styles";
export default function Details({ route }) {
  const { title, episode, producer, director, releaseDate } =
    route.params || "";
  const navigation = useNavigation();
  if (!route.params) {
    return (
      <View style={styles.detailsScreen}>
        <Text style={styles.detailsHeader}>No Film Selected</Text>
      </View>
    );
  }
  return (
    <View style={styles.detailsScreen}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.detailsHeader}>{title}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>Episode: {episode}</Text>
            <Text style={styles.detailsText}>Produced By: {producer}</Text>
            <Text style={styles.detailsText}>Directed By: {director}</Text>
            <Text style={styles.detailsText}>Release Date: {releaseDate}</Text>
          </View>
        </View>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.navigate("Films")}
        >
          <Text style={styles.backButtonText}>Back To Films</Text>
        </Pressable>
      </View>
    </View>
  );
}
