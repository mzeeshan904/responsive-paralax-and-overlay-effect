import React from 'react'
import { Box, Typography, styled, AppBar } from '@mui/material';
// import InstagramIcon from '@mui/icons-material/Instagram';

const CustomizedAppBar = styled(AppBar)`
  background-color: #2874f0;
  box-shadow: none;
  height: 112px;
  line-height: 0;
  background-color: white;
  color: black
`

const NavbarContainer = styled(Box)`
height:112px;
display:flex;
align-item: center;
justify-content:space-between;
box-sizing: border-box;

`;

const NavItemContainer = styled(Box)`
display:flex;
flex-direction: row;
align-item: center;
justify-content:space-between;

`

const NavIconsContainer = styled(Box)`
display:flex;
flex-direction: row;
align-item: center;
justify-content:space-between;
`


const Navbar = () => {

  const navImgUrl = 'https://wallnutsmurals.com/projects'

  // const wallnutImageUrl = 'https://cdn.myportfolio.com/570fa894016684b1a57722…0x400x4096.png?h=4b2a1c4af9fcdf9329a1b78dcd5a4695';
  const  url = 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100'
  return (


    <CustomizedAppBar>
      <NavbarContainer>
          <NavItemContainer>
            <Typography>Projects</Typography>
            <Typography>About</Typography>
            <Typography>Contact</Typography>
          </NavItemContainer>
          <Box>
            <img src={url} alt="navbar" style={{ width: 64, height: 64 }} />
          </Box>
          <NavIconsContainer>
            <Typography>icon1</Typography>
            <Typography>icon2</Typography>
            <Typography>icon3</Typography>
          </NavIconsContainer>
      </NavbarContainer>
    </CustomizedAppBar>

  )
}

export default Navbar