import React, {useState, useEffect} from 'react';
import {Alert, FlatList, Pressable, Text, View} from 'react-native';
import ToDo from '../Components/Todo';
import Icon from 'react-native-vector-icons/Fontisto';
import AddModal from '../Components/AddModal';
import {styles} from '../Styles/TodoListStyles';
import {todos as todoDatas} from '../Datas/todos';

const TodoList = () => {
  /** Properties  */
  const [todos, setTodos] = useState(todoDatas);
  const [isModalVisible, setModalVisible] = useState(false);
  const [todo, setTodo] = useState<TodoModel>({
    author: '',
    title: '',
    content: '',
    priority: -1,
  });
  const [editIndex, setEditIndex] = useState(-1);

  /** Functions  */

  const showEditAlert = (index: number) => {
    Alert.alert(
      'Edit',
      'Do you want to edit?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed!'),
        },
        {
          text: 'OK',
          onPress: () => {
            setEditIndex(index);
            setTodo(todos[index]);
            setModalVisible(true);
          },
        },
      ],
      {cancelable: false},
    );
  };

  const showDeleteAlert = (index: number) => {
    Alert.alert(
      'Delete',
      'Do you want to delete?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed!'),
        },
        {
          text: 'OK',
          onPress: () => {
            todos.splice(index, 1);
            setTodos(todos);
          },
        },
      ],
      {cancelable: false},
    );
  };

  const handleEdit = (index: number) => {
    showEditAlert(index);
  };

  const handleDelete = (index: number) => {
    showDeleteAlert(index);
  };

  const handlePlus = () => {
    setTodo({author: '', title: '', content: '', priority: -1});
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleSubmit = (todo: TodoModel) => {
    if (
      todo.author == '' ||
      todo.title == '' ||
      todo.content == '' ||
      todo.priority == -1
    ) {
      Alert.alert('Please fill in all the required fields!');
    } else {
      let newTodos = todos;
      if (editIndex !== -1) {
        newTodos[editIndex] = todo;
        setEditIndex(-1);
      } else {
        newTodos.push(todo);
      }
      setTodos(newTodos);
      setModalVisible(false);
    }
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={{marginLeft: 20, fontSize: 25, fontWeight: 'bold'}}>
          To Do List
        </Text>
        <Pressable onPress={() => handlePlus()}>
          <Icon name="plus-a" style={styles.plus} />
        </Pressable>
      </View>
      <AddModal
        isModalVisible={isModalVisible}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        todo={todo}></AddModal>
      <FlatList
        style={styles.list}
        contentContainerStyle={{paddingBottom: 50}}
        data={todos}
        keyExtractor={item => item.author}
        renderItem={({item, index}) => {
          return (
            <ToDo
              index={index}
              todo={item}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        }}
      />
    </View>
  );
};

export default TodoList;
