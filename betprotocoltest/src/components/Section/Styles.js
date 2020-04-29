import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingTop: height * 0.06,
  },
  title: {
    fontFamily: 'Avenir-Medium',
    color: '#212B3A',
    fontSize: height * 0.02,
    textAlign: 'center',
  },
  description: {
    color: '#212B3A',
    fontFamily: 'Avenir-Medium',
    fontSize: height * 0.011,
    width: 0.8 * width,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: height * 0.015,
  },
  menuContainer: {
    flexDirection: 'row',
    marginTop: height * 0.06,
    paddingLeft: '3%',
  },
  filterLabel: {
    fontSize: 0.01 * height,
    fontFamily: 'Avenir-Medium',
    marginTop: height * 0.007,
    marginRight: '2%',
  },
  filterButton: {
    backgroundColor: '#DADADA',
    borderWidth: 0.5,
    borderColor: '#BDBDBD',
    height: height * 0.03,
    width: width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1,
  },
  filterButtonActive: {
    backgroundColor: '#009C38',
    borderWidth: 0.5,
    borderColor: '#BDBDBD',
    height: height * 0.03,
    width: width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1,
  },
  menuButtonLabel: {
    fontSize: height * 0.013,
    fontFamily: 'Avenir-Medium',
    color: '#212B3A',
  },
  menuButtonLabelActive: {
    fontSize: height * 0.013,
    fontFamily: 'Avenir-Medium',
    color: '#FFFFFF',
  },
  sortLabel: {
    fontSize: 0.01 * height,
    fontFamily: 'Avenir-Medium',
    marginTop: height * 0.007,
    marginRight: '2%',
    marginLeft: '4%',
  },
  sortButton: {
    backgroundColor: '#DADADA',
    borderWidth: 0.5,
    borderColor: '#BDBDBD',
    height: height * 0.03,
    width: width * 0.13,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1,
  },
  sortButtonActive: {
    backgroundColor: '#009C38',
    borderWidth: 0.5,
    borderColor: '#BDBDBD',
    height: height * 0.03,
    width: width * 0.13,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1,
  },
  lineBreak: {
    borderBottomWidth: 1,
    borderColor: '#D8D8D8',
    marginTop: height * 0.03,
    width: '93%',
    alignSelf: 'center',
  },
});

export default styles;
