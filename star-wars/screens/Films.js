import { View, Text } from "react-native";
import styles from "../styles";
import Row from "../components/Row";
import Column from "../components/Column";
import Box from "../components/Box";
export default function Films() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Films</Text>
      <Row>
        <Column>
          <Box>
            <Text>Star Wars: Episode IV – A New Hope</Text>
          </Box>
        </Column>
        <Column>
          <Box>
            <Text>Star Wars: Episode V – The Empire Strikes Back</Text>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>
            <Text>Star Wars: Episode VI – Return of the Jedi</Text>
          </Box>
        </Column>
        <Column>
          <Box>
            <Text>Star Wars: Episode I – The Phantom Menace</Text>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>
            <Text>Star Wars: Episode II – Attack of the Clones</Text>
          </Box>
        </Column>
        <Column>
          <Box>
            <Text>Star Wars: Episode III – Revenge of the Sith</Text>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>
            <Text>Star Wars: Episode VII – The Force Awakens</Text>
          </Box>
        </Column>
        <Column>
          <Box>
            <Text>Star Wars: Episode VIII – The Last Jedi</Text>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>
            <Text>Star Wars: Episode IX – The Rise of Skywalker</Text>
          </Box>
        </Column>
        <Column>
          <Box>
            <Text>Star Wars: Episode III – Revenge of the Sith</Text>
          </Box>
        </Column>
      </Row>
    </View>
  );
}
