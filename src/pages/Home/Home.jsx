import { Alert, Box, Container, Grid, Typography } from '@mui/material'
import React, { createContext, useState } from 'react'
import Categories from '../../components/Categories/Categories'
import Products from '../../components/Products/Products'
import { useAuthStore } from '../../store/useAuthSotre'





export default function Home() {
const token =useAuthStore((state)=>state.token);
  return (
  <>
{token?<Alert severity='success'>Welcome Back</Alert>:null}
  
 <Categories/>
 <Products/>
  </>
  )
}
