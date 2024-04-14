import {
    Typography,
    Grid,
    Box,
    Button,
  } from '@mui/material';
  import leftAdvert from '../assets/leftAdvert.svg';
  import rightAdvert from '../assets/rightAdvert.svg';
  import centerIcon from '../assets/centerIcon.svg';
  
  export const Hero = () => {
    return (
      <>
         {/* style={{width: "100vw"}} */}
         <Box
            sx={{ display: 'flex', justifyContent: 'space-between', margin: { xs: '4%', sm: '5%', md: '0%' } }}
          >
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }}>
              <img src={leftAdvert} alt="left Image" />
            </Box>
  
            <Box justify="center" style={{ justifyContent: 'center' }}>
              <Box maxWidth="md" spacing={4} pt={4}>
                <Typography
                  variant="h3"
                  align="center"
                  fontWeight={600}
                  sx={{
                    fontSize: { xs: '1.5rem', sm: '1.6rem', md: '2.5rem', lg: '2.7rem', xl: '3rem' },
                  }}
                >
                  Unlock Your Full HR Potential With Our Powerful People Management App.
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ fontSize: { xs: '.9rem', sm: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem' } }}
                >
                  Elevate your HR game with automated employee onboarding, intuitive performance tracking
                  and seamless team collaboration.
                </Typography>
              </Box>
  
              <Grid container spacing={2} justifyContent={'center'} pt={4}>
                <Grid item>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ backgroundColor: '#E0EEF0', color: '#2898A4' }}
                  >
                    Sign Up for Free
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ backgroundColor: '#2898A4', color: 'white' }}
                  >
                    Build a demo
                  </Button>
                </Grid>
              </Grid>
  
              <Grid container spacing={4} justifyContent={'center'} sx={{ paddingTop: '15%' }}>
                <img src={centerIcon} alt="center Social Icons" style={{ width: '40%' }} />
              </Grid>
            </Box>
  
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }}>
              <img src={rightAdvert} alt="right Image" />
            </Box>
          </Box>
      </>
    )
  }
  