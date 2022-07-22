import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

interface ToDoProps {
  todo: TodoModel;
  handleDelete: () => {};
  handleEdit: () => {};
}

const ToDo: React.FC<ToDoProps> = props => {
  const handleDelete = () => {
    props.handleDelete(props.todo.id);
  };

  const handleEdit = () => {
    props.handleEdit(props.todo.id);
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

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 30,
    backgroundColor: '#353839',
    borderRadius: 10,
  },

  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  content: {
    marginTop: 10,
    color: 'white',
    fontSize: 16,
  },

  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  update: {
    margin: 10,
    fontSize: 25,
    padding: 5,
    backgroundColor: 'yellow',
    color: 'white',
    borderRadius: 12.5,
  },

  trash: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 25,
    padding: 5,
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 12.5,
  },
});

export default ToDo;
