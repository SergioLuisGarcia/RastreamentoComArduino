import React from "react";
import { Button, ScrollView, TextInput } from "react-native";

export default function Cadastro(){

    return <ScrollView>
        <Text>Cadastrar</Text>
        <TextInput placeholder="Nome de usuario"/>
        <TextInput placeholder="CPF" onChangeText={()=>{}} keyboardType="numeric"/>
        <TextInput placeholder="RG" onChangeText={()=>{}} keyboardType="numeric"/>
        <TextInput placeholder="Data de nascimento" onChangeText={()=>{}}/>
        <Button title="Cadastrar"/>
    </ScrollView>
}