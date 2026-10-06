import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BalanceIcon from '@mui/icons-material/Balance';

function Header() {
  return (
       <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"#2563EB"}}>
        <Toolbar variant="dense">
          <BalanceIcon edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            
          </BalanceIcon>
          <Box sx={{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"}}>
            <Typography
            variant="h6"
            component="div"
            sx={{
              color: 'inherit',
              fontFamily:"fangsong",
              fontWeight:""
            }}
          >
            FitScale
          </Typography>

          <Typography
          variant="h6"
            component="div"
            sx={{
              color: 'inherit',
              fontFamily:"fangsong",
              fontWeight:"",
              marginRight:"80px"
            }}
          >
            BMI Check 
          </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}

export default Header;
