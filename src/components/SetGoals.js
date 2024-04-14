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
  
  export const SetGoals = () => {
    return (
      <Grid container spacing={4} sx={{ margin: '2rem 0', textAlign: 'left' }}>
        <Grid item xs={12} md={3}>
          <div
            style={{
              width: '100%',
              height: '200px',
              backgroundColor: '#F2F2F2',
              borderRadius: '12px',
              padding: '2rem',
            }}
          >
            <Typography variant="h6" pb={1} fontWeight={600}>
              Ease of Use
            </Typography>
            <Typography variant="caption" sx={{ fontSize: '13px' }}>
              With our simple interface, employers and employees find it easy to operate the
              app. No specific training is required.
            </Typography>
          </div>
        </Grid>
  
        <Grid item xs={12} md={3}>
          <div
            style={{
              width: '100%',
              height: '200px',
              backgroundColor: '#F2F2F2',
              borderRadius: '12px',
              padding: '2rem',
            }}
          >
            <Typography variant="h6" pb={1} fontWeight={600}>
              Built For You
            </Typography>
            <Typography variant="caption" sx={{ fontSize: '13px' }}>
              Designed to support growing businesses and teams. No hidden charge or contract.
            </Typography>
          </div>
        </Grid>
  
        <Grid item xs={12} md={3}>
          <div
            style={{
              width: '100%',
              height: '200px',
              backgroundColor: '#F2F2F2',
              borderRadius: '12px',
              padding: '2rem',
            }}
          >
            <Typography variant="h6" pb={1} fontWeight={600}>
              Safe & Secure
            </Typography>
            <Typography variant="caption" sx={{ fontSize: '13px' }}>
              We maintain the confidentiality, integrity and availability of your data. No
              third party has your data.
            </Typography>
          </div>
        </Grid>
  
        <Grid item xs={12} md={3}>
          <div
            style={{
              width: '100%',
              height: '200px',
              backgroundColor: '#F2F2F2',
              borderRadius: '12px',
              padding: '2rem',
            }}
          >
            <Typography variant="h6" pb={1} fontWeight={600}>
              Support
            </Typography>
            <Typography variant="caption" sx={{ fontSize: '13px' }}>
              Our customer success team is quick to offer assistance when you need it.
            </Typography>
          </div>
        </Grid>
      </Grid>
    )
  }
  