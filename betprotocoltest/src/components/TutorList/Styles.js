import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '97%',
    marginTop: height * 0.02,
  },
});

export default styles;
