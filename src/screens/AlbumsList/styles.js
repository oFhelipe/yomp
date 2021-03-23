import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#2F3136',
    },
    ultimoAlbumBox: {
        backgroundColor:'transparent',
        width: (Dimensions.get('window').width * 0.5) - 16,
        height: (Dimensions.get('window').width * 0.5) + 32 + 12,
        borderRadius:10,
        marginBottom:16,
        alignItems:'center',
    },
    albumContainer: {
        marginTop:16,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
    },

});

export default styles