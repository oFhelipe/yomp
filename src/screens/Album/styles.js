import { StyleSheet, Dimensions, StatusBar } from 'react-native'

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#2F3136',
        alignItems:'center',
        minHeight: Dimensions.get('window').height - StatusBar.currentHeight,
    },
    backButton: {
        alignSelf:'flex-start',
        margin:16,
        borderRadius:16,
    },
    albumNome:{
        fontFamily:'RussoOne',
        fontSize:16,
        color:'#FFF',
        marginVertical:16,
    },
    musicasContainer:{
        flex:1,
    },
    musicaBox:{
        backgroundColor:'#222427',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:16,
        width:Dimensions.get('screen').width,
        alignItems:'center',
        minHeight:64,
        marginBottom:1,
    },
    playButton:{
        height:32,
        width:32,
        backgroundColor:'#222427',
        shadowRadius:5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:16,
    },
    musicaNome:{
        fontFamily:'Cairo-Bold',
        width:'50%',
        color:'#FFF',
        lineHeight:20,
        marginVertical:8,
    }
});

export default styles