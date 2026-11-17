import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { loginSchema, resetPassSchema } from '../../validations/authSchema'


export default function ResetPassword() {
    const navigate=useNavigate();
    const[serverError,setServerError]=useState(null);
    const[success,setSuccess]=useState(false);
    const{register,handleSubmit,formState:{errors,isSubmitting}}=useForm({
resolver:yupResolver(resetPassSchema),mode:'onBlur'
    })
const onSubmit=async(data)=>{
    try{
        const response=await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/ResetPassword`,data);
setSuccess(true);
navigate('/login');
    }catch(err){
        setServerError("Login Invalid");
    }

}
  return (
   <>
   <Container maxWidth="sm">
<Box sx={{backgroundColor:"white",p:4,boxShadow:3,borderRadius:2}}>
<Typography variant='h4' component={'h1'} sx={{textAlign:'center',mb:3}}>Reset Password</Typography>
{serverError?<Alert severity='error'>{serverError}</Alert>:null}
<Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
    <TextField label='code'{...register('code')} fullWidth margin='normal' error={errors.code} helperText={errors.code?.message}></TextField>
    <TextField label='newPassword' type='password' {...register('newPassword')} fullWidth margin='normal' sx={{mb:2}} error={errors.email} helperText={errors.email?.message}  ></TextField>

<TextField label='Email'{...register('email')} fullWidth margin='normal' error={errors.newPassword} helperText={errors.newPassword?.message}></TextField>

   

<Button disabled={isSubmitting} type='submit' variant='contained' fullWidth sx={{mt:3}}>
    {isSubmitting?"Loading...":"Submit"}</Button>


</Box>
</Box>
   </Container>
   </>
  )
}
