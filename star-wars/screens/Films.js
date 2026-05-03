import { View, Text, FlatList, TextInput, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import styles from "../styles";
import Row from "../components/Row";
import Column from "../components/Column";
import Box from "../components/Box";
import ConfirmationModal from "../components/ConfirmationModal";
import PropTypes from "prop-types";
import Input from "../components/Input";
import Swipeable from "../components/Swipeable";
import LazyImage from "../components/LazyImage";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
export default function Films() {
  const [films, setFilms] = useState([]);
  const [submittedText, setSubmittedText] = useState("");
  const [changedText, setChangedText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  const [loading, setLoading] = useState();
  useEffect(() => {
    fetchFilms();
  }, []);
  async function fetchFilms() {
    try {
      setLoading(true);
      const res = await fetch("https://www.swapi.tech/api/films");
      const data = await res.json();
      console.log(data);
      setFilms(data.result);
    } catch (err) {
      console.log("Failed to Fetch Films", err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <View style={styles.screen}>
      <ConfirmationModal
        visible={showModal}
        onPressConfirm={() => setShowModal(false)}
        onPressCancel={() => setShowModal(false)}
      >
        <Text>{submittedText}</Text>
      </ConfirmationModal>
      <LazyImage
        source={{
          uri: "https://i.imgur.com/WT0i7ns.png",
        }}
        style={{ width: "100%", height: 300 }}
      />
      <Text style={styles.headerText}>Films</Text>
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
      {!loading ? (
        <FlatList
          style={{ height: 100 }}
          data={films}
          keyExtractor={(item) => item.uid}
          renderItem={({ item }) => (
            <Swipeable
              name={item.properties.title}
              onSwipe={() => {
                navigation.navigate("Details", {
                  title: item.properties.title,
                  episode: item.properties.episode_id,
                  director: item.properties.director,
                  producer: item.properties.producer,
                  releaseDate: item.properties.release_date,
                });
              }}
            />
          )}
        />
      ) : (
        <View style={styles.screen}>
          <View style={styles.container}>
            <ActivityIndicator size="large" animating={loading} />
          </View>
        </View>
      )}
    </View>
  );
}
