import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    albumCapaBox: {
        height:(Dimensions.get('window').width * 0.5) - 32,
        width:(Dimensions.get('window').width * 0.5) - 32,
        shadowRadius: 5,
        backgroundColor: '#2F3136',
        borderRadius: 200,
        alignItems:'center',
        justifyContent:'center',
        marginTop:8,
    },
    albumCapa: {
        height:'92%',
        width:'92%',
        borderRadius: Dimensions.get('window').width * 0.5,
    },
});

export default styles;