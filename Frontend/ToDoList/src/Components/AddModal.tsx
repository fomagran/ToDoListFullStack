import React, {useState, useEffect, useRef} from 'react';
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
  nextIndex: number;
  handleClose: () => {};
  handleSubmit: () => {};
}

const AddModal: React.FC<AddModalProps> = props => {
  const [todo, setTodo] = useState<TodoModel>({
    id: props.nextIndex,
    author: '',
    title: '',
    content: '',
    priority: -1,
  });

  const handleInputChange = (key: string, value: string | number) => {
    setTodo(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

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
          <TextInput
            onChangeText={text => {
              handleInputChange('author', text);
            }}
            style={styles.input}
            placeholder="author"></TextInput>
          <TextInput
            style={styles.input}
            placeholder="title"
            onChangeText={text => {
              handleInputChange('title', text);
            }}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="content"
            onChangeText={text => {
              handleInputChange('content', text);
            }}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="priority"
            onChangeText={text => {
              handleInputChange('priority', Number(text));
            }}></TextInput>
          <View style={styles.closeContainer}>
            <Pressable
              onPress={() => {
                props.handleSubmit(todo);
              }}>
              <Text style={styles.button}> Submit </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                props.handleClose();
              }}>
              <Text style={styles.button}> Close </Text>
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
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  button: {
    width: 100,
    height: 50,
    backgroundColor: 'black',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
