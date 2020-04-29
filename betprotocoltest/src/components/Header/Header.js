/**
 * Header Component
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';
import Styles from './Styles';
import Button from '../Button/Button';

const Header = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.firstRow}>
        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>TUTORMATCH</Text>
        </View>
        <View style={Styles.labelWithButtonContainer}>
          <Text style={Styles.label}>Become a Tutor</Text>
          <Button label="Sign In" />
        </View>
      </View>
      <View style={Styles.secondRow}>
        <Text style={Styles.descriptionTitle}>
          The place where Tutors and Students meet
        </Text>
        <Text style={Styles.description}>
          Find out who can help you take your education to the next level.
        </Text>
        <View style={Styles.getStartedButtonContainer}>
          <Button
            label="Get started now"
            buttonStyle={Styles.getStartedButton}
            labelStyle={Styles.getStartedLabel}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
