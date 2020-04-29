import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    width: 0.43 * width,
    borderRadius: 5,
    borderColor: 'white',
    margin: '2%',
    marginBottom: height * 0.02,
  },
  profilePicContainer: {
    width: '100%',
    height: 0.16 * height,
    backgroundColor: '#F2F2F2',
  },
  profilePic: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'stretch',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  detailsContainer: {
    width: '100%',
    padding: '5%',
    backgroundColor: '#DFDFDF',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  studentsAvatarView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  studentAvatar: {
    height: 20,
    width: 20,
    borderRadius: 10,
    margin: '2%',
  },
  name: {
    fontFamily: 'Avenir-Heavy',
    color: '#212B3A',
    fontSize: 0.02 * height,
  },
  cityButton: {
    backgroundColor: 'white',
    height: height * 0.03,
    width: width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  cityLabel: {
    fontFamily: 'Avenir-Medium',
    color: '#212B3A',
    fontSize: 0.014 * height,
    marginTop: height * 0.02,
    marginBottom: height * 0.005,
  },
  studentLabel: {
    fontFamily: 'Avenir-Medium',
    color: '#212B3A',
    fontSize: 0.014 * height,
    marginTop: height * 0.02,
  },
});

export default styles;
