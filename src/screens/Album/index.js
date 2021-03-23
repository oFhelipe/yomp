import React, { useEffect, useState } from 'react'
import { View, StatusBar, TouchableOpacity, Text } from 'react-native'
import { Neomorph } from 'react-native-neomorph-shadows'
import { ScrollView } from 'react-native-gesture-handler'

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Capa from '../../components/Capa'

import listarDetalheArquivo from '../../utils/listarDetalheArquivo'
import setLastAlbum from '../../utils/setLastAlbum'

import { connect } from 'react-redux'

import styles from './styles'


const Album = ({ navigation, route, dispatch }) => {
    
    const { albumFolder, capa } = route.params;

    const [musicas, setMusicas] = useState([]);

    function handlePlay(musicasList, album, musicaAtual, capa){
        
        const musicaAtualIndex = musicas.findIndex((musica)=>{
            if(musica.filename === musicaAtual.filename){
                return musica;
            }
        });


        setLastAlbum(musicasList, album, musicaAtualIndex, capa);

        return {
            type: 'PLAY_PLAYLIST',
            musicas: musicasList,
            album,
            musicaAtual: musicaAtualIndex,
            capa
        };
    }

    useEffect(()=>{
        
        listarDetalheArquivo(albumFolder)
        .then((arquivos)=>{
            
            const musicasList = arquivos.filter((arquivo)=>{

                const { filename } = arquivo;
                const [ , formato ] = filename.split('.');

                if(formato === "mp3" ){
                    return arquivo;
                }
    
            });

            setMusicas(musicasList);


        });

    },[]);

    return (
        <>
            <StatusBar backgroundColor="#2F3136" barStyle="light-content" />
            <ScrollView>
               <View style={styles.container}>
                
                    <TouchableOpacity 
                        style={styles.backButton}
                        onPress={()=>{ navigation.goBack(); }}>
                            <Ionicons name="chevron-back-outline" size={32} color="#FFF" />
                    </TouchableOpacity>
                    
                    <Capa 
                        capa={capa}
                        height={200}
                        width={200}/>
                    <Text style={styles.albumNome}>{albumFolder}</Text>

                    <View style={styles.musicasContainer}>
                        
                        {musicas.map((musica, index)=>{

                            const [nome,] = musica.filename.split('.');

                            return (
                                <View key={index} style={styles.musicaBox}>
                                    <Text style={styles.musicaNome}>{nome}</Text>
                                    <Neomorph
                                        isset
                                        style={styles.playButton}>
                                        <TouchableOpacity 
                                                style={styles.playButton}
                                                onPress={()=>{
                                                    //navigation.navigate('Player', { musica, capa, album:albumFolder });
                                                    dispatch(handlePlay(musicas, path = albumFolder, musica, capa));
                                                }}>
                                            <MaterialIcons name="play-arrow" size={24} color="#FFF"/>
                                        </TouchableOpacity>
                                    </Neomorph>
                                </View>
                            );

                        })}

                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default connect((state) => { return { play:state.play, path:state.path } })(Album)
