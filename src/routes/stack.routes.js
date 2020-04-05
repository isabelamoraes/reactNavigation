import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
  
const Stack = createStackNavigator();

import Settings from '../pages/Settings';
import Advanced from '../pages/Advanced';

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Settings" screenOptions={{headerStyle:{backgroundColor:'#7159c1'}, headerTintColor: '#FFF'}}>
            <Stack.Screen name="Settings" component={Settings} options={{title: 'Settings'}}/>
            <Stack.Screen name="Advanced" component={Advanced} options={{title: 'Advanced'}}/>
        </Stack.Navigator>
    )
}