import React from 'react';
import {View, Text, Button} from 'react-native';

import styles from '../styles/styles'
import { NavigationContainer } from '@react-navigation/native';

export default function Advanced({navigation}){

    function navigateToProfile(){
        navigation.navigate('TabRoutes', {screen:'Profile'});
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <Button title="Navigate to Profile" onPress={navigateToProfile}></Button>
        </View>
    )
}