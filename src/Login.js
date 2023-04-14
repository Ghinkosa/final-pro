import React, { useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
 function Login() {
    const [user_id,setUser_id]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    let history=useNavigate()
    useEffect(()=>{
      if(localStorage.getItem('user_id')){
        history('/dashboard');
      }
    },[])
    /*async function loginTo(event){
        event.preventDefault();
        let item={user_id,password}
        let result= await fetch('http://localhost:8000/api/login',{
            method:'POST',
            headers:{
              "Content-Type":"application/json",
              "Accept":"application/json"
                },
                body:JSON.stringify(item)
            })

            result=await result.json();

            //localStorage.setItem("user_info", JSON.stringify(result));
            //localStorage.setItem("token", 'result.token')
            console.log(result)
    }*/
    // REACT APP src/contexts/AppContext.js - login()
const login = (event) => {
    event.preventDefault();
    axios.defaults.withCredentials = true
    // CSRF COOKIE
    axios.get("http://localhost:8000" + "/sanctum/csrf-cookie").then(
      (response) => {
        //console.log(response);
        // LOGIN
        axios
          .post("http://localhost:8000/" + "api/login", {
            user_id: user_id,
            password:password,
          })
          .then(
            (response) => {
              console.log(response);
              if(response.data.user){
                localStorage.setItem("user_id", response.data.user.user_id);
                localStorage.setItem("token", response.data.token) 
                localStorage.setItem("role",response.data.user.role)
                history('/dashboard')
              }
              else{
                   setError("incorrect user_id or password")
              }
              // GET USER
                // GET USER ERROR
            // LOGIN ERROR
            },(error)=>{
                console.log(error)
            }
          )
        }
    )
    }
 
  return (
    <div className='m-auto'> 
        <h3 className='w-25 m-auto '>LOGIN</h3>
        <form className='w-25 m-auto' onSubmit={login}>
            <div className='mb-3 row'>
                <label htmlFor="email" className='col-sm-2 col-form-label'>Email</label>
                <input className='form-control' value={user_id} onChange={(e)=>setUser_id(e.target.value)} id="email"></input>                
            </div>
            <div className='mb-3 row'>
                <label htmlFor="password" className='col-sm-2 col-form-label'>password</label>
                <input className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)} id="password"></input>                
            </div>
            <button className='btn btn-primary'>Login</button>
            <div>{error}</div>
        </form>
    </div>
  )
}

export default Login