import React from 'react';
import {
  View,
  Text,
  Pressable,
  Modal,
  TextInput,
  StyleSheet,
} from 'react-native';

interface AddModalProps {
  isModalVisible: boolean;
  handleClose: () => {};
}

const AddModal: React.FC<AddModalProps> = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      presentationStyle={'overFullScreen'}
      visible={props.isModalVisible}
      onRequestClose={() => {
        props.handleClose();
      }}>
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="name"></TextInput>
          <TextInput style={styles.input} placeholder="title"></TextInput>
          <TextInput style={styles.input} placeholder="content"></TextInput>
          <TextInput style={styles.input} placeholder="priority"></TextInput>
          <View style={styles.closeContainer}>
            <Pressable onPress={() => props.handleClose()}>
              <Text style={styles.close}> Close </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  form: {
    width: 300,
    height: 400,
    backgroundColor: 'white',
  },
  input: {
    margin: 10,
    borderRadius: 5,
    borderColor: 'gainsboro',
    borderWidth: 1,
  },

  closeContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  close: {
    width: 100,
    height: 50,
    backgroundColor: 'black',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
