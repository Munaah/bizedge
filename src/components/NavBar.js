import React from 'react'
import {
    Typography,
    Container,
    Box,
    Toolbar,
    Button,
  } from '@mui/material';
  
  import logo from '../assets/logo.svg';
  
  const NavBar = () => {
    
    const navItems = ['Home', 'Request a demo'];
    return (
      <Box sx={{ fontFamily: 'blacksans' }}>
          <Container sx={{ padding: '20px 0', marginBottom: '5%' }}>
            <Toolbar>
              <Typography variant="h6" sx={{ paddingRight: { sm: 0, md: 60, lg: 75 } }}>
                <img src={logo} alt="logo" />
              </Typography>
  
              {navItems.map((items, index) => (
                <Button
                  size="medium"
                  color="inherit"
                  sx={{
                    flexGrow: 1,
                    display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' },
                    background: '#EOEEFO',
                  }}
                  key={index}
                >
                  {items}
                </Button>
              ))}
              <Button
                size="medium"
                color="inherit"
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' },
                  backgroundColor: '#E0EEF0',
                }}
              >
                Sign In
              </Button>
            </Toolbar>
            
          </Container>
        </Box>
    )
  }
  
  export default NavBar