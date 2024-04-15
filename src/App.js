import React from 'react';
// import blackSans from '../src/fonts/blacksansblackwebfont.woff';
import {
  Typography,
  AppBar,
  Container,
  Grid,
  Box,
  CssBaseline,
  Toolbar,
  Button,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Footer} from './components/Footer';
import NavBar from './components/NavBar';
import {Hero}  from './components/Hero';
import  {Features } from './components/Features';
import  {SetGoals } from './components/SetGoals';
import { Accordion } from './components/Accordion';

const theme = createTheme({
  typography: {
    fontFamily: 'blacksans',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'blacksans';
          src: local('blacksans'), local('blacksansblack'), local('blacksanscondensed'), local('blacksanslight'), format('woff')
        }`,
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <main>
      {/* Hero Section begins  */}

      <Hero />

        {/* Second Section Starts Here */}
        <Container sx={{ padding: '3em 0', textAlign: 'center' }}>
          <hr
            style={{ justifyContent: 'space-between', display: { xs: 'hidden', sm: 'hidden', md: 'flex' } }}
          />

          <Features />

{/* another one */}
          <Box>
            <Box>
              <Typography variant="h4" fontWeight={600} pb={1}>
                We here to provide you with all you need
              </Typography>
              <Typography variant="caption" fontSize={15} maxWidth={100}>
                We hold your hand as your business takes each step. Our goal is <br /> to help your team
                run at its smoothest from day one.
              </Typography>
            </Box>

            {/* here */}
            <SetGoals />

            <div style={{ height: '100%' }}>
            
            {/* plan details starts here */}
              <Typography variant="h4" fontWeight={600} pb={2}>
                Choose the right plan for your business
              </Typography>

              <Box>
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: '',
                      alignItems: 'center',
                      margin: 'auto',
                      width: '23vw',
                      gap: '1rem',
                      backgroundColor: '#FAFAFA',
                      padding: '4px',
                      borderRadius: '24px',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#FCE2AF',
                        borderRadius: '24px',
                        display: 'flex',
                        justifyItems: 'space-around',
                        gap: '.4rem',
                        alignItems: 'center',
                        padding: '6px',
                        margin: '2px',
                      }}
                    >
                      <Typography fontWeight={600} padding={1}>
                        Yearly
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          borderRadius: '24px',
                          backgroundColor: '#FF6666',
                          padding: '5px',
                          marginLeft: '1rem',
                          color: 'white',
                          fontSize: '14px',
                        }}
                      >
                        Up to 33% Off
                      </Typography>
                    </div>

                    <div>
                      <Typography p={1}>Monthly</Typography>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 4,
                    maxWidth: '55vw',
                    margin: '1rem auto .1rem',
                    alignContent: 'center',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#2898A4',
                      width: '50%',
                      height: '4vw',
                      padding: '.7rem',
                      borderTopRightRadius: '12px',
                      borderTopLeftRadius: '12px',
                      color: 'white',
                      textAlign: 'center',
                      lineHeight: '.5rem',
                    }}
                  >
                    <Typography>BizEdge Suite</Typography>
                    <Typography variant="caption">(Recommended)</Typography>
                  </div>
                  <div
                    style={{
                      backgroundColor: '#f2f2f2',
                      width: '50%',
                      height: '4vw',
                      padding: '.7rem',
                      borderTopRightRadius: '12px',
                      borderTopLeftRadius: '12px',
                    }}
                  >
                    <Typography sx={{ paddingTop: '2%' }}>People</Typography>
                  </div>
                </div>

                <hr style={{ width: '55vw' }} />

                <Grid
                  container
                  flexDirection={'row-reverse'}
                  spacing={1}
                  sx={{ margin: '2rem auto', textAlign: 'center', width: '55vw', alignItems: '' }}
                >
                  <Grid item xs={12} md={3}>
                    <div
                      style={{
                        width: '100%',
                        height: '',
                        borderRadius: '12px',
                        padding: '1rem',
                        lineHeight: '1rem',
                      }}
                    >
                      <Typography variant="caption" color={'gray'}>
                        Pro
                      </Typography>
                      <Typography>1000 NGN</Typography>
                      <Typography variant="caption" sx={{ fontSize: '4px' }}>
                        (Minimum of 20 Employees)
                      </Typography>
                      <Button variant="outlined" disableElevation sx={{}}>
                        Get Started
                      </Button>
                    </div>
                  </Grid>

                  <Grid item xs={12} md={3}>
                    <div
                      style={{
                        width: '100%',
                        height: '',
                        backgroundColor: '#FCE2AF',
                        borderRadius: '12px',
                        padding: '1rem',
                        lineHeight: '1rem',
                      }}
                    >
                      <Typography variant="caption" color={'gray'}>
                        Business (popular)
                      </Typography>
                      <Typography>1000 NGN</Typography>
                      <Typography variant="caption" sx={{ fontSize: '4px' }}>
                        (Minimum of 20 Employees)
                      </Typography>
                      <Button variant="outlined">Get Started</Button>
                    </div>
                  </Grid>

                  <Grid item xs={12} md={3}>
                    <div
                      style={{
                        width: '100%',
                        height: '200px',
                        borderRadius: '12px',
                        padding: '1rem',
                        lineHeight: '1rem',
                      }}
                    >
                      <Typography variant="caption" color={'gray'}>
                        Startup
                      </Typography>
                      <Typography>300 NGN</Typography>
                      <Typography variant="caption" sx={{ fontSize: '4px' }}>
                        Per Employee/Month
                      </Typography>
                      <Button variant="outlined">Get Started</Button>
                    </div>
                  </Grid>

                </Grid>
              </Box>

              <Container>
              <Accordion title={"Project Management"} content={"Blah blah blah"}/>
              <Accordion title={"MyEdge-Employee Self Service"} content={"Blah blah blah"}/>
              <Accordion title={"Task Management"} content={"Blah blah blah"}/>
              <Accordion title={"Customer Support"} content={"Blah blah blah"}/>
              <Accordion title={"Time Off Mangement"} content={"Blah blah blah"}/>
              <Accordion title={"Reports"} content={"Blah blah blah"}/>
              <Accordion title={"Document Management"} content={"Blah blah blah"}/>
              <Accordion title={"Employee Ombparding"} content={"Blah blah blah"}/>
              <Accordion title={"Time and Attendance Management"} content={"Blah blah blah"}/>
              <Accordion title={"Payroll"} content={"Blah blah blah"}/>
              <Accordion title={"Payroll - Diect Deposit"} content={"Blah blah blah"}/>
              <Accordion title={"Accounting -Income"} content={"Blah blah blah"}/>
              <Accordion title={"Accounting -Reports"} content={"Blah blah blah"}/>
              <Accordion title={"Accounting - Expenditure"} content={"Blah blah blah"}/>
              <Accordion title={"Accounting - Contacts"} content={"Blah blah blah"}/>
              <Accordion title={"Accounting - Inventory"} content={"Blah blah blah"}/>
              <Accordion />
              </Container>

              

            </div>
          </Box>

        </Container>
        
        <Footer />
        
      </main>
    </ThemeProvider>
  );
}

export default App;
