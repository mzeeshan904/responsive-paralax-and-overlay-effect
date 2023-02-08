import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import { Box, styled,IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const HeaderContainer = styled(Box)`
  display:flex;
  justify-content:space-between;
  align-items: center;
  box-shadow: none;
  width: 100%;
  height: 112px;
  background-color: #fff;
  color: black;
  box-sizing: border-box;
  padding:22px 3% 0px 3%;
  position: fixed;
  top:0px;
  z-index: 3;

`
const NavItemsContainer = styled(Box)`
  display:flex;
  flex-direction: row;
  align-item: center;
  justify-content:center;

`
const NavIconsContainer = styled(Box)`
  display:flex;
  flex-direction: row;
  align-item: center;
  justify-content:space-between;
`

const NavLink = styled(Box)`
  margin: 15px;
  font-size: 20px;
  color: #757575;
  font-weight:500;

  &:hover {
    color: #4bbdc7;
  }
  
`
const NavIcon = styled(Box)`
  font-size:8px;
  margin: 10px;
  width:30px;
  height:30px;
  &:hover {
    color: #4bbdc7;
  }

`

const ProjectLink = styled(Box)`

margin: 10px;
  font-size: 20px;
  font-weight:700;
  ${'' /* color: #757575; */}
  color:#282828;

  &:hover {
    color: #4bbdc7;
  }
`

const Header = () => {

  return (
    <HeaderContainer>
      <NavItemsContainer sx={{ display: { xs: 'none', sm: 'none', md: 'inline-flex'} }}>
        <ProjectLink>Projects</ProjectLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </NavItemsContainer>
      <Box> <img src={require("../../assets/f1880aab-8b02-4039-9ae7-416b54658a85_rwc_0x0x800x400x4096.png")} alt="header-logo" style={{ height: 90, width: 200, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 55 }} sx={{'&:hover': {color: "#4bbdc7",},
      }} /></Box>
      <NavIconsContainer sx={{ display: { xs: 'none', sm: 'none', md: 'inline-flex' } }}>
        <NavIcon><InstagramIcon fontSize='small'/></NavIcon>
        <NavIcon><LanguageIcon fontSize='small' /></NavIcon>
        <NavIcon><InstagramIcon fontSize='small'/></NavIcon>
      </NavIconsContainer>
      <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'inline', md: 'none', lg:'none' } }}
          >
            <MenuIcon />
          </IconButton>
    </HeaderContainer>
  )
}

export default Header