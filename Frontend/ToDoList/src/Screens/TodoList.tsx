import React, {useState} from 'react';
import {Alert, FlatList, Pressable, Text, View} from 'react-native';
import ToDo from '../Components/Todo';
import Icon from 'react-native-vector-icons/Fontisto';
import AddModal from '../Components/AddModal';
import {styles} from '../Styles/TodoListStyles';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      author: 'foma',
      title: '하이',
      content: '안녕하세요 저는 foma입니다.',
      priority: 0,
    },
    {
      id: 1,
      author: 'gran',
      title: '안녕',
      content: '안녕하세요 저는 gran입니다',
      priority: 1,
    },
    {
      id: 2,
      author: 'kalid',
      title: '헬로',
      content: '안녕하세요 저는 kalid입니다',
      priority: 2,
    },
    {
      id: 3,
      author: 'young',
      title: '굿바이',
      content: '안녕하세요 저는 young입니다',
      priority: 3,
    },
    {
      id: 4,
      author: 'hoon',
      title: '헤이',
      content: '안녕하세요 저는 훈입니다',
      priority: 4,
    },
    {
      id: 5,
      author: 'asfd',
      title: '쥐쥐',
      content: '안녕하세요 저는 afsd입니다',
      priority: 5,
    },
  ]);

  const [isModalVisible, setModalVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

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
        todo={editIndex !== -1 ? todos[editIndex] : undefined}
        index={setEditIndex == -1 ? todos.length : editIndex}></AddModal>
      <FlatList
        style={styles.list}
        contentContainerStyle={{paddingBottom: 50}}
        data={todos}
        keyExtractor={item => String(item.id)}
        renderItem={({item, index}) => {
          return (
            <ToDo
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
