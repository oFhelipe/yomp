import React from 'react'
import { Image } from 'react-native'
import { Neomorph } from 'react-native-neomorph-shadows'

import vinilImage from '../../assets/images/vinil.png'

import styles from './styles'

const Capa = ({ height, width, capa, style }) => {

    var image = null;

    if(capa && capa != null) {
        image = { uri:capa }
    }
    else {
        image = vinilImage;
    }



    var albumCapaBox = styles.albumCapaBox;

    if( !isNaN(height) && !isNaN(width)){
        albumCapaBox = {...albumCapaBox, width, height};
    }

    if(style){
        albumCapaBox = {...albumCapaBox, ...style }
    }

    return (
        <Neomorph style={albumCapaBox}>
            <Image
                style={styles.albumCapa} 
                source={image} />
        </Neomorph>
    )
}

export default Capa
