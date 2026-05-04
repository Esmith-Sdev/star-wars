import { View, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import LazyImage from "../components/LazyImage";
import styles from "../styles";
import Swipeable from "../components/Swipeable";
import ConfirmationModal from "../components/ConfirmationModal";
import Input from "../components/Input";
import { ActivityIndicator } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export default function Starships() {
  const [starships, setStarships] = useState([]);
  const [submittedText, setSubmittedText] = useState("");
  const [changedText, setChangedText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState();
  useEffect(() => {
    fetchStarships();
  }, []);

  async function fetchStarships() {
    try {
      setLoading(true);
      const res = await fetch("https://www.swapi.tech/api/starships");
      const data = await res.json();
      console.log(data);
      setStarships(data.results);
    } catch (err) {
      console.log("Fetch Starships Failed", err);
    } finally {
      setLoading(false);
    }
  }
  const filteredStarships = starships.filter((starship) =>
    starship.name.toLowerCase().includes((changedText || "").toLowerCase()),
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
        <Text style={styles.headerText}>Starships</Text>
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
            data={filteredStarships}
            style={styles.list}
            keyExtractor={(item) => item.uid}
            ListEmptyComponent={
              !loading && changedText ? (
                <Text style={{ textAlign: "center" }}>No Results Found</Text>
              ) : null
            }
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
