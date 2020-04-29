/**
 * Section Component
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Button from '../Button/Button';
import Styles from './Styles';

const places = ['Liverpool', 'London', 'Manchester'];

const Section = () => {
  const [filter, setFilter] = useState('');
  const [sortParameter, setSortParameter] = useState('');

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Our Tutors</Text>
      <Text style={Styles.description}>
        We have more than 100 tutors from various disciplines ready to match
        with you.
      </Text>
      <View style={Styles.menuContainer}>
        <Text style={Styles.filterLabel}>Filter by:</Text>
        {places.map(item => (
          <Button
            handlePress={() => setFilter(item)}
            label={item}
            buttonStyle={
              filter === item ? Styles.filterButtonActive : Styles.filterButton
            }
            labelStyle={
              filter === item
                ? Styles.menuButtonLabelActive
                : Styles.menuButtonLabel
            }
            key={item}
          />
        ))}
        <Text style={Styles.sortLabel}>Sort by:</Text>
        <Button
          handlePress={() => setSortParameter('Name')}
          label="Name"
          buttonStyle={
            sortParameter === 'Name'
              ? Styles.sortButtonActive
              : Styles.sortButton
          }
          labelStyle={
            sortParameter === 'Name'
              ? Styles.menuButtonLabelActive
              : Styles.menuButtonLabel
          }
        />
        <Button
          handlePress={() => setSortParameter('City')}
          label="City"
          buttonStyle={
            sortParameter === 'City'
              ? Styles.sortButtonActive
              : Styles.sortButton
          }
          labelStyle={
            sortParameter === 'City'
              ? Styles.menuButtonLabelActive
              : Styles.menuButtonLabel
          }
        />
      </View>
      <View style={Styles.lineBreak} />
    </View>
  );
};

export default Section;
