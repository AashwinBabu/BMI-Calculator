import { Box } from '@mui/material';
import { Button, Typography } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Box sx={{backgroundColor:"#2563EB",color:"white", display:"flex",justifyContent:"center",alignItems:"center",height:40}}>
        <Typography>
            © 2026 FitScale • BMI Calculator
        </Typography>
    </Box>
  );
}

export default Footer;
