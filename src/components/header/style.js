import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({


    viewHeader:{
        display: 'flex',
        flexDirection:"collum",
        justifyContent:"center",
        alignItems:"center",
        marginTop:8,
        marginLeft:10
    },
    textHeader:{
        fontSize: 30,
        color:"black",
        fontWeight:"bold",
        width:'100%',
        justifyContent:'center',
        textAlign: 'center'
    }
})

export default estilo;