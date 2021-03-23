import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#2F3136',
        justifyContent:'center',
        alignItems:'center'
      },
      backButton: {
          alignSelf:'flex-start',
          marginTop:-8,
          marginLeft:16,
          borderRadius:16,
      },
      infoMusicaContainer: {
          width:Dimensions.get('window').width,
          paddingHorizontal:16,
          alignItems:'center',
          justifyContent:'center',
          marginTop:32,
          marginBottom:16,
      },
      musicaNome: {
        color:'#FFF',
        fontFamily:'RussoOne',
        fontSize:18,
        width:'100%',
        textAlign:'center',
        marginBottom: 8,
      },
      musicaFolder: {
        color:'#FFF',
        fontFamily:'Cairo-Bold',
        fontSize:14,
        width:'100%',
        textAlign:'center'
      },
      barraContainer: {
        width:Dimensions.get('window').width,
        paddingHorizontal:16,
      },
      timerContainer: {
          flexDirection:'row',
          justifyContent:'space-between',
          padding:0,
          paddingHorizontal:16,
      },
      timerText: {
          color:'#FFF',
      },
      playerButtonContainer: {
          flexDirection:'row',
          justifyContent:'space-around',
          alignItems:'center',
          marginTop:16
      },
      playButton: {
        height:64,
        width:64,
        shadowRadius:4,
        backgroundColor:'#2F3136',
        borderRadius:32,
        alignItems:'center',
        justifyContent:'center'
    },
    nextPrevButton: {
        height:40,
        width:40,
        shadowRadius:2,
        backgroundColor:'#2F3136',
        borderRadius:32,
        alignItems:'center',
        justifyContent:'center'
    },
    miniplayerBox: {
      width:Dimensions.get('window').width,
      height:64,
      backgroundColor:'#27292F',
      flexDirection:'row'
    },
    contentContainer:{
      flex:1,
      paddingHorizontal:8,
    },
    iconsContainer:{
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'center',
      paddingVertical:4,
    },
    miniplayerMusicNomeContainer:{
      flex:1,
      alignItems:'center'
    },
    miniplayerMusicNome:{
      color:'#FFF',
      fontFamily:'RussoOne',
      marginTop:4,
    }
});

export default styles