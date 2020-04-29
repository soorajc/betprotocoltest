/**
 * Button Component
 *
 * @format
 * @flow
 */

import React from 'react';
import {TouchableOpacity, Text, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import Styles from './Styles';

const Button = props => {
  return (
    <TouchableOpacity
      onPress={props.handlePress ? () => props.handlePress() : null}
      style={props.buttonStyle ? props.buttonStyle : Styles.button}>
      <Text style={props.labelStyle ? props.labelStyle : Styles.label}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

Button.propTypes = {
  buttonStyle: ViewPropTypes.style,
  label: PropTypes.string.isRequired,
  labelStyle: Text.propTypes.style,
  handlePress: PropTypes.func,
};
