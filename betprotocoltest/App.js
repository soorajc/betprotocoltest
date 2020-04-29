/**
 * BetProtocol Test App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {ScrollView} from 'react-native';
import Header from './src/components/Header/Header';
import Section from './src/components/Section/Section';
import TutorList from './src/components/TutorList/TutorList';

const App = () => {
  return (
    <ScrollView>
      <Header />
      <Section />
      <TutorList />
    </ScrollView>
  );
};

export default App;
