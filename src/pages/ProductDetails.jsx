
import UseProduct from '../hooks/UseProduct'
import { useNavigate, useParams } from 'react-router';
import { Alert, Box, Button, Card, CardMedia, Chip, CircularProgress, Divider, Rating, Typography } from '@mui/material';
import ReviewItem from '../components/ReviewItem/ReviewItem';

import useAddToCart from '../hooks/useAddToCart';
import { useAuthStore } from '../store/useAuthSotre';
import { Slide, toast } from 'react-toastify';


export default function ProductDetails() {
 const token=useAuthStore((state)=>state.token);
const navigate=useNavigate();
    const{id}=useParams();
    const{data,isPending,isError}=UseProduct(id);
const{mutate:addToCart,isPending:addToCartPending}=useAddToCart();
      if(isPending) return<CircularProgress/>
        if(isError) return<Alert severity='error'>Failed To Load Product Details.</Alert>
      const inStock=data.quantity>0;
 const handleAddToCart=()=>{
  if(!token){
    navigate('/login');
    return;
  }
  addToCart(data.id,{
    onSuccess:()=>{
toast.success('Added To Cart', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Slide,
});
    },
    onError:()=>{
console.log("error");
    }
  });
 }
  return (
   <>
   <Box sx={{display:'grid',gap:4,gridTemplateColumns:{
    xs:"1fr",
    md:"1fr 1fr"
   }}}>
 <Card>
 

            <CardMedia component={'img'} image={data.image} sx={{objectFit:'contain',maxHeight:400}}/>

       
    </Card>
    <Box>
            <Typography variant='h4' component={'h2'}>{data.name}</Typography>
   <Rating value={data.rating} readOnly></Rating>
   <Typography color='primary' variant='h4'>${data.price}</Typography>
   <Chip label={inStock?"InStock":"OutStock"} color={inStock?"success":"error"}></Chip>
   <Typography>{data.description}</Typography>
   <Button variant='contained' disabled={!inStock||addToCartPending}  onClick={handleAddToCart}  >Add To Cart</Button>
    </Box>
   </Box>
   <Divider sx={{my:3,borderBlockWidth:3}} />
   {
  data.reviews.map((review, index) => (
    <ReviewItem
      key={review.id ?? index}
      review={review}
    />
  ))
}
   
   </>
  )
}
