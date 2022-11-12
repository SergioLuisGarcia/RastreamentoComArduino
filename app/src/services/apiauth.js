import axios from "axios";
function authapi(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
         resolve({
                usuario:"Jujuba",
                email:"admin@admin.com"
            });
        },2000);  
    });
};

function Autenticar({username,password}){
    axios.post("auth/jwt/create",JSON.stringify({"username":"admin","password":'se2705'}))
}




export {authapi, Autenticar};