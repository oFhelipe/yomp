import React, { useState, useEffect } from 'react'
import { PermissionsAndroid } from 'react-native'
import verificarCriarFolder from './utils/verificarCriarFolder'
import AsyncStorage from '@react-native-community/async-storage';

import Routes from  './Routes/Routes'

import MiniPlayer from './screens/MiniPlayer'

import { Provider } from 'react-redux'

import store from './store'

const App = () => {

    const [permissaoWrite, setPermissaoWrite] = useState(false);
    const [permissaoRead, setPermissaoRead] = useState(false);

    useEffect(()=>{
        async function componentDidMount(){

            const permissaoWrite = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
            const permissaoRead = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);

            if(!permissaoWrite){
                const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
                if(result === 'granted'){
                   await setPermissaoWrite(true);
                }
            }

            if(!permissaoRead){
                const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
                if(result === 'granted'){
                   await setPermissaoRead(true);
                }
            }
        
            const play = await AsyncStorage.getItem('play');
            if(!play){
                await AsyncStorage.setItem('play', 'false');
            }

            if(permissaoRead && permissaoWrite){
                verificarCriarFolder('yomp');
                setPermissaoWrite(true);
                setPermissaoRead(true);
            }

        }
        componentDidMount();
    },[]);

    return (
        permissaoRead && permissaoWrite 
        ? <Provider store={store}>
            <Routes/>
            <MiniPlayer/>
          </Provider>
        : <></>
    )
}

export default App
