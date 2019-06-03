import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'LoginScreen',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Container>
            <Header />
                <Content>
                    <Form>
                        <Item inlineLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item inlineLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Button rounded>
                            <Text>Primary</Text>
                        </Button>
                    </Form>
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