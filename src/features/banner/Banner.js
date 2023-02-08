import { Button, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
import './Banner.css'

const BannerContainer = styled(Box)`
    height:600px;
    width:100%;
    background-color: #f7f7f7;
    background-image: ${() => `url(${require(`../../assets/1b06e5fc-9b8c-44aa-93c0-ebe3118bedd3_rwc_0x0x774x514x4096.png`)})`};
    position:fixed;
    top:112px;
    background-size: auto;
    background-repeat: repeat;
    background-attachment: fixed;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    z-index: -1;
    margin-bottom: 300px;

@media screen and (min-width: 200px) and (max-width: 768px) {
     {
      padding-bottom: 40px;
      height:300px;
    }
  };
`

const BannerHeading = styled(Typography)`
    color: #757575;
    font-family: 'Cormorant Garamond', serif;
    font-size: 54px;
    font-style: normal;
    font-weight: 400;
    line-height: 59px;
    margin-top: 0px;
    text-align: center;
    text-transform: none;
    width: 60%;
    padding-bottom: 60px;
    ${'' /* word-wrap: break-word; */}

    @media screen and (min-width: 200px) and (max-width: 768px) {
     {
      font-size: 28px;
      width:100%;
      padding-bottom: 30px;
      line-height: 29px;
    }
  };
  @media screen and (min-width: 768px) and (max-width: 1000px ) {
     {
      font-size: 50px;
      width:75%;
    }
  };
`

const BannerButton = styled(Button)`
    background-color: rgba(75, 189, 199, 0.4);
    border-radius: 6px;
    color: #757575;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    height: 40px;
    padding: 0px 18px;
    line-height: 40px;
    text-transform: uppercase;
    margin-top: 15px;

    &:hover {
    background-color: rgba(75, 189, 199, 0.83);
    color: #f9f9f9;
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;
  }
`
const WorkDetail = styled(Typography)`
    color: #757575;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
    text-transform: none;


    @media screen and (min-width: 200px) and (max-width: 768px) {
     {
      font-size: 16px;
      font-weight: 500;
    }
  };
`

const Banner = () => {
  return (

    <BannerContainer>
      <BannerHeading className='banner_heading'>
        Hi, we're Wallnuts! A mural collective from Amsterdam.</BannerHeading>
      <WorkDetail
      //  sx={{ fontSize: { xxs: 12, xs: 14, sm: 17, md: 20, lg: 24, xl: 24 } }}
       >Scroll down for a selection of our work</WorkDetail>
      <BannerButton variant='contained'>OR READ MORE ABOUT US</BannerButton>
    </BannerContainer>

  )
}

export default Banner