import { View, Text } from "react-native";
import styles from "../styles";
import Row from "../components/Row";
import Column from "../components/Column";
import Box from "../components/Box";

export default function Spaceships() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Spaceships</Text>
      <Row>
        <Column>
          <Box>
            <Text>Millennium Falcon</Text>
          </Box>
        </Column>
        <Column>
          <Box>
            <Text>X-Wing Fighter</Text>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>
            <Text>TIE Fighter</Text>
          </Box>
        </Column>
        <Column>
          <Box>
            <Text>Star Destroyer</Text>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>
            <Text>Death Star</Text>
          </Box>
        </Column>
        <Column>
          <Box>
            <Text>Slave I</Text>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>
            <Text>Y-Wing</Text>
          </Box>
        </Column>
        <Column>
          <Box>
            <Text>A-Wing</Text>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>
            <Text>Executor</Text>
          </Box>
        </Column>
        <Column>
          <Box>
            <Text>Razor Crest</Text>
          </Box>
        </Column>
      </Row>
    </View>
  );
}
