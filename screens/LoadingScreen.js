import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {Spinner} from 'native=base';

export default class LoadingScreen extends React.Component {
  static navigationOptions = {
    title: 'LoadingScreen',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Container>
            <Header />
                <Content>
                    <Spinner color='blue' />
                </Content>
        </Container>
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
