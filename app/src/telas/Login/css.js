import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    icone:{
        marginVertical:50,
        color:"blue",
    },
    textoLogin:{
        letterSpacing:5,
        fontSize:40,
        fontWeight:"bold"
    },
    entradaDeTexto:{
        width:"70%",
        height:30,
        textAlign:"center",
        borderRadius:10,
        marginVertical:20,
        borderWidth:2,
        borderColor:"black",
        height:40,

    },
    botaoEntrar:{
        width:"60%",
        minHeight:50,
        backgroundColor:"gray",
        borderRadius:10,
        paddingVertical:10,
        marginVertical:20
    },
    textoBotao:{
        fontSize:30,
        fontWeight:"bold",
        letterSpacing:5,
        textTransform:"uppercase",
        color:"white",
        textAlign:"center"
    }
});

export default estilo;