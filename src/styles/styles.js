import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  wrapper: {
    width: width * 0.9,
  },
  button: {
    height: 50,
    width: width * 0.7,
    backgroundColor: '#e9e9e9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  card: {
    height: height * 0.2,
    width: width * 0.9,
    elevation: 5,
    backgroundColor: '#e9e9e9',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 30,
  },
  question: {
    fontSize: 18,
  },
  answer: {
    fontSize: 22,
    marginBottom: 15,
  },
  fileUpload: {
    height: height * 0.6,
    width: width * 0.9,
  },
  status: {
    position: 'absolute',
    bottom: 0,
    marginLeft: 10,
    marginBottom: 10,
  },
});
