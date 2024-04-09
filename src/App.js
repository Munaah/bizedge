import React from "react";
import { Typography, AppBar, Container, Grid, Box, CssBaseline, Toolbar, Button, Paper, Stack, ListItem, Card } from "@mui/material";
import logo from "../src/assets/logo.svg"
import leftAdvert from "../src/assets/leftAdvert.svg"
import rightAdvert from "../src/assets/rightAdvert.svg"
import centerIcon from "../src/assets/centerIcon.svg"
import people from "../src/assets/People.svg"
import phone from "../src/assets/phoneApp.svg"
import payroll from "../src/assets/payroll.svg"
import track from "../src/assets/trackOne.svg"
import tracktwo from "../src/assets/trackTwo.svg"


function App() {

  const navItems = ["Home", "Request a demo"]

  return (
    <>
      <CssBaseline />
      <Box >
        <Container sx={{ padding: "20px 0", marginBottom: "5%" }}>

          <Toolbar>
            <Typography variant="h6" sx={{ paddingRight: { sm: 0, md: 60, lg: 75 } }}>
              <img src={logo} alt="logo" />
            </Typography>

            {navItems.map((items, index) =>
              <Button size="medium" color="inherit" sx={{ flexGrow: 1, display: { xs: "none", sm: "none", md: "block", lg: "block", xl: "block" }, background: '#EOEEFO' }} key={index} >{items}</Button>)}
            <Button size="medium" color="inherit" sx={{ flexGrow: 1, display: { xs: "none", sm: "none", md: "block", lg: "block", xl: "block" }, backgroundColor: "#E0EEF0" }}>Sign In</Button>

          </Toolbar>
        </Container>
      </Box>

      <main > {/* style={{width: "100vw"}} */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: { xs: "4%", sm: "5%", md: "0%" } }}>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block", xl: "block" } }}>
            <img src={leftAdvert} alt="left Image" />
          </Box>

          <Box justify="center" style={{ justifyContent: "center" }}>
            <Box maxWidth="md" spacing={4} pt={4}>
              <Typography variant="h3" align="center" sx={{ fontSize: { xs: "1.5rem", sm: "1.6rem", md: "2.5rem", lg: "2.7rem", xl: "3rem" } }} >Unlock Your Full HR Potential With Our Powerful People Management App.</Typography>
              <Typography variant="h6" align="center" sx={{ fontSize: { xs: ".9rem", sm: "1rem", md: "1.1rem", lg: "1.2rem", xl: "1.3rem" } }}>Elevate your HR game with automated employee onboarding, intuitive performance tracking and seamless team collaboration.</Typography>
            </Box>

            <Grid container spacing={2} justifyContent={"center"} pt={4}>
              <Grid item>
                <Button variant="contained" size="large" sx={{ backgroundColor: "#E0EEF0", color: "#2898A4" }}>Sign Up for Free</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" size="large" sx={{ backgroundColor: "#2898A4", color: "white" }}>Build a demo</Button>
              </Grid>
            </Grid>

            <Grid container spacing={4} justifyContent={"center"} sx={{ paddingTop: "15%" }}>
              <img src={centerIcon} alt="center Social Icons" style={{ width: "40%" }} />
            </Grid>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block", xl: "block" } }}>
            <img src={rightAdvert} alt="right Image" />
          </Box>
        </Box>

        {/* Second Section Starts Here */}

        <Container sx={{ padding: "3em 0", textAlign: "center" }}>
          <hr style={{ justifyContent: 'space-between', display: { xs: "hidden", sm: "hidden", md: "flex" } }} />

          <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold", padding: "3rem  0 1rem 0" }}>Our Unique Features</Typography>
            <Typography variant="p" sx={{}}>Experience the ease of employee onboarding, managing time-off, benefits, and more.</Typography>

            <Container sx={{ margin: "10rem auto",  width: "1104.28px", maxHeight: "504.72px" }}>
              <Box sx={{display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', backgroundColor: "#EBEFFA", borderRadius: "20px", overflowX: "hidden", gap: 4, textAlign: {md: "left"}}}>
                <div style={{width: { xs: '100%', md: '20%' }, margin: '6rem', position: "relative", maxWidth: "400px"}}>
                <Typography variant="caption" color={"blue"} >People Analytics, Time & Attendance, Core HR</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700, lineHeight: "2.3rem", padding: "1.2rem 0" }}>Modern people Management is here.</Typography>
                  <Typography variant="p" fontSize={"1.3rem"}>Experience the ease of creating time-off benefit and onboarding and offboarding</Typography>
                </div>
                <div style={{width: { xs: '80%', md: '20%' } , display: "flex", justifyItems: "center", alignItems: "center"}}>
                  <img src={people} alt="people connecting" style={{position: "absolute", height:"30vw", right: "13%", padding: "3rem 0"}}/>                 
                </div>
              </Box>
            </Container>

            <Container sx={{ margin: "10rem auto",  width: "1104.28px", maxHeight: "504.72px" }}>
              <Box sx={{display: 'flex', flexDirection: { xs: 'column', md: 'row-reverse' }, justifyContent: 'space-between', alignItems: 'center', backgroundColor: "#FEF6E6", borderRadius: "20px", overflowX: "hidden", gap: 4, textAlign: {md: "left"}}}>
                <div style={{width: { xs: '100%', md: '20%' }, margin: '6rem', position: "relative", maxWidth: "400px"}}>
                  <Typography variant="caption" color={"orange"} >TIme & Attendance</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700, lineHeight: "2.3rem", padding: "1.2rem 0"}}>Track Employee attendance easily</Typography>
                  <Typography variant="p" fontSize={"1rem"}>Set up an efficient clock in & clock out tool for your employees, whether they work onsite or remotely.</Typography>
                </div>
                <div style={{width: { xs: '80%', md: '20%' } , display: "flex", justifyItems: "center", alignItems: "center"}}>
                  <img src={tracktwo} alt="people connecting" style={{position: "relative", top: "50%", left: "93%"}}/>                  
                  <img src={track} alt="people connecting" style={{position: "absolute", width:"21vw", left: "16%" }}/>
                </div>
              </Box>
            </Container>

            <Container sx={{ margin: "10rem auto",  width: "1104.28px", maxHeight: "504.72px" }}>
              <Box sx={{display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', backgroundColor: "#FFE5E5", borderRadius: "20px", overflowX: "hidden", gap: 4, textAlign: {md: "left"}}}>
                <div style={{width: { xs: '100%', md: '20%' }, margin: '6rem', position: "relative", maxWidth: "400px"}}>
                  <Typography variant="caption" color={"tomato"} >Payroll</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700, lineHeight: "2.3rem", padding: "1.2rem 0"}}>Autopilot your payroll</Typography>
                  <Typography variant="p" fontSize={"1rem"}>Spend Less time doing your company's calculations, deductions and pay your team easily. Payroll made simple.</Typography>
                </div>
                <div style={{width: { xs: '80%', md: '20%' } , display: "flex", justifyItems: "center", alignItems: "center"}}>
                  <img src={payroll} alt="people connecting" style={{position: "absolute", height:"30vw", right: "16%", paddingBottom: "3.5rem"}}/>                 
                </div>
              </Box>
            </Container>

            <Container sx={{ margin: "10rem auto" }}>
              <Box sx={{display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', backgroundColor: "#EBEFFA", borderRadius: "20px", overflowX: "hidden", gap: 4, textAlign: {md: "left"}}}>
                <div style={{width: { xs: '100%', md: '20%' }, margin: '6rem', position: "relative", maxWidth: "450px"}}>
                  <Typography variant="caption" color={"blue"} >MyEdge (employee self-service)</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700, lineHeight: "2.3rem", padding: "1.2rem 0"}}>Get the best out of Work-life</Typography>
                  <Typography variant="p" fontSize={"1rem"}>MyEdge app has features that manage employee information that helps achieve a stress free and personalised self-service experience.</Typography>
                </div>
                <div style={{width: { xs: '80%', md: '20%' } , display: "flex", justifyItems: "center", alignItems: "center"}}>
                  <img src={phone} alt="people connecting" style={{position: "absolute", height:"32vw", right: "16%", paddingTop: "3.5rem"}}/>                 
                </div>
              </Box>
            </Container>

          </Box>

          <Box>
            <div>
              <Typography variant="h4" fontWeight={600} pb={1}>We here to provide you with all you need</Typography>
              <Typography variant="caption" fontSize={15} maxWidth={100}>We hold your hand as your business takes each step.  Our goal is <br /> to help your team run at its smoothest from day one.</Typography>
            </div>

            <Grid container spacing={4} sx={{margin: "2rem 0", textAlign: "left"}}>

              <Grid item xs={12} md={3} >
                <div style={{width: "100%", height: "200px",  backgroundColor: "#F2F2F2", borderRadius: "12px", padding: "2rem"}}>
                <Typography variant="h6" pb={1} fontWeight={600}>Ease of Use</Typography>
                <Typography variant="caption" sx={{fontSize: "13px"}}>With our simple interface, employers and employees find it easy to operate the app. No specific training is required.</Typography>
                </div>
              </Grid>

              <Grid item xs={12} md={3} >
                <div style={{width: "100%",height: "200px", backgroundColor: "#F2F2F2", borderRadius: "12px", padding: "2rem"}}>
                <Typography variant="h6" pb={1} fontWeight={600}>Built For You</Typography>
                <Typography variant="caption" sx={{fontSize: "13px"}}>Designed to support growing businesses and teams. No hidden charge or contract.</Typography>
                </div>
              </Grid>

              <Grid item xs={12} md={3}>
                <div style={{width: "100%",height: "200px", backgroundColor: "#F2F2F2", borderRadius: "12px", padding: "2rem"}}>
                <Typography variant="h6" pb={1} fontWeight={600}>Safe & Secure</Typography>
                <Typography variant="caption" sx={{fontSize: "13px"}}>We maintain the confidentiality, integrity and availability of your data. No third party has your data.</Typography>
                </div>
              </Grid>

              <Grid item xs={12} md={3}>
                <div style={{width: "100%", height: "200px", backgroundColor: "#F2F2F2", borderRadius: "12px", padding: "2rem"}}>
                <Typography variant="h6" pb={1} fontWeight={600}>Support</Typography>
                <Typography variant="caption" sx={{fontSize: "13px"}}>Our customer success team is quick to offer assistance when you need it.</Typography>
                </div>
              </Grid>

            </Grid>

            <div style={{height: "100vh"}}>
              <Typography variant="h4" fontWeight={600} pb={2}>Choose the right plan for your business</Typography>

              <Box>
                <div>
                  <div style={{display: "flex", justifyContent: "", alignItems: "center", margin: "auto", width: "23vw", gap: "1rem", backgroundColor: "#FAFAFA",  padding: "4px", borderRadius: "24px"}}>
                    <div style={{backgroundColor: "#FCE2AF", borderRadius: "24px", display: "flex", justifyItems: "space-around", gap: ".4rem",  alignItems: "center", padding: "6px",margin: "2px"}}>
                      <Typography fontWeight={600} padding={1}>Yearly</Typography>
                      <Typography variant="caption" sx={{borderRadius: "24px", backgroundColor: "#FF6666", padding: "5px", marginLeft: "1rem", color: "white", fontSize: "14px"}}>Up to 33% Off</Typography>
                    </div>

                    <div><Typography p={1}>Monthly</Typography></div>
                  </div>
                </div>

                <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 4, maxWidth: "55vw", margin: "1rem auto .1rem", alignContent: "center"}}>
                
                  <div style={{backgroundColor: "#2898A4", width: "50%", height: "4vw",padding: ".7rem", borderTopRightRadius: "12px", borderTopLeftRadius: "12px", color: "white", textAlign: "center", lineHeight: ".5rem"}}>
                    <Typography>BizEdge Suite</Typography>
                    <Typography variant="caption" >(Recommended)</Typography>
                    </div>
                  <div style={{backgroundColor: "#f2f2f2", width: "50%", height: "4vw", padding: ".7rem", borderTopRightRadius: "12px", borderTopLeftRadius: "12px"}}>
                    <Typography sx={{paddingTop: "2%"}}>People</Typography>
                  </div>

                </div>

                  <hr style={{width: "55vw"}} />

                  <Grid container flexDirection={"row-reverse"}  spacing={1} sx={{margin: "2rem auto", textAlign: "center", width: "55vw", alignItems: ""}}>

                    <Grid item xs={12} md={3} >
                      <div style={{width: "100%", height: "", borderRadius: "12px", padding: "1rem", lineHeight: "1rem"}}>
                        <Typography variant="caption" color={"gray"}>Pro</Typography>
                        <Typography>1000 NGN</Typography>
                        <Typography variant="caption" sx={{fontSize: "4px"}}>(Minimum of 20 Employees)</Typography>
                        <Button variant="outlined">Get Started</Button>
                      </div>
                    </Grid>

                    <Grid item xs={12} md={3} >
                      <div style={{width: "100%", height: "",  backgroundColor: "#FCE2AF", borderRadius: "12px", padding: "1rem", lineHeight: "1rem"}}>
                        <Typography variant="caption" color={"gray"}>Business (popular)</Typography>
                        <Typography>1000 NGN</Typography>
                        <Typography variant="caption" sx={{fontSize: "4px"}}>(Minimum of 20 Employees)</Typography>
                        <Button variant="outlined">Get Started</Button>
                      </div>
                    </Grid>
                  
                    <Grid item xs={12} md={3}>
                      <div style={{width: "100%", height: "200px",  borderRadius: "12px", padding: "1rem", lineHeight: "1rem"}}>
                        <Typography variant="caption" color={"gray"}>Startup</Typography>
                        <Typography>300 NGN</Typography>
                        <Typography variant="caption" sx={{fontSize: "4px"}}>Per Employee/Month</Typography>
                        <Button variant="outlined">Get Started</Button>
                      </div>
                    </Grid>

                  </Grid>
                  
              </Box>
            </div>
            
          </Box>

        </Container>

      </main>
    </>

  )
}

export default App