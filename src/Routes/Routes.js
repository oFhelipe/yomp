import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { useDispatch } from 'react-redux'

import AsyncStorage from '@react-native-community/async-storage'

import TopBar from './TopBar';
import AlbumsList from '../screens/AlbumsList';
import Album from '../screens/Album';

const Routes = () => {
    
    const Stack = createStackNavigator();

    const dispatch = useDispatch();

    useEffect(()=>{

        async function componentDidMount() {

           const musicas = JSON.parse(await AsyncStorage.getItem('musicas'));
           const album = await AsyncStorage.getItem('album');
           const musicaAtual = JSON.parse(await AsyncStorage.getItem('musicaAtual'));
           const capa = await AsyncStorage.getItem('capa')

           await dispatch({ type:"GET_DATA", musicas: musicas ? musicas : [], album, musicaAtual: musicaAtual, capa });
        }
        componentDidMount();

    },[]);

    return (
        <NavigationContainer>
            <Stack.Navigator
                    screenOptions={{
                        headerShown:false
                    }}>
                <Stack.Screen name="TopBar" component={TopBar} />
                <Stack.Screen name="AlbumsList" component={AlbumsList} />
                <Stack.Screen name="Album" component={Album} />
            </Stack.Navigator>
         </NavigationContainer> 
    )
}

export default Routes
