import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

function Home() {

    const [weight,setWeight]=useState('')
    const [height,setHeight]=useState('')
    const [result,setResult]=useState({})



    const calculate=()=>{
        const dis = {
           weight:weight,
           height:height
        }
        console.log(dis);

        const bmi = dis.weight/(dis.height*dis.height)
        console.log(bmi);

        if (weight=="" || height=="") {
            alert("Fill all Fields")
        } else if (bmi<18.5) {
           setResult({
            bmi:bmi.toFixed(2),
            status:"🔵 Underweight",
             range: "💚 Healthy BMI: 18.5 – 24.9"
           })
        } else if (bmi<24.9) {
setResult({
            bmi:bmi.toFixed(2),
            status:"🟢 Normal weight",
             range: "💚 Healthy BMI: 18.5 – 24.9"
           })    
            } else if (bmi<29.9) {
            setResult({
            bmi:bmi.toFixed(2),
            status:"🟠 Overweight",
             range: "💚 Healthy BMI: 18.5 – 24.9"
           }) 
        } else if (bmi>=30) {
              setResult({
            bmi:bmi.toFixed(2),
            status:"🔴 Obese",
             range: "💚 Healthy BMI: 18.5 – 24.9"
           }) 
            
        } else {
            setResult({
            bmi:"",
            status:"Enter valid inputs",
             range: ""
           }) 

        }
    }
  return (
 <>
  <Box
      sx={{
     width: '100%',
        minHeight: '88vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ' #F5F7FA',
      }}
    >
      <Paper elevation={24}sx={{
  width: {
    xs: '90%',
    sm: '70%',
    md: '40%'
  },
  minHeight: 500,
  borderRadius: 3,
  backgroundColor:"#FFFFFF",
   boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
}}> <Typography variant='h4' sx={{fontFamily:"-moz-initial",display:"flex",justifyContent:"center",mt:"30px",color:"#0F172A"}}>
            Calculate Your BMI
            </Typography> 
            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",mx:"60px",mt:"30px"}}>
                <Typography>Weight</Typography> <br></br>
            <TextField onChange={(e)=>setWeight((e).target.value)} label="Enter Weight(kg)"/>  <br></br>

            <Typography>Height</Typography> <br></br>
            <TextField onChange={(e)=>setHeight((e).target.value)} label=" Enter height(m)"/> <br></br>  
<Button
  onClick={calculate}
  variant="contained"
  fullWidth
  size="large"
  sx={{
    mt: 2,
    py: 1.5,
    borderRadius: 2,
    backgroundColor: '#2563EB',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: '#1D4ED8'
    }
  }}
>
  Calculate BMI
</Button>

            </Box>
            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",mt:"20px",fontFamily:"cursive",mb:"25px"}}>
                <Typography >{result.bmi}</Typography>
                <Typography>{result.status}</Typography>
                <Typography>{result.range}</Typography>
            </Box>
            </Paper> 
    </Box>

 </>
  );
}

export default Home;
