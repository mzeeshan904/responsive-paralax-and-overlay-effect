import { React } from 'react'
import { Container, Grid, styled } from '@mui/material'
import { Box } from '@mui/system'

const cardData = [
    { id: 1, url: require('../../assets/wallpapers/1.jpg'), alt: "image1"},
    { id: 2, url: require('../../assets/wallpapers/2.jpg'), alt: "image2" },
    { id: 3, url: require('../../assets/wallpapers/3.png'), alt: "image3" },
    { id: 4, url: require('../../assets/wallpapers/22.jpg'), alt: "image22" },
    { id: 5, url: require('../../assets/wallpapers/4.jpg'), alt: "image4" },
    { id: 6, url: require('../../assets/wallpapers/5.jpg'), alt: "image5" },
    { id: 7, url: require('../../assets/wallpapers/6.jpg'), alt: "image6" },
    { id: 8, url: require('../../assets/wallpapers/7.jpg'), alt: "image7" },
    { id: 9, url: require('../../assets/wallpapers/8.jpg'), alt: "image8" },
    { id: 10, url: require('../../assets/wallpapers/9.jpg'), alt: "image9" },
    { id: 11, url: require('../../assets/wallpapers/10.jpg'), alt: "image10" },
    { id: 12, url: require('../../assets/wallpapers/11.jpg'), alt: "image11" },
    { id: 13, url: require('../../assets/wallpapers/12.jpg'), alt: "image12" },
    { id: 14, url: require('../../assets/wallpapers/13.jpg'), alt: "image13" },
    { id: 15, url: require('../../assets/wallpapers/14.jpg'), alt: "image14" },
    { id: 16, url: require('../../assets/wallpapers/15.jpg'), alt: "image15" },
    { id: 17, url: require('../../assets/wallpapers/16.jpg'), alt: "image16" },
    { id: 18, url: require('../../assets/wallpapers/17.jpg'), alt: "image17" },
    { id: 19, url: require('../../assets/wallpapers/18.jpg'), alt: "image18" },
    { id: 20, url: require('../../assets/wallpapers/19.jpg'), alt: "image19" },
    { id: 21, url: require('../../assets/wallpapers/20.jpg'), alt: "image20" },
    { id: 22, url: require('../../assets/wallpapers/21.jpg'), alt: "image21" },
    { id: 23, url: require('../../assets/wallpapers/23.jpg'), alt: "image23" },
    { id: 24, url: require('../../assets/wallpapers/24.jpg'), alt: "image24" },
    { id: 25, url: require('../../assets/wallpapers/25.jpg'), alt: "image25" },
    { id: 26, url: require('../../assets/wallpapers/26.jpg'), alt: "image26" },
    { id: 27, url: require('../../assets/wallpapers/27.png'), alt: "image27" },
]


const Image = styled("img")`
  max-width: 100%;
  min-height: 100%;
  transition: .5s ease;
  backface-visibility: hidden;

  &:hover {
    background-color: #f7f7f7;
    background: transparent;
    pointer:cursor;
    opacity: 0.3;
  }

`


const DetailCard = () => {

    return (
        <Container maxWidth="xl" className='card_container'>
            <Grid container spacing={4} >
                {
                    cardData.map((card, i) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={4} key={i} spacing={2} className= 'container'  >
                                <Image src={card.url} alt={card.alt} />
                                <Box className='middle'
                                >
                                    <Box className = 'text'>hi this is text</Box>
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}

export default DetailCard