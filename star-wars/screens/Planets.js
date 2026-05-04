import { View, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import styles from "../styles";
import Row from "../components/Row";
import Column from "../components/Column";
import Box from "../components/Box";
import ConfirmationModal from "../components/ConfirmationModal";
import Input from "../components/Input";
import { Platform } from "react-native";
import Swipeable from "../components/Swipeable";
import LazyImage from "../components/LazyImage";
import { ActivityIndicator } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const [submittedText, setSubmittedText] = useState("");
  const [changedText, setChangedText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState();
  useEffect(() => {
    fetchPlanets();
  }, []);
  async function fetchPlanets() {
    try {
      setLoading(true);
      const res = await fetch("https://www.swapi.tech/api/planets");
      const data = await res.json();
      console.log(data);
      setPlanets(data.results);
    } catch (err) {
      console.log("Failed to Fetch Planets", err);
    } finally {
      setLoading(false);
    }
  }
  const filteredPlanets = planets.filter((planet) =>
    planet.name.toLowerCase().includes((changedText || "").toLowerCase()),
  );
  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      enableOnAndroid
      extraScrollHeight={200}
      nestedScrollEnabled={true}
    >
      <View style={styles.screen}>
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
          style={styles.searchBox}
        />
        {!loading ? (
          <FlatList
            data={filteredPlanets}
            style={styles.list}
            ListEmptyComponent={
              !loading && changedText ? (
                <Text style={{ textAlign: "center" }}>No Results Found</Text>
              ) : null
            }
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
        ) : (
          <View style={styles.screen}>
            <View style={styles.container}>
              <ActivityIndicator size="large" animating={loading} />
            </View>
          </View>
        )}
      </View>
    </KeyboardAwareScrollView>
  );
}
