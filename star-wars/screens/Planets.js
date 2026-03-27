import { View, Text } from "react-native";
import styles from "../styles";
import Row from "../components/Row";
import Column from "../components/Column";
import Box from "../components/Box";

export default function Planets() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Planets</Text>
      <Row>
        <Column>
          <Box>
            <Text>Tatooine</Text>
          </Box>
        </Column>
        <Column>
          <Box>
            <Text>Coruscant</Text>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>
            <Text>Naboo</Text>
          </Box>
        </Column>
        <Column>
          <Box>
            <Text>Hoth</Text>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>
            <Text>Endor</Text>
          </Box>
        </Column>
        <Column>
          <Box>
            <Text>Mustafar</Text>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>
            <Text>Kamino</Text>
          </Box>
        </Column>
        <Column>
          <Box>
            <Text>Geonosis</Text>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>
            <Text>Dagobah</Text>
          </Box>
        </Column>
        <Column>
          <Box>
            <Text>Alderaan</Text>
          </Box>
        </Column>
      </Row>
    </View>
  );
}
