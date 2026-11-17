import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { registerSchema } from '../../validations/authSchema'
import axios from 'axios'

export default function Register() {
    const navigate=useNavigate();
    const[serverError,setServerError]=useState(null);
    const[success,setSuccess]=useState(false);
  const{register,handleSubmit,formState:{errors,isSubmitting}}  =useForm({
resolver:yupResolver(registerSchema),mode:"onBlur"
    })

    const onSubmit=async(data)=>{
        try{
            const response=await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`,data);
setSuccess(true);
navigate('/login');
        }catch(err){
            console.log(err.response);
            setServerError("Registeration Failed");
        }

    }
  return (
  <>
  <Container maxWidth='sm'>
<Box sx={{backgroundColor:"white",boxShadow:3,p:4,borderRadius:2}}>
<Typography sx={{textAlign:'center',mb:3}} component={'h1'} variant='h4'>Create Account</Typography>
{
    serverError?<Alert severity='error'>{serverError}</Alert>:null
}
<Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
    <TextField label='FullName' fullWidth margin='normal' {...register('fullName')} error={errors.fullName} helperText={errors.fullName?.message}></TextField>
    
    <TextField label='UserName' fullWidth margin='normal'{...register('userName')} error={errors.userName} helperText={errors.userName?.message}></TextField>
    <TextField label='Email' fullWidth margin='normal'{...register('email')} error={errors.email} helperText={errors.email?.message}></TextField>
    <TextField label='PhoneNumber' fullWidth margin='normal'{...register('phoneNumber')} error={errors.phoneNumber} helperText={errors.phoneNumber?.message}></TextField>
    <TextField label='Password' type='password' fullWidth margin='normal'{...register('password')} error={errors.password} helperText={errors.password?.message}></TextField>
    <Button disabled={isSubmitting} type='submit' variant='contained' fullWidth sx={{mt:2}}>
        {
            isSubmitting?"Loading..." :"Register"
        }
        </Button>

</Box>
<Typography variant='body2' sx={{textAlign:'center',mt:2}}>Already have an account?
    <Link to={'/login'}>Login</Link>
</Typography>
</Box>
  </Container>
  
  </>
  )
}
