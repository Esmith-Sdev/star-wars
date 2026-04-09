import { Modal, View, Text } from "react-native";
import styles from "../styles";
import Column from "./Column";
export default function ConfirmationModal(props) {
  return (
    <Modal {...props}>
            
      <View style={styles.modalContainer}>
                
        <View style={styles.modalInner}>
                    
          <Column>
            <Text style={styles.modalText}>You Searched For:</Text>
            <Text style={styles.textInputModal}>{props.children}</Text>
          </Column>
                    
          <Text style={styles.modalButton} onPress={props.onPressConfirm}>
                        Yep           
          </Text>
                    
          <Text style={styles.modalButton} onPress={props.onPressCancel}>
                        Nope           
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
