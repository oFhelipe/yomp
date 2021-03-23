import React, { useState } from 'react'
import { View, Text, StatusBar } from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'

import styles from './styles'

const NovoAlbum = () => {

    useState(()=>{
        changeNavigationBarColor('#2F3136');
      },[]);

    return (
        <>
            <StatusBar backgroundColor="#27292F" barStyle="light-content"/>
            <View style={styles.container}>
                
                

            </View>
        </>
    )
}

export default NovoAlbum
