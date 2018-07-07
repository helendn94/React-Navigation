import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

 class HomeScreen extends React.Component {
   static navigationOptions = ({ navigation }) => ({
     title: 'haoo',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24} />
      ),
      headerLeft: <Button title="pop" onPress={() => { navigation.navigate('DrawerOpen'); }} />
   });
   render() {
        const { params } = this.props.navigation.state;
     return (
         <View style={{ flex: 1, backgroundColor: '#775dff' }}>
             <Text style={{ fontSize: 30, color: '#fff', padding: 100 }}>HomeScreen</Text>
             <Button
               title="go to ProfileScreen"
               onPress={() => this.props.navigation.navigate('ProfileScreen', { username: 'Nhi' })}
               color='#ffffff'
             />
             <Button
               title="go to DrawScreen"
               onPress={() => this.props.navigation.navigate('DrawMenu')}
               color='#ffffff'
             />
         </View>
     );
   }
}

export default HomeScreen;
