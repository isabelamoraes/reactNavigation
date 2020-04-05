import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from '../pages/Feed';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

export default function DashboardRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}