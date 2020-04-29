/**
 * Card Component
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './Styles';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Card = props => {
  return (
    <View
      style={[
        Styles.container,
        {marginRight: props.index % 2 === 0 ? '5%' : '2%'},
      ]}>
      <View style={Styles.profilePicContainer}>
        <Image source={{uri: props.profilePicUrl}} style={Styles.profilePic} />
      </View>
      <View style={Styles.detailsContainer}>
        <Text style={Styles.name}>{props.name}</Text>
        <Text style={Styles.cityLabel}>City</Text>
        <Button label={props.city} buttonStyle={Styles.cityButton} />
        <Text style={Styles.studentLabel}>Students so far</Text>
        <View style={Styles.studentsAvatarView}>
          {props.studentsImages.map((item, index) => (
            <Image
              key={index}
              source={{uri: item}}
              style={Styles.studentAvatar}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Card;

Card.propTypes = {
  profilePicUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  studentsImages: PropTypes.array.isRequired,
};
