import React, { useEffect, useState } from "react";
import Local from "@react-native-community/geolocation"
import { PermissionsAndroid, View, Text, Button, StyleSheet } from "react-native";
import MapView , {Marker}from "react-native-maps";


export default function Localizacao(){
    /* Cria as variaveis usando os hooks*/
    const[latitudeAtual,setLatitudeAtual] = useState(0);
    const[longitudeAtual,setLongitudeAtual] = useState(0);
    const[watchID,setWatchID] = useState(0);
    /*FUnção para pegar a posição atual no mapa*/
    const pegaPosicao = () => {Local.getCurrentPosition(
            (pos) => {
                setLatitudeAtual(pos.coords.latitude);
                setLongitudeAtual(pos.coords.longitude);
            },
            (err) => {
                alert(err);
            },
            {enableHighAccuracy:true,timeout:20000,maximumAge:1000}
        )
        /*Função para armazenar a posição capturada no mapa*/
        const watchID = Local.watchPosition((position) => {
            const latitudeAtual = (position.coords.latitude);
            const longitudeAtual = (position.coords.longitude);
            setLatitudeAtual(latitudeAtual);
            setLongitudeAtual(longitudeAtual);
          });
          setWatchID(watchID);
        }
        /* Função para validar com o usuario a permissão de localização e executar a captura e exibicao*/
         const capturar = async function(){
            const validaPermissao = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
                    title:"Localização",
                    message:"Permitir acesso a localização",
                    buttonPositive:"Sim",
                    buttonNegative:"Não",
                    buttonNeutral:"Agora não"
                }
            )
            if(validaPermissao === PermissionsAndroid.RESULTS.GRANTED){
                pegaPosicao();
            }else{
                alert("Erro");
            }

        };
        /* Aqui este hook vai executar a função de capturar a posição e atualizar a posição do dispositivo no mapa*/
        /*Atenção a ultima linha do hook pois os parametros passados no array fara com que o app sera somente carregado quando
        for alteradas as latitude e longitude assim evita o estouro de memoria*/
        useEffect(()=>{
            capturar();
        },[latitudeAtual,longitudeAtual])

    return <MapView
        style={estilo.mapa}
        loadingEnabled = {true}
        region = {{
            latitude:latitudeAtual,
            longitude: longitudeAtual,
            latitudeDelta:0.0090,
            longitudeDelta:0.00043
        }}
        >
        <Marker coordinate = {{latitude: latitudeAtual,longitude: longitudeAtual}}
         pinColor = {"red"}
         title={"XXX-000"}
         description={"Corsa Classic 2013"}/>
        </MapView>

    
}

const estilo = StyleSheet.create({
    mapa:{
        flex:1
    }
})