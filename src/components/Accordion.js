import React, { useState } from 'react'
import {
  Typography,
  Container,
  Box,
} from '@mui/material';

export const Accordion = ({title, content}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleAcord = () => {
    setIsOpen(!isOpen)
  }



  return (
    <Container sx={{width: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: '1440px' }, margin: "0 auto", justifyContent: "center"}}>
      <div style={{borderTop: ".3px outset gray", }}>
        <div style={{display: 'flex', gap: 6, justifyContent: "space-between", cursor: "pointer", padding: "10px"}} onClick={toggleAcord}>
        <Typography color={"#2898A4"}>{title}</Typography>
        
        {isOpen ? <Typography color={"#2898A4"}><i className="fa-solid fa-chevron-up"></i></Typography> : <Typography color={"#2898A4"}><i className="fa-solid fa-chevron-down"></i></Typography>}
        </div>
      
        {isOpen && <Typography color={"black"} sx={{display: "flex", padding: "10px", height: "full"}}>{content}</Typography>}
      </div>
      
    </Container>
  )
}
