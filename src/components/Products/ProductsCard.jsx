import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

import { Link } from 'react-router'

export default function ProductsCard({products}) {
  return (
   <>
   <Card>
<CardActionArea  component={Link} to={`products/${products.id}`}>
    <CardMedia component={'img'} image={products.image} alt={products.name}/>

</CardActionArea>
<CardContent>
   <Typography variant="h6">
        {products.name}
    </Typography>
</CardContent>
   </Card>
   </>
  )
}
