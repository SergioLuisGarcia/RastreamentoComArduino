import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../telas/Home";
import Localizacao from "../../telas/Rastreamento";

const AppStack = createNativeStackNavigator();

export default function AppRoute(){
    return <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Home}/>
        <AppStack.Screen name="Localizacao" component={Localizacao}/>
    </AppStack.Navigator>
}