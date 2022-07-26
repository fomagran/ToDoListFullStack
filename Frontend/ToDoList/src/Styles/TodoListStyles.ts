import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
  },
  list: {
    height: '80%',
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
  sortContainer: {
    padding: 20,
    backgroundColor: 'orange',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  sort: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 20,
  },
});
