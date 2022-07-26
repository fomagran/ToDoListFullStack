import React, {useState, useEffect} from 'react';
import {Alert, FlatList, Pressable, Text, View} from 'react-native';
import ToDo from '../Components/Todo';
import Icon from 'react-native-vector-icons/Fontisto';
import AddModal from '../Components/AddModal';
import {styles} from '../Styles/TodoListStyles';
import Axios from 'axios';

const TodoList = () => {
  /** Properties  */
  const [todos, setTodos] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [todo, setTodo] = useState<TodoModel>({
    author: '',
    title: '',
    content: '',
    priority: -1,
  });
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    getTodos();
  }, []);

  /** Functions  */

  const addTodo = (todo: TodoModel) => {
    Axios.post('http://192.168.111.34:3001/create', todo)
      .then(() => {
        console.log('success');
      })
      .catch(error => console.log(error));
  };

  const getTodos = () => {
    Axios.get('http://192.168.111.34:3001/todos')
      .then(res => {
        console.log(res.data);

        setTodos(res.data);
      })
      .catch(error => console.log(error));
  };

  const editTodo = (todo: TodoModel) => {
    Axios.put('http://192.168.111.34:3001/todos', todo)
      .then(res => {
        console.log('success', res.data);
      })
      .catch(error => console.log(error));
  };

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
      if (editIndex !== -1) {
        editTodo(todo);
        setEditIndex(-1);
      } else {
        addTodo(todo);
      }
      setModalVisible(false);
      getTodos();
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
