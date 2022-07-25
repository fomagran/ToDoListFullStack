import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
