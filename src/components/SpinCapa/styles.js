import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cdContainer: {
        height:258,
        width:258,
        shadowRadius: 10,
        backgroundColor: '#2F3136',
        borderRadius: 200,
        alignItems:'center',
        justifyContent:'center'
      },
      cdFoto: {
        height:'92%',
        width:'92%',
        borderRadius: 200,
      },
      cdFotoCenter: {
        height:40,
        width:40,
        borderRadius: 80,
        position:'absolute',
        backgroundColor: '#2F3136',
        shadowRadius: 10,
      },
});

export default styles