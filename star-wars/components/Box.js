import { PropTypes } from "prop-types";
import { View, Text } from "react-native";
import styles from "../styles";
export default function Box({ children }) {
  return <View style={styles.box}>{children}</View>;
}
Box.propTypes = {
  children: PropTypes.node.isRequired,
};
