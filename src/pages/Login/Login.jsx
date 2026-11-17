import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { use, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { loginSchema } from '../../validations/authSchema'
import { useAuthStore } from '../../store/useAuthSotre'



export default function Login() {
const login=useAuthStore((state)=>state.login);
    const navigate=useNavigate();
    const[serverError,setServerError]=useState(null);
    const[success,setSuccess]=useState(false);
    const{register,handleSubmit,formState:{errors,isSubmitting}}=useForm({
resolver:yupResolver(loginSchema),mode:'onBlur'
    })
const onSubmit=async(data)=>{
    try{
        const response=await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Login`,data);
login(response.data.accessToken);
setSuccess(true);


navigate('/');

    }catch(err){
        setServerError("Login Invalid");
    }

}
  return (
   <>
   <Container maxWidth="sm">
<Box sx={{backgroundColor:"white",p:4,boxShadow:3,borderRadius:2}}>
<Typography variant='h4' component={'h1'} sx={{textAlign:'center',mb:3}}>Login</Typography>
{serverError?<Alert severity='error'>{serverError}</Alert>:null}
<Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
<TextField label='Email'{...register('email')} fullWidth margin='normal'  error={errors.email} helperText={errors.email?.message}></TextField>
<TextField label='Password' type='password' {...register('password')} fullWidth margin='normal' sx={{mb:2}} error={errors.password} helperText={errors.password?.message} ></TextField>

    <Link to={'/sendcode'} >ForgetPassword?</Link>

<Button disabled={isSubmitting} type='submit' variant='contained' fullWidth sx={{mt:3}}>
    {isSubmitting?"Loading...":"Log in"}</Button>
<Typography variant='body2' sx={{textAlign:'center',mt:2}}>Dont have an account?
    <Link to={'/register'}>Register</Link>
</Typography>
</Box>
</Box>
   </Container>
   </>
  )
}
