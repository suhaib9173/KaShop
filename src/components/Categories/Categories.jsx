import { Alert, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';



import Categoriesitem from './Categoriesitem';
import { UseCategories } from '../../hooks/UseCategories';

export default function Categories() {
   const{data,isLoading,isError}=UseCategories();
    if(isLoading) return <CircularProgress></CircularProgress>
    if(isError) return <Alert severity='error'>Failed To Load Categories.</Alert>
  return (
   <>
   <Typography component={'h2'} variant='h4' sx={{mb:2}}>Categories</Typography>
   <Box sx={{display:'grid',gap:2,gridTemplateColumns:{
      xs:"repeat(2,1fr)",
      sm:"repeat(3,1fr)",
      md:"repeat(4,1fr)"
   }}}>
   {
    data.map(category=>
       <Categoriesitem category={category}   key={category.id}/>
    )
   }

   </Box>
   </>
  )
}
