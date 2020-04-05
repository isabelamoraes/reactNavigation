import React from 'react';
import {View, Text, Button} from 'react-native';

import styles from '../styles/styles'

export default function Settings({navigation}){

    function navigateToAdvanced(){
        navigation.navigate('Advanced');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Button title="Navigate to Advanced" onPress={navigateToAdvanced}></Button>
        </View>
    )
}