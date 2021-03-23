import React, { useState, useRef } from 'react'
import { Text, View, StatusBar, TouchableOpacity, Dimensions } from 'react-native'

import Capa from '../../components/Capa'


import Video from 'react-native-video'
import RBSheet from "react-native-raw-bottom-sheet"
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import MusicControl from 'react-native-music-control';
import { connect, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles'
import TopNotification from '../../components/TopNotification'
import Player from '../Player'




const MiniPlayer = ({ data, dispatch }) => {



  const { musicas, album, musicaAtual, capa } = data;
  console.log(data);

  var nome = "";

  if(musicaAtual != undefined){
    const [nomeMusica, ] = musicas[musicaAtual].filename.split('.');
    nome = nomeMusica;
  }

  const bottomSheetRef = useRef();

  const [play, setPlay] = useState(false);
  const [ final, setFinal ] = useState(0);
  const [ atual, setAtual ] = useState(0);
  const [ playerRef, setPlayerRef ] = useState(null);

  
  async function handlePlayPause(){
      setPlay(!play);
  }

  async function handleNextSong(){
    const proximaMusica = Array.isArray(musicas) && musicaAtual < musicas.length - 1 ? musicaAtual + 1 : 0;
    await AsyncStorage.setItem('musicaAtual', JSON.stringify(proximaMusica));
    dispatch({ type:'NEXT_SONG', ...data });
  }

async function handlePrevSong(){
  const anteriorMusica = Array.isArray(musicas) && musicaAtual >= musicas.length - 1 ? musicaAtual - 1 : musicas.length - 1;
  await AsyncStorage.setItem('musicaAtual', JSON.stringify(anteriorMusica));
  dispatch({ type:'NEXT_SONG', ...data });
}

useState(()=>{
  changeNavigationBarColor('#2F3136');
},[]);


  return (
    <>
      <StatusBar backgroundColor="#2F3136" barStyle="light-content"/>
      {capa != null && <TopNotification
                              setPlay={setPlay}
                              handleNextSong={handleNextSong}
                              handlePrevSong={handlePrevSong}
                              nome={nome} 
                              capa={capa}
                              album={album}/>}
      
     {
        album && Array.isArray(musicas) && !isNaN(musicaAtual)
        ? <Video 
            playInBackground
            playWhenInactive
            onVideoEnd={handleNextSong}
            ref={ref => setPlayerRef(ref)} 
            onLoad={({ duration })=>{
                setFinal(duration);
            }}
            onProgress={({currentTime})=>{
                setAtual(currentTime);
            }} 
            onEnd={handleNextSong}
            style={{height:0, width:0}}
            audioOnly
            paused={!play}
            source={{uri: `file://${musicas[musicaAtual].path}` }}
            /> 
        : <></>

     }

      <TouchableOpacity 
          onPress={()=>{bottomSheetRef.current.open()}}
          style={styles.miniplayerBox}>
        <Capa 
          capa={capa !== null ? capa: null}
          style={{marginTop:-8}}
          height={80}
          width={80}/>
        <View style={styles.contentContainer}>
            <View style={styles.miniplayerMusicNomeContainer}>
              <Text style={styles.miniplayerMusicNome}>{nome}</Text>
            </View>
            <View style={styles.iconsContainer}>

              <TouchableOpacity onPress={handlePlayPause}>
              {play ? <MaterialIcons name="pause" size={40} color="#FFF"/>
                    : <MaterialIcons name="play-arrow" size={40} color="#FFF"/>}
              </TouchableOpacity>

            </View>
        </View>
      </TouchableOpacity>


      <View>
      <RBSheet style={styles.container}
        openDuration={600}
        height={Dimensions.get('window').height}
        ref={bottomSheetRef}
        closeOnDragDown={false}
        closeOnPressMask={true}
        customStyles={{
          container: {...styles.container},
          draggableIcon: {
            display:'none'
          },
        }}
      >
          
          <Player
              data={data}
              play={play}
              atual={atual}
              final={final}
              nome={nome}
              setAtual={setAtual}
              playerRef={playerRef}
              handlePlayPause={handlePlayPause}
              handleNextSong={handleNextSong}
              handlePrevSong={handlePrevSong}
              bottomSheetRef={bottomSheetRef}/>
          
        </RBSheet>
      </View>
    </>
  )
}

export default connect((state) => { return { data:state } })(MiniPlayer)
