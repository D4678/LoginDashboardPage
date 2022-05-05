import { TextField, FormControlLabel, Checkbox, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
      tc: data.get('tc'),
    }
    if (actualData.name && actualData.email && actualData.password && actualData.password_confirmation && actualData.tc !== null) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById('registration-form').reset()
        setError({ status: true, msg: "Registration Successful", type: 'success' })
        navigate('/dashboard')
      } else {
        setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error' })
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }
  return <>
    <Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='Agencyname' name='Agencyname' label='Agencyname' />
      <TextField margin='normal' required fullWidth id='AgencyWebsite' name='AgencyWebsite' label='AgencyWebsite' />
      <TextField margin='normal' required fullWidth id='ContactPersonNo' name='ContactPersonNo' label='ContactPersonNo' type='ContactPersonNo' />
      <TextField margin='normal' required fullWidth id='Contact Person Designation' name='Contact Person Designation' label='Contact Person Designation' type='Contact Person Designation' />
      <TextField margin='normal' required fullWidth id='Your Mobile No' name='Your Mobile No' label='Your Mobile No' type='Your Mobile No' />
      <TextField margin='normal' required fullWidth id='Your Email' name='Your Email' label='Your Email' type='Your Email' />
      <TextField margin='normal' required fullWidth id='Country' name='Country' label='Country' type='Country' />
      <TextField margin='normal' required fullWidth id='State' name='State' label='State' type='State' />
      <TextField margin='normal' required fullWidth id='Work Experience' name='Work Experience' label='Work Experience' type='Work Experience' />
      <TextField margin='normal' required fullWidth id='No Of Streamers' name='No Of Streamers' label='No Of Streamers' type='No Of Streamers' />
   
      <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc" />} label="I agree to term and condition." />
    
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Join</Button>
      </Box>
      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
    </Box>
  </>;
};

export default Registration;