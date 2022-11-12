import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../telas/Login";
import Home from "../../telas/Home";

const AuthStack = createNativeStackNavigator();
export default function AuthRoute(){
    return <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={Login}/>
        <AuthStack.Screen name="Home" component={Home}/>
    </AuthStack.Navigator>
 
}