import React, { useContext, useEffect, useState } from "react";
import {View,Text, TouchableOpacity, TextInput, ImageBackground} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AuthContext from "../../context/context";
import estilo from "./css";
import { autenticar } from "../../services/buscar";


export default function Login({navigation}){
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const {handleLogin,autenticado,usuario} = useContext(AuthContext)

    async function handle(){
        const response = await autenticar(username,password);
        console.log(response);
        if(response){
            navigation.navigate("Home");
        }else{
            navigation.navigate("Login")
            setUsername("");
            setPassword("");
        }
    }
    return <View style={estilo.container}>
        <Icon name="location-arrow" style={estilo.icone} size={60}/>
        <TextInput 
            style={estilo.entradaDeTexto}
            placeholder="usuario"
            onChangeText={(username)=>{setUsername(username)}}

        />
        <TextInput
            style={estilo.entradaDeTexto}
            placeholder="senha"
            secureTextEntry={true}
            onChangeText = {(password)=>{setPassword(password)}}
        />
        <TouchableOpacity style={estilo.botaoEntrar}>
            <Text style={estilo.textoBotao} onPress={handle}>login</Text>
        </TouchableOpacity>
    </View>

}