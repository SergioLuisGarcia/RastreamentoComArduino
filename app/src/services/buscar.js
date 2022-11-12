import axios from "axios";
import api from "./api"

const baseURL = "http://192.168.0.106:8000"

export async function getUsuario(){
    try{
        const res = await axios({
            baseURL:baseURL,
            url:'usuarios/1',
            headers:{"Authorization":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3MDQ3ODQ4LCJpYXQiOjE2NjcwNDYwNDgsImp0aSI6IjgzYzY4NmM5ODIwYjQ4OWE5Njg3Mzc0MjdmZTU0MWUxIiwidXNlcl9pZCI6MX0.mQU3i5UFoXRMjgqf9K2R0Ar_7y4DnOuSxLfhFdKAP5A`}
        });
        return res.data;
    }catch(err){
        alert(err);
        return []
    }
}

export async function getVeiculos(token){
    try{
        const res = await axios({
            baseURL:baseURL,
            url:'veiculos',
            headers:{"Authorization":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3MDQ3ODQ4LCJpYXQiOjE2NjcwNDYwNDgsImp0aSI6IjgzYzY4NmM5ODIwYjQ4OWE5Njg3Mzc0MjdmZTU0MWUxIiwidXNlcl9pZCI6MX0.mQU3i5UFoXRMjgqf9K2R0Ar_7y4DnOuSxLfhFdKAP5A`}
        });
        return res.data;
    }catch(err){
        alert(err);
        return []
    }
}
export async function autenticar(username,password){
    try{
        const response  = await api.post(
            "auth/jwt/create",
                {"username":`${username}`,
                "password":`${password}`})
            return response.data.access;
            }catch(err){
                alert("Usuario ou senha incorretos");
                []
            }
        
}

