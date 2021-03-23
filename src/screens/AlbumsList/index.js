import React, { useState, useEffect } from 'react'
import { View, StatusBar, ScrollView } from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'

import styles from './styles'
import AlbumBox from '../../components/AlbumBox'

import verificarCriarFolder from '../../utils/verificarCriarFolder'
import listarArquivos from '../../utils/listarArquivos'

const AlbumsList = ({ navigation }) => {

    const [albums, setAlbums] = useState([]);

    useEffect(()=>{
        changeNavigationBarColor('#2F3136');
        verificarCriarFolder('yomp/albuns');

        listarArquivos('albuns')
        .then((albumsFolder)=>{
            setAlbums(albumsFolder);
        });

      },[]);

    return (
        <>
            <StatusBar backgroundColor="#27292F" barStyle="light-content"/>
            <View style={styles.container}> 
                <ScrollView>
                    <View style={styles.albumContainer}>
                        {albums.map((albumFolder, index)=>{

                            return (
                                <AlbumBox 
                                    key={index}
                                    albumFolder={albumFolder}
                                    navigation={navigation}/>
                            );

                        })}
                        {
                    albums.length % 2 > 0 
                    ? <View style={styles.ultimoAlbumBox}/>
                    : <></>
                    }
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default AlbumsList
