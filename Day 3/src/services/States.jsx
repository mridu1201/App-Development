import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const context=createContext();
export const States=()=> {


    //Signup
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [pwd,setPwd]=useState("");
    const [phone,setPhone]=useState("");
    const [confirmpwd,setConfirmpwd]=useState("");
    const [age,setAge]=useState(0);
    const [pwderror,setPwderror]=useState("");


    const SignUp = () => {
    axios.post("",{
        firstname:firstname,
        lastname:lastname,
        email:email,
        pwd:pwd,
        confirmpwd:confirmpwd,
        age:age,
        phone:phone
    })
    .then((res)=>{
    console.log(res);
    });
        const pwdmatch=(e)=>{
        e.preventDefault(e);
        if(pwd===confirmpwd)
        {
            SignUp();
            toast.success("Account Created");
        }
        else if(!(pwd===confirmpwd))
        {
            setPwderror("password mismatch");
            toast.error("Password mismatch");
        }
    }


    //navigation
    
    navigate("/home");
    }
    const navigate=useNavigate();

    const gotoLogin=()=>{
    navigate("/login");
    }
    const gotoHomePage=()=>{
    navigate("/home")
    }

    //login


  return (
    <div>
        <Toaster/>
      <context.Provider>
        firstname,
        setFirstname,
        lastname,
        setLastname,
        email,
        setEmail,
        pwd,
        setPwd,
        confirmpwd,
        setConfirmpwd,
        age,
        setAge,
        SignUp,
        navigate,
        gotoLogin,
        gotoHomePage,
        pwdmatch,
        pwderror,
        setPwderror
      </context.Provider>
    </div>
  )
}
export const useStates=()=>useContext(context);