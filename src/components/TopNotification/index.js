import React, { memo, useState } from 'react'
import MusicControl from 'react-native-music-control';

const TopNotification = ({nome, capa, album,setPlay, handleNextSong, handlePrevSong}) => {
    useState(()=>{

        MusicControl.enableControl('play', true)
        MusicControl.enableControl('pause', true)
        MusicControl.enableControl('nextTrack', true)
        MusicControl.enableControl('previousTrack', true)
        MusicControl.enableBackgroundMode(true)
      
        MusicControl.on('nextTrack', handleNextSong);
      
        MusicControl.on('previousTrack', handlePrevSong);
      
        MusicControl.on('play',()=>{
          setPlay(true);
          MusicControl.updatePlayback({
            state: MusicControl.STATE_PLAYING, // (STATE_ERROR, STATE_STOPPED, STATE_PLAYING, STATE_PAUSED, STATE_BUFFERING)
          });
        });
      
        MusicControl.on('pause',()=>{
          setPlay(false);
          MusicControl.updatePlayback({
            state: MusicControl.STATE_PAUSED,
          });
        });

        MusicControl.setNowPlaying({
            title: nome, // musica nome
            artwork: capa, // URL or RN's image require() musica imagem
            artist: album, // album
            colorized: true, // Android 8+ Only - Notification Color extracted from the artwork. Set to false to use the color property instead
          })
    });
}

export default memo(TopNotification);
