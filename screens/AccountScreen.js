import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {Spinner} from 'native=base';

export default class AccountScreen extends React.Component {
  static navigationOptions = {
    title: 'AccountScreen',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
    
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
