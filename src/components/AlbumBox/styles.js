import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    albumBox: {
        backgroundColor:'#2F3136',
        shadowRadius:5,
        width: (Dimensions.get('window').width * 0.5) - 16,
        height: (Dimensions.get('window').width * 0.5) + 32 + 12,
        borderRadius:10,
        marginBottom:16,
        alignItems:'center',
    },
    full:{
        width: (Dimensions.get('window').width * 0.5) - 16,
        height: (Dimensions.get('window').width * 0.5) + 32 + 12,
        alignItems:'center'
    },
    albumNome: {
        color:'#FFF',
        fontSize:16,
        fontFamily:'Cairo-Bold',
        marginVertical:16,
    }
});

export default styles 