import React, { createContext, useState } from 'react'

export const AuthContext =createContext({})
const client=axios.create({
    baseURL:"localhost:8000/api/v1/users"
})

export const AuthProvider=({children})=>{
    const authContext= useContext(AuthContext);
const[userData,setUserData]=useState(authContext);
const handleRegidster=async (name,username,password)=>{
    try{
        let request = await client.post("/register",{
            name:name,
            username,password
        })
        if (request.status ==httpStatus.CREATED){
            return request.data.message
        }
    } catch(e) {
throw e;
    }
}
const router=useNavigate();
const data={
    userData,setUserData,handleRegidster
}
return(
    <AuthContext.Provider value={data}> {children} </AuthContext.Provider>
)

}