import React from 'react';
import {View, Text, Button} from 'react-native';

import styles from '../styles/styles'

export default function Home({navigation}){

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <Button title="Menu" onPress={() => navigation.openDrawer()}></Button>
        </View>
    )
}