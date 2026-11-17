
import UseProducts from '../../hooks/UseProducts'
import { Alert, Box, CircularProgress, Typography } from '@mui/material';
import ProductsCard from './ProductsCard';

export default function Products() {
    const{data,isPending,isError}=UseProducts();
    if(isPending) return<CircularProgress/>
    if(isError) return<Alert severity='error'>Failed To Load Products.</Alert>
  return (
    <>
    <Typography variant='h4'component={'h2'} sx={{mb:4}} >Products</Typography>
    <Box sx={{display:'grid',gap:2,gridTemplateColumns:{
        xs:"repeat(2,1fr)",
        sm:"repeat(3,1fr)",
        md:"repeat(4,1fr)",
    }}}>
{
        data.map(products=>
            <ProductsCard products={products}  key={products.id}/>
        )
    }
    
    </Box>
    
    </>
  )
}
