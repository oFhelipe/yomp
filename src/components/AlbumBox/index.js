import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Neomorph } from 'react-native-neomorph-shadows';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Capa from '../Capa';

import listarDetalheArquivo from '../../utils/listarDetalheArquivo'

import styles from './styles'
//https://github.com/Instabug/Instabug-React-Native#custom/android-multidex
const index = ({ navigation, albumFolder }) => {

    const [arquivos, setArquivos] = useState("");
    const [foto, setFoto] = useState(null);

    useEffect(()=>{
        listarDetalheArquivo(albumFolder)
        .then((albumFile)=>{

            setArquivos(albumFile);

             albumFile.filter((file)=>{

                    const { filename, type, path } = file;

                    const [nome,] = filename.split('.')

                    if(type === 'file' && nome === `capa-${albumFolder}` ){
                        setFoto(`file://${path}`);
                        return;
                    }

                });

        });
    },[]);

    return (
        <Neomorph
            style={styles.albumBox}>         
                <TouchableOpacity 
                    style={styles.full}
                    onPress={()=>{
                    navigation.navigate('Album', {capa: foto, albumFolder:albumFolder});
                    }}>
                        <View style={styles.full}>            
                            <Capa 
                                capa={foto}/>         
                            <Text style={styles.albumNome} >{albumFolder}</Text>
                        </View>
                </TouchableOpacity>
        </Neomorph>
    )
}

export default index
