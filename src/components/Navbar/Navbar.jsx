import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import { Link } from "react-router";
import { useAuthStore } from "../../store/useAuthSotre";



export default function Navbar() {
const token=useAuthStore((state)=>state.token);
const logout=useAuthStore((state)=>state.logout);

  return (
    <>
   <AppBar position="static">
<Toolbar>
  <Typography component={Link} to={'/'}   variant="h6"  sx={{flexGrow:1,textDecoration:'none',color:'inherit'}}>KaShop</Typography>
  <Box sx={{flexGrow:1}}>
<Button  color="inherit" component={Link} to={'/'}>Home</Button>
<Button  color="inherit" component={Link} to={'/cart'}>Cart</Button>
{token?<>
<Button  color="inherit" onClick={logout}>Logout</Button>
</>:<>
<Button  color="inherit" component={Link} to={'/login'}>Login</Button>
<Button color="inherit" component={Link} to={'/register'}>Register</Button>
</>}


  </Box>
</Toolbar>
   </AppBar>
    </>
  )
}
