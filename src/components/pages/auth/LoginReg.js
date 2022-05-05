import { Grid, Card, Tabs, Typography, Tab, Box } from '@mui/material';
import { useState } from 'react';
import Registration from './Registration';
import UserLogin from './UserLogin';

//import Sidebar from '../../../Component/Sidebar'

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
   
    <div role='tabpanel' hidden={value !== index}>
      {
        value === index && (
          <Box>{children}</Box>
          
        )
      }
    </div>
  )
}
const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return <>

    <Grid container sx={{ height: '90vh',marginLeft:"26%" }}>
   
      <Grid item lg={5} sm={7} xs={12}>
        <Card sx={{ width: '100%', height: '100%' }}>
          <Box sx={{ mx: 3, height: 530 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
                <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>

              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <UserLogin />
            </TabPanel>

          </Box>

        </Card>
      </Grid>
    </Grid>
  </>;
};

export default LoginReg;