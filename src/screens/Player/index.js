import React, { useState, useRef, useEffect, memo } from 'react'
import { Text, View, StatusBar, TouchableOpacity, Dimensions } from 'react-native'
import SpinCapa from '../../components/SpinCapa'
import Capa from '../../components/Capa'

import Slider from "@react-native-community/slider"
import { Neomorph } from 'react-native-neomorph-shadows'
import Video from 'react-native-video'
import RBSheet from "react-native-raw-bottom-sheet"
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MusicControl from 'react-native-music-control';
import { connect, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles'





const Player = ({ data, nome, play, final, atual, handlePlayPause, bottomSheetRef, setAtual, playerRef, handleNextSong, handlePrevSong }) => {

  const { musicas, album, musicaAtual, capa } = data;

  return (
        <>
        <TouchableOpacity 
                  style={styles.backButton}
                  onPress={()=>{
                    bottomSheetRef.current.close();
                  }}>
              <Ionicons name="chevron-down-outline" size={32} color="#FFF" />
          </TouchableOpacity>

          <SpinCapa
              capa={capa !== null ? capa: null}
              play={play}/>
          
          <View style={styles.infoMusicaContainer}>
                <Text style={styles.musicaNome}>{nome}</Text>
                <Text style={styles.musicaFolder}>{album}</Text>
          </View>

          <View style={styles.barraContainer}>
              <View style={styles.timerContainer}>
                   <Text style={styles.timerText}>{parseInt(parseInt(atual)/60) < 10 ? '0' : ''}{parseInt(parseInt(atual)/60)}:{parseInt(atual)%60 < 10 ? '0' : ''}{parseInt(atual)%60}</Text>
                   <Text style={styles.timerText}>{parseInt(parseInt(final)/60) < 10 ? '0' : ''}{parseInt(parseInt(final)/60)}:{parseInt(final)%60 < 10 ? '0' : ''}{parseInt(final)%60}</Text>
                  
              </View>
              <Slider
                  minimumTrackTintColor='#D55672'
                  maximumTrackTintColor='#f5f5f5'
                  thumbTintColor='#FFF'
                  minimumValue={0}
                  maximumValue={final}
                  onValueChange={ async (value) => {          
                          playerRef.seek(value);
                          setAtual(value); 
                        }}
                  value={atual}/>
              <View style={styles.playerButtonContainer}>
                  
                      <Neomorph
                          isset
                          style={styles.nextPrevButton}>
                          <TouchableOpacity style={styles.nextPrevButton} onPress={handlePrevSong}>
                              <MaterialIcons name="skip-previous" size={24} color="#FFF"/>
                          </TouchableOpacity>
                      </Neomorph>

                      <Neomorph
                          isset
                          style={styles.playButton}>
                          <TouchableOpacity 
                              style={styles.playButton}
                              onPress={handlePlayPause}>
                              {play ? <MaterialIcons name="pause" size={32} color="#FFF"/>
                                    : <MaterialIcons name="play-arrow" size={32} color="#FFF"/>}
                          </TouchableOpacity>
                      </Neomorph>

                      <Neomorph
                          isset
                          style={styles.nextPrevButton}>
                          <TouchableOpacity style={styles.nextPrevButton} onPress={handleNextSong}>
                              <MaterialIcons name="skip-next" size={24} color="#FFF"/>
                          </TouchableOpacity>
                      </Neomorph>
                  
              </View>
          </View>
        </>
  )
}

export default Player;
