import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
