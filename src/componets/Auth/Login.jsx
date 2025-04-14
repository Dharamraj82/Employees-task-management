import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function Login({getLoginData}) {

    const [showpassword, setShowpassword] = useState(true)
    const passwordClick=()=>{
        setShowpassword(!showpassword)
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = (e)=>{
        e.preventDefault()
        getLoginData(email, password)
        setEmail("")
        setPassword("") 
    }
    
  return (
    <>
    <div className=' h-screen items-center flex justify-center bg-zinc-100'>
        <div className='shadow-boxShadow h-[600px] w-[400px] bg-zinc-200 text-zinc-950 flex flex-col p-5 rounded-3x items-center gap-4'>
            <img className='h-auto w-[100px]' src="public/Login Img.png" alt="Login Img" />
            <h1 className='text-4xl font-light text-center '>Welcome Back To <br />
            <span className='font-bold'>Task Point</span></h1>
            <form onSubmit={(e)=>{
                loginHandler(e)
            }}
            className ='flex flex-col gap-5 w-full'>
            <div className='flex flex-col'>
            <label>Email</label>
             <input value={email}
             onChange={(e)=>{
                setEmail(e.target.value)
             }}
             className='bg-zinc-200 text-zinc-950 text-xl px-5 py-3 rounded-md border-2 border-zinc-300 outline-none' 
             type='email' placeholder='Email'/>
             </div>
            <div className='flex flex-col mt-4'>
            <label>Password</label>
            <div className='relative'>
            <input value={password}
             onChange={(e)=>{
                setPassword(e.target.value)
             }}
            className='bg-zinc-200 text-zinc-950 text-xl px-5 py-3 rounded-md border-2 border-zinc-300 outline-none w-full'
            type={showpassword ? "password":"text"}
            placeholder='Password' />
                <div className='absolute inset-y-0 right-4 flex items-center cursor-pointer'>
                    {
                        showpassword ? <FaRegEye size="1.2em" onClick={passwordClick}/>:<FaEyeSlash size="1.2em" onClick={passwordClick}/>
                    }
                     
                </div>
            </div>
        </div>
                <h1 className='place-self-end text-base font-semibold text-zinc-950'>Forget Password?</h1>
                <button className='px-4 py-3 text-2xl font-semibold bg-zinc-950 text-zinc-50 rounded-md '>Log In</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login