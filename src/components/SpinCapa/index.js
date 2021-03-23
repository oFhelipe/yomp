import React, { memo } from 'react'
import { Animated, Easing } from 'react-native'
import { Neomorph } from 'react-native-neomorph-shadows';
import vinilImage from '../../assets/images/vinil.png'

import styles from './styles'

const SpinCapa = ({ capa, play, height, width, style }) => {

    const spinValue = new Animated.Value(0);

        
         Animated.loop(
        //definindo detalhes da animção
        Animated.timing(
            spinValue,//valor inicial da animação
        {
            toValue: 1, // e vai para 1
            duration: 4000,
            easing: Easing.linear, //tipo da animação, linear ou vai e volta por exemplo
            useNativeDriver: true  
        }
        )).start()// start para começar a animação

        if(play === false){
            spinValue.stopAnimation();
        }

         const spin = spinValue.interpolate({
        inputRange: [0, 1],//opções de animação
        outputRange: ['0deg','360deg'], // começo e o fim da animação
        });
    
    var image = null;

    if(capa && capa != null) {
        image = { uri:capa }
    }
    else {
        image = vinilImage;
    }
    var cdContainer = styles.cdContainer;
    var cdFotoCenter = styles.cdFotoCenter;

    if( !isNaN(height) && !isNaN(width)){
        cdContainer = {...cdContainer, width, height};
        cdFotoCenter = { ...cdFotoCenter, height:0, width:0 }
    }

    if(style) {
        cdContainer = {...cdContainer, ...style}
    }

    return (
        <Neomorph
            swapShadows // <- change zIndex of each shadow color
            style={cdContainer}>
              
              <Animated.Image
                  style={[styles.cdFoto, {transform: [{rotate: spin}]}]} 
                  source={image}/>
              <Neomorph 
                  inner 
                  style={cdFotoCenter} />
              
        </Neomorph>
    )
}

export default memo(SpinCapa)
