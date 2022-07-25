import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {styles} from '../Styles/TodoStyles';

interface ToDoProps {
  index: number;
  todo: TodoModel;
  handleDelete: () => {};
  handleEdit: () => {};
}

const ToDo: React.FC<ToDoProps> = props => {
  const handleDelete = () => {
    props.handleDelete(props.index);
  };

  const handleEdit = () => {
    props.handleEdit(props.index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {props.todo.title} - {props.todo.author}
      </Text>
      <Text style={styles.content}>{props.todo.content}</Text>
      <View style={styles.footer}>
        <Pressable onPress={handleEdit}>
          <Icon style={styles.update} name="surgical-knife"></Icon>
        </Pressable>
        <Pressable onPress={handleDelete}>
          <Icon style={styles.trash} name="trash"></Icon>
        </Pressable>
      </View>
    </View>
  );
};

export default ToDo;
