import React from 'react';
import { View, Text, Button } from 'react-native';

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerTitle: 'Login Form',
    headerBackTitle: null,
  }
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#775dff' }}>
            <Text style={{ fontSize: 30, color: '#fff', padding: 100 }}>LoginScreen</Text>
            <Button
              title="Button"
              onPress={() => this.props.navigation.navigate('Home', { name: 'NHI' })}
              color="yellow"
            />
        </View>
    );
  }
}

export default LoginScreen;
