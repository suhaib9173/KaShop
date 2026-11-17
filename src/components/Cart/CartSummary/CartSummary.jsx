import { Button, Divider, Paper, Typography } from '@mui/material'

export default function CartSummary({total}) {
  return (
   <>
   <Paper sx={{p:3}}>
   <Typography variant='h4'sx={{p:1}}>Order Summary</Typography>
   <Divider/>
   <Typography variant='h6'sx={{my:1}}>Total:${total}</Typography>
   <Button variant='contained' fullWidth>CheckOut</Button>
   </Paper>
   </>
  )
}
