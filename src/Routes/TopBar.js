import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import AlbumsList from '../screens/AlbumsList'
import NovoAlbum from '../screens/NovoAlbum'



const TopBar = () => {
    
    const {Navigator, Screen} = createMaterialTopTabNavigator();

    return (
            <Navigator
                tabBarOptions={{
                    style:{
                        backgroundColor:'#27292F'
                    },
                    labelStyle:{
                        color:'#FFF',
                        fontFamily:'RussoOne',
                        fontSize:15
                    },
                    indicatorStyle:{
                        backgroundColor:'#D55672',
                        height:3,
                    },
                    }}>
                <Screen name="Albums" component={AlbumsList} />
                <Screen name="Novo Album" component={NovoAlbum} />
            </Navigator>
    )
}

export default TopBar
