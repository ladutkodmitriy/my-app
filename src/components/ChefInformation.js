import styled from 'styled-components'
import MainButton from './Buttons/MainButton'
import ChefImage from '../assets/ChefImage.png'
import BroccoliImage from '../assets/BroccoliImage.png'
import OnionImage from '../assets/OnionImage.png'
import ImageMeat from '../assets/ImageMeat.png'
import TomatoImage from '../assets/TomatoImage.png'

const ChefInformation = (props) => {
  return (
    <Container>
      <AboutChefInfo>
        <ChefTitle>Everyone can be a chef in their own kitchen</ChefTitle>
        <ChefInfo>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
        </ChefInfo>
        <MainButton text={'Learn more'} style={{ width: 180, marginTop: 72 }} />
      </AboutChefInfo>
      <ChefHat>
        <ChefBackground>
          <ChefImg src={ChefImage} />
          <BroccoliImg src={BroccoliImage} />
          <OnionImg src={OnionImage} />
          <MeatImg src={ImageMeat} />
          <TomatoImg src={TomatoImage} />
        </ChefBackground>
      </ChefHat>
    </Container>
  )
}

export default ChefInformation

const Container = styled.div`
  display: flex;
  width: 1280px;
  height: 600px;
  margin: 0 auto;
  margin-top: 235px;
`
const AboutChefInfo = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const ChefTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
  letter-spacing: -0.04em;
  color: #000000;
  margin-top: 169px;
`

const ChefInfo = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 24px;
`
const ChefHat = styled.div`
  width: 710px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

const ChefBackground = styled.div`
  width: 651px;
  height: 500px;
  background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #e7f9fd 100%);
  border-radius: 30px;
  position: relative;
`
const ChefImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 50px;
`

const BroccoliImg = styled.img`
  position: absolute;
  top: 70px;
  right: 36px;
`

const OnionImg = styled.img`
  position: absolute;
  top: 0%;
  right: 180px;
`

const MeatImg = styled.img`
  position: absolute;
  left: 43px;
  top: -27px;
`

const TomatoImg = styled.img`
  position: absolute;
  left: -25px;
  bottom: 124px;
`
