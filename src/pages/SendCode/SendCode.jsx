import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

export default function SendCode() {
    const navigate=useNavigate();
    const[serverError,setServerError]=useState(null);
    const[success,setSuccess]=useState(false);
   const{register,handleSubmit,formState:{errors,isSubmitting}}=useForm({

    })
    const onSubmit=async(data)=>{
        try{
            const response=await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/SendCode`,data);
setSuccess(true);
navigate('/resetpassword');
        }catch(err){
          
        setServerError(err.response.data.message);
        }

    }
  return (
   <>
   <Container maxWidth='sm'>
    <Box sx={{backgroundColor:"white",boxShadow:4,p:4,borderRadius:3}}>
     
       
     <Typography variant='h4' sx={{textAlign:'center',mb:2}} component={'h1'}>Reset Pasword</Typography>
     {serverError?<Alert severity='error'>{serverError}</Alert>:null}
<Box component={'form'} sx={{p:2}} onSubmit={handleSubmit(onSubmit)}>

<TextField label='email' fullWidth {...register('email')} ></TextField>
<Button type='submit' variant='contained' fullWidth sx={{mt:2}} disabled={isSubmitting} >{isSubmitting?"Resetting":"Send Code"}</Button>
    </Box>

</Box>
   </Container>
   
   </>
  )
}
