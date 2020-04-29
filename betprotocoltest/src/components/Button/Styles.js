import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    borderWidth: 0.5,
    borderColor: '#253141',
    height: height * 0.03,
    width: width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  label: {
    fontSize: height * 0.013,
    fontFamily: 'Avenir-Medium',
    color: '#212B3A',
  },
});

export default styles;
