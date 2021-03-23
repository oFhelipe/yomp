import AsyncStorage from '@react-native-community/async-storage'

export default async function setLastAlbum(musicasList, album, musicaAtual, capa){

    await AsyncStorage.setItem('musicas', JSON.stringify(musicasList));
    await AsyncStorage.setItem('album', album);
    await AsyncStorage.setItem('musicaAtual', JSON.stringify(musicaAtual));
    await AsyncStorage.setItem('capa', capa);

}