import React, { useEffect, useState } from "react";
import { 
    FlatList,
    Text,
    TouchableOpacity,
    View,
    Image, 
    ActivityIndicator 
    } from "react-native";
import  Icon  from "react-native-vector-icons/Entypo";
import estilo from "./css";
import { getUsuario, getVeiculos } from "../../services/buscar";
import { Autenticar } from "../../services/apiauth";

function Loading(){
    return <View style={{width:'100%',height:"100%", justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size={"large"} color={"blue"}/>
        <Text style={{fontSize:40, letterSpacing:5}}>AGUARDE</Text>
    </View>
}

export default function Home(){
    const[usuario,setUsuario] = useState([]);
    const[veiculos,setVeiculos] = useState([]);
    const[carengandoLista,setCarregando] = useState(true);
    async function buscaVeiculos(){
        const resultadoVeiculos = await getVeiculos();
        if(resultadoVeiculos){
            setTimeout(()=>{
            setVeiculos(resultadoVeiculos);
            setCarregando(false)
        },2000)
        }else{
            alert("Servidor nao responde")
        }
    }
    async function buscaUsuario(){
        const resultadoUsuario = await getUsuario();
        if(usuario){
            return setUsuario(resultadoUsuario);
        }else{
            alert("Usuario nao encontrado");
        }
    }
    useEffect(()=>{
        const fetchDataVeiculos = async()=>{
            const Veiculos = await buscaVeiculos();
        }
        const fetchUsuario = async ()=>{
            const Usuario = await buscaUsuario();
            }
        fetchDataVeiculos();
        fetchUsuario();
        },[])
    return <View style={estilo.container}>
        { carengandoLista ?(
            <Loading/>
        ):(
         <><View style={estilo.userInfo}>
                    <Text style={estilo.nomeInfo}>{usuario.nome}</Text>
                    <Text style={estilo.acessoInfo}>{usuario.ultimo_acesso}</Text>
                    <Image style={estilo.imageInfo} source={require("./imagens/logo.png")} />

                </View><View style={estilo.listContainer}>
                        <FlatList
                            data={veiculos}
                            keyExtractor={veiculos.id}
                            renderItem={({ item }) => <View style={estilo.itemContainer}>
                                <View style={estilo.itemInfo}>
                                    <Image style={estilo.listImage} source={require("./imagens/logo.png")} />
                                    <View style={estilo.textContainer}>
                                        <Text style={estilo.textList}>{item.modelo}</Text>
                                        <Text style={estilo.textList}>{item.placa}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={estilo.listButton}>
                                    <Text style={estilo.listButtonText}>130 mts</Text>
                                    <Icon name="location" size={20} color={"white"} />
                                </TouchableOpacity>
                            </View>} />
                    </View></>
        )}
        </View>
}
