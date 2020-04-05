import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
  
const Drawer = createDrawerNavigator();

import Home from './pages/Home';
import TabRoutes from './routes/tab.routes'
import StackRoutes from './routes/stack.routes'

export default function Routes() {
    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={{headerStyle:{backgroundColor:'#7159c1'}, headerTintColor: '#FFF'}}>
            <Drawer.Screen name="Home" component={Home} options={{title: 'Home'}}/>
            <Drawer.Screen name="TabRoutes" component={TabRoutes} />
            <Drawer.Screen name="StackRoutes" component={StackRoutes} />
        </Drawer.Navigator>
    )
}