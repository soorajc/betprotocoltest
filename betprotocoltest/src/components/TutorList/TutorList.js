/**
 * Button Component
 *
 * @format
 * @flow
 */

import React from 'react';
import {FlatList, View} from 'react-native';
import Styles from './Styles';
import TUTORS from './DummyData';
import Card from '../Card/Card';

const TutorList = () => {
  return (
    <View style={Styles.container}>
      <FlatList
        data={TUTORS}
        numColumns={2}
        renderItem={({item, index}) => (
          <Card
            profilePicUrl={item.profilePicUrl}
            index={index}
            name={item.name}
            city={item.city}
            studentsImages={item.studentsProfileUrl}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TutorList;
