import { Modal, View, Text } from "react-native";
import styles from "../styles";
import Column from "./Column";
export default function ConfirmationModal(props) {
  return (
    <Modal {...props}>
      <View style={styles.modalContainer}>
        <View style={styles.modalInner}>
          <Column>{props.children}</Column>

          <Text style={styles.modalButton} onPress={props.onPressConfirm}>
            Confirm
          </Text>

          <Text style={styles.modalButton} onPress={props.onPressCancel}>
            Back
          </Text>
        </View>
      </View>
    </Modal>
  );
}
ConfirmationModal.defaultProps = {
  transparent: true,
  onRequestClose: () => {},
};
