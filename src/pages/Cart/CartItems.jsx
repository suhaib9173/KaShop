

import { Alert, Box, Button, CircularProgress, Typography } from '@mui/material';
import { useAuthStore } from '../../store/useAuthSotre';
import { Link } from 'react-router';
import CartSummary from '../../components/Cart/CartSummary/CartSummary';
import CartItem from '../../components/Cart/CartItem/CartItem';
import useCart from '../../hooks/useCart';

export default function CartItems() {
 const token=useAuthStore((state)=>state.token);
    const{data,isPending,isError}=useCart();;
if(!token){
    return(
        <Box sx={{display:'flex',flexDirection:'column',gap:3,alignItems:'center',justifyContent:'center',minHeight:'80vh'}}>
            <Typography>Please Login To View Cart Items.</Typography>
            <Button variant='contained' component={Link} to={'/login'}>Login</Button>
        </Box>
        
        
    )
}





    if(isPending){
        return <CircularProgress/>
    }
    if(isError){
        return <Alert severity='error'>Failed To Load CartItems.</Alert>
    }

    if(data.items.length==0){
        return(
            <Box sx={{display:'flex',flexDirection:'column',gap:3,alignItems:'center',justifyContent:'center',minHeight:'80vh'}}>
                <Typography variant='h4'>Cart is Empty</Typography>
                 <Button variant='contained' component={Link} to={'/'}>ShopNow</Button>
            </Box>
        )
    }
  return (
  <>
<Box sx={{display:'grid',gap:3,gridTemplateColumns:{
    xs:'1fr',
    md:'2fr 1fr'
}}}>
    <Box>
{
    data?.items.map(item=>
        <CartItem item={item} key={item.productId} />
    )
}

</Box>
<Box>

<CartSummary total={data.cartTotal}/>

</Box>





    
</Box>
  
  
  </>
  )
}
