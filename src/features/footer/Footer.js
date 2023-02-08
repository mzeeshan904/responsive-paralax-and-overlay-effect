import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import { Box,Typography, styled} from '@mui/material';




const FooterContainer = styled(Box)`
height:200px;
width:100%;
background-color: #f7f7f7;
display:flex;
align-items: center;
justify-content: center;
flex-direction:column;
color: #ddd; 
`

const FooterIconsContainer = styled(Box)`
display:flex;
align-items: center;
justify-content: center;
flex-direction:row;
margin-bottom:25px;
`
const FooterIcon = styled(Box)`
  margin: 10px;
  font-size: 20px;
  &:hover {
    color: black;
  };

  @media screen and (min-width: 200px) and (max-width: 768px) {
     {
      font-size: 14px;
      
    }
  };

`

const FooterDescription = styled(Typography)`

@media screen and (min-width: 200px) and (max-width: 768px) {
     {
      font-size: 14px;
      text-align:center;
      
    }
  };

`

const Footer = () => {
    return (

        <FooterContainer>
            <FooterIconsContainer>
                <FooterIcon><InstagramIcon /></FooterIcon>
                <FooterIcon><LanguageIcon /></FooterIcon>
                <FooterIcon>icon3</FooterIcon>
            </FooterIconsContainer>
            <Box>
                <FooterDescription>Wallnuts Murals © 2019 - Amsterdam - hello@wallnutsmurals.com</FooterDescription>
            </Box>
        </FooterContainer>

    )
}

export default Footer