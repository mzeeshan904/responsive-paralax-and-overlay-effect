import React from 'react'
import Header from '../../features/navbar/Header'
import Footer from '../../features/footer/Footer'
import "./video-react.css"
import { Typography, Container, Grid, styled, Box } from '@mui/material'
import { Player } from 'video-react';

const cardData = [
    { id: 1, url: require('../../assets/wallpapers/1.jpg'), alt: "image1" },
    { id: 2, url: require('../../assets/wallpapers/2.jpg'), alt: "image2" },
    { id: 3, url: require('../../assets/wallpapers/3.png'), alt: "image3" },
    { id: 4, url: require('../../assets/wallpapers/22.jpg'), alt: "image22" },
    { id: 5, url: require('../../assets/wallpapers/4.jpg'), alt: "image4" }
]

const Image = styled("img")`
  max-width: 100%;
  min-height: 100%;
  transition: .5s ease;
`
const DetailContainer = styled(Box)`

  height:500px;
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 0 20%;
  box-sizing: border-box;

  @media screen and (min-width: 200px) and (max-width: 768px) {
     {
      padding-bottom: 20px;
      height:400px;
      margin-top: 120px;
    }
  };

`
const DetailCardHeading = styled(Typography)`

margin-bottom: 30px;
font-weight: 600;

@media screen and (min-width: 200px) and (max-width: 768px) {
     {
      font-size: 30px;
      margin-bottom: 10px;
      margin-top:140px;
      padding-bottom:10px;
    }
  };


`

const DetailCardDescription = styled(Typography)`
margin-bottom: 40px;
font-size : 25px;
@media screen and (min-width: 200px) and (max-width: 768px) {
     {
      font-size: 20px;
      margin-bottom: 20px;
    }
  };

`

const CardDetailHolder = () => {
    return (
        <Box>
            <Header />
            <DetailContainer >
                <DetailCardHeading variant='h3'>Linge College</DetailCardHeading>
                <DetailCardDescription>This Wallnuts mural was made above the entrance of Linge College, a High school in Tiel (NL). The students and staff could give input about what made the school special to them and based on that we made this design. </DetailCardDescription>
            </DetailContainer>
            <Container maxWidth="xl" className=''>
                <Grid container spacing={2} mt={8} mb={5}>
                    {
                        cardData.map((card, i) => {
                            return (
                                <Grid
                                    item xs={12} sm={6} md={6} lg={4} spacing={2}
                                    key={i}
                                    className='img_container' >
                                    <Image src={card.url} alt={card.alt} 
                                    // height={"900vh"} width={"100%"} 

                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <Player 
                    
                    fluid
                    width="80%"
                    playsInline
                    poster="/assets/poster.png"
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                />
            </Container>
            <Footer />
        </Box>
    )
}

export default CardDetailHolder