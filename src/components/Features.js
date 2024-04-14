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
  
  import people from '../assets/People.svg';
  import phone from '../assets/phoneApp.svg';
  import payroll from '../assets/payroll.svg';
  import track from '../assets/trackOne.svg';
  import tracktwo from '../assets/trackTwo.svg';
  
  
  export const Features = () => {
      return (
          <>
              <Box>
          <Box width={"90vw"} display={"grid"} sx={{margin: "0 auto"}}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', padding: '3rem  0 1rem 0' }}>
              Our Unique Features
            </Typography>
            <Typography variant="p" sx={{}}>
              Experience the ease of employee onboarding, managing time-off, benefits, and more.
            </Typography>
            </Box>
  
  {/* First content */}
                  <Container >
          {/* { xs: 'column', md: 'row' }, backgroundColor: '#EBEFFA', */}
                      <Box borderRadius={6} display={{md: "flex", sm: "grid"}} justifyContent={"space-between"} alignItems={"center"} p={4}  height={{sm: "600px", md: ""}}  
            sx={{ margin: '1rem auto',  backgroundColor: '#EBEFFA', position: {md: "relative", marginBottom: "4rem"}}}>
  
                          <Box p={3} display={"grid"} sx={{textAlign: {sm: "center", md: "left"}, width: {sm: "80vw", md: '1000.28px'}}}>
                              <Typography variant="caption" color={'blue'} textAlign={{sm: "center", md: "left"}}> People Analytics, Time & Attendance, Core HR
                              </Typography>
                              <Typography
                py={2}
                                  variant="h4"
                                  sx={{ fontWeight: 600, lineHeight: '2.3rem', margin: {sm: "0 auto", md: "0"}}}
                              >
                                  Modern people <br/> Management is here.
                              </Typography>
                              <Typography variant="p" fontSize={'1rem'} sx={{lineHeight: '1.5rem'}}>
                                  Experience the ease of creating time-off <br /> benefit and onboarding and offboarding
                              </Typography>
                          </Box>
  
                          <Box sx={{position: {sm: "relative"}, right: "0"}}> <img width={400} src={people} alt="people connecting"/> </Box>
                      </Box>
                  </Container>
  
  {/* second content here */}
          <Container >
          {/* { xs: 'column', md: 'row' }, backgroundColor: '#EBEFFA', */}
                      <Box borderRadius={6} gap={13} display={{md: "flex", sm: "grid"}} justifyContent={"space-evenly"} alignItems={"center"} p={4} height={{sm: "400px", md: "500"}} sx={{ margin: '1rem auto',  backgroundColor: '#FEF6E6', position: {md: "relative"}, flexDirection: { xs: 'column', md: 'row-reverse' }}}>
  
                          <Box p={3} display={"grid"} sx={{textAlign: {sm: "center", md: "left"}, width: {sm: "80vw", md: '1000.28px'}}}>
                              <Typography variant="caption" color={'orange'} textAlign={{sm: "center", md: "left"}}>Time & Attendance
                              </Typography>
                              <Typography
                py={2}
                                  variant="h4"
                                  sx={{ fontWeight: 600, lineHeight: '2.3rem', margin: {sm: "0 auto", md: "0"}}}
                              >
                                  Track Employee <br /> attendance easily
                              </Typography>
                              <Typography variant="p" fontSize={'1rem'} sx={{lineHeight: '1.5rem'}}>
                Set up an efficient clock in & clock out tool for your employees, whether they work
                                  onsite or remotely.
                              </Typography>
                          </Box>
  
                          <Box sx={{position: {sm: "relative"}}}> 
                <Box display={'flex'} justifyContent={"center"} alignItems={'center'} gap={0} >
                  <img src={track} alt="people connecting" height={500} style={{position: {sm: "relative", md:"absolute"}, zIndex: '50', bottom: "40px"}}/> 
                  <img src={tracktwo} alt="people connecting" height={250} style={{ position: "relative", right: "90px"}}/>
                </Box>
                
              </Box>
                      </Box>
                  </Container>
  
  {/* newwwww */}
  
                  <Container sx={{ margin: '10rem auto', width: '1104.28px', maxHeight: '504.72px' }}>
                      <Box
                          sx={{
                              display: 'flex',
                              flexDirection: { xs: 'column', md: 'row' },
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              backgroundColor: '#FFE5E5',
                              borderRadius: '20px',
                              overflowX: 'hidden',
                              gap: 4,
                              textAlign: { md: 'left' },
                          }}
                      >
                          <div
                              style={{
                                  width: { xs: '100%', md: '20%' },
                                  margin: '6rem',
                                  position: 'relative',
                                  maxWidth: '400px',
                              }}
                          >
                              <Typography variant="caption" color={'tomato'}>
                                  Payroll
                              </Typography>
                              <Typography
                                  variant="h4"
                                  sx={{ fontWeight: 700, lineHeight: '2.3rem', padding: '1.2rem 0' }}
                              >
                                  Autopilot your payroll
                              </Typography>
                              <Typography variant="p" fontSize={'1rem'}>
                                  Spend Less time doing your company's calculations, deductions and pay your team easily.
                                  Payroll made simple.
                              </Typography>
                          </div>
                          <div
                              style={{
                                  width: { xs: '80%', md: '20%' },
                                  display: 'flex',
                                  justifyItems: 'center',
                                  alignItems: 'center',
                              }}
                          >
                              <img
                                  src={payroll}
                                  alt="people connecting"
                                  style={{
                                      position: 'absolute',
                                      height: '30vw',
                                      right: '16%',
                                      paddingBottom: '3.5rem',
                                  }}
                              />
                          </div>
                      </Box>
                  </Container>
  
                  <Container sx={{ margin: '10rem auto' }}>
                      <Box
                          sx={{
                              display: 'flex',
                              flexDirection: { xs: 'column', md: 'row' },
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              backgroundColor: '#EBEFFA',
                              borderRadius: '20px',
                              overflowX: 'hidden',
                              gap: 4,
                              textAlign: { md: 'left' },
                          }}
                      >
                          <div
                              style={{
                                  width: { xs: '100%', md: '20%' },
                                  margin: '6rem',
                                  position: 'relative',
                                  maxWidth: '450px',
                              }}
                          >
                              <Typography variant="caption" color={'blue'}>
                                  MyEdge (employee self-service)
                              </Typography>
                              <Typography
                                  variant="h4"
                                  sx={{ fontWeight: 700, lineHeight: '2.3rem', padding: '1.2rem 0' }}
                              >
                                  Get the best out of Work-life
                              </Typography>
                              <Typography variant="p" fontSize={'1rem'}>
                                  MyEdge app has features that manage employee information that helps achieve a stress
                                  free and personalised self-service experience.
                              </Typography>
                          </div>
                          <div
                              style={{
                                  width: { xs: '80%', md: '20%' },
                                  display: 'flex',
                                  justifyItems: 'center',
                                  alignItems: 'center',
                              }}
                          >
                              <img
                                  src={phone}
                                  alt="people connecting"
                                  style={{
                                      position: 'absolute',
                                      height: '32vw',
                                      right: '16%',
                                      paddingTop: '3.5rem',
                                  }}
                              />
                          </div>
                      </Box>
                  </Container>
              </Box>
          </>
      );
  };
  