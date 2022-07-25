import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Modal,
} from 'react-native';
import ToDo from '../Components/Todo';
import Icon from 'react-native-vector-icons/Fontisto';
import AddModal from '../Components/AddModal';

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
            console.log('Edit!');
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
        handleClose={handleClose}></AddModal>
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

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
  },
  list: {
    marginBottom: 100,
  },
  plus: {
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 12.5,
  },
});

export default TodoList;
