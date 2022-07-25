import React, {useState} from 'react';
import {View, Text, Pressable, Modal, TextInput} from 'react-native';
import {styles} from '../Styles/AddModalStyles';

interface AddModalProps {
  isModalVisible: boolean;
  todo: TodoModel;
  index: number;
  handleClose: () => {};
  handleSubmit: () => {};
}

const AddModal: React.FC<AddModalProps> = props => {
  const initialValue: TodoModel =
    props.todo !== undefined
      ? props.todo
      : {
          id: props.index,
          author: '',
          title: '',
          content: '',
          priority: -1,
        };

  const [todo, setTodo] = useState<TodoModel>(initialValue);

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
            value={todo.author}
            onChangeText={text => {
              handleInputChange('author', text);
            }}
            style={styles.input}
            placeholder="author"></TextInput>
          <TextInput
            value={todo.title}
            style={styles.input}
            placeholder="title"
            onChangeText={text => {
              handleInputChange('title', text);
            }}></TextInput>
          <TextInput
            value={todo.content}
            style={styles.input}
            placeholder="content"
            onChangeText={text => {
              handleInputChange('content', text);
            }}></TextInput>
          <TextInput
            value={todo.priority}
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
