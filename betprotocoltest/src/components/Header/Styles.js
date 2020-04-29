import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    height: height * 0.25,
  },
  firstRow: {
    flexDirection: 'row',
    height: height * 0.079,
    width: '100%',
  },
  titleContainer: {
    width: '64%',
    paddingLeft: '2%',
    paddingTop: '3%',
  },
  title: {
    fontFamily: 'Avenir-Heavy',
    color: '#253141',
    fontWeight: '900',
    fontSize: height * 0.013,
  },
  labelWithButtonContainer: {
    width: '36%',
    paddingTop: '3%',
    flexDirection: 'row',
  },
  label: {
    fontFamily: 'Avenir-Medium',
    color: '#253141',
    marginRight: '6%',
    marginTop: '3%',
    fontSize: height * 0.013,
  },
  secondRow: {
    height: height * 0.17,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionTitle: {
    color: '#253141',
    fontFamily: 'Avenir-Heavy',
    fontSize: 0.021 * height,
    textAlign: 'center',
  },
  description: {
    color: '#212B3A',
    fontFamily: 'Avenir-Light',
    fontSize: 0.012 * height,
    marginTop: '2%',
    width: '70%',
    textAlign: 'center',
  },
  getStartedButtonContainer: {
    marginTop: '5%',
  },
  getStartedButton: {
    backgroundColor: '#009C38',
    height: 0.03 * height,
    width: 0.172 * width,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  getStartedLabel: {
    fontFamily: 'Avenir-Light',
    fontSize: 0.01 * height,
    color: 'white',
  },
});

export default styles;
