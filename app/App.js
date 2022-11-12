import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/rotas/authroutes";
import {AuthProvider} from "./src/context/context";

export default function App(){
  return <NavigationContainer>
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  </NavigationContainer>
}