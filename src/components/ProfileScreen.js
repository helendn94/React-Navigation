import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class ProfileScreen extends React.Component {
  static navigationOptions = {
     tabBarLabel: 'Setting111',
     tabBarIcon: ({ tintColor }) => (
       <Icon name="ios-settings" color={tintColor} size={24} />
     ),
  }
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: 'yellow' }}>
            <Text style={{ fontSize: 30, color: '#000', padding: 100 }}>
              ProfileScreen
            </Text>
            <Text style={{ color: '#000' }}>{this.props.navigation.username}</Text>
            <Button
              title="go to ProfileScreen"
              onPress={() => this.props.navigation.goBack()}
              color='#000'
            />
        </View>
    );
  }
}

export default ProfileScreen;
