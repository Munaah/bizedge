import { Typography, Container, Box } from '@mui/material';
import Appstore  from '../assets/appstore.svg';
import playStore  from "../assets/playstore.svg";
import logo from '../assets/logo.svg';

export const Footer = () => {
  const FooterDetails = {
    one: ['Company', 'Product', 'Pricing', 'Support'],
    two: ['People Management', 'Payroll', 'Asset Managenment', 'Vehicle Management', 'Document Generation'],
    three: ['Get in touch', 'Book a Demo'],
    four: ['Help Center', 'FAQs', "Insights"]
  };
  return (
    <Box sx={{
      bgcolor: '#FAFAFA',
      height: { sm: 'full', md: '485px' },
      display: "flex",
      // gridTemplateColumns: "2, 1fr",
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: "3rem"
    }}>

      {/* {width: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: '1440px' } */}

      <Container
        sx={{
          padding: '4rem',
          display: { sm: 'grid', md: 'flex' },
          flexWrap: "no-wrap",
          justifyContent: 'space-between',
          margin: '0 auto',
        }}
      >
        <Box sx={{ display: 'grid' }}>
          <img src={logo} alt="bizedge logo" style={{ marginBottom: '9rem' }} />
          <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'inline-grid' } }}>
            <img src={Appstore} alt="appstore" />
            <img src={playStore} alt="playstore" />
          </Typography>
        </Box>

        <Container sx={{display: "flex", flexWrap: "wrap",
          justifyContent: {sm: 'space-around'} ,gap: "5rem",
          margin: '0 auto',}}>

        <Box sx={{ lineHeight: '5rem' }}>
          <Typography fontWeight={600}>Home</Typography>

          {FooterDetails.one.map((deets) => (
            <Typography key={deets} mt={4}>
              {deets}
            </Typography>
          ))}
        </Box>

        <Box>
          <Typography fontWeight={600}>Apps</Typography>
          {FooterDetails.two.map((two) => (
            <Typography key={two} mt={4}>
              {two}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Typography fontWeight={600}>Resources</Typography>
          {FooterDetails.four.map((four) => (
            <Typography key={four} mt={4}>
              {four}
            </Typography>
          ))}
        </Box>

        <Box>
          <Typography fontWeight={600}>Contact</Typography>
          {FooterDetails.three.map((three) => (
            <Typography key={three} mt={4}>
              {three}
            </Typography>
          ))}
        </Box>
        </Container>

      </Container>
    </Box>
  );
};
