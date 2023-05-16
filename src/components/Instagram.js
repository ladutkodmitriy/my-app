import styled from 'styled-components'
import OvalImage from '../assets/OvalImage.png'
import DotsImage from '../assets/DotsImage.png'
import CenterImage from '../assets/CentrePhoto.png'
import Pancackes from '../assets/PancakesImage.png'
import SaveImage from '../assets/SaveImage.png'
import UserImage from '../assets/OvalPhoto.png'
import MainButton from './Buttons/MainButton'
import InstagramImage from '../assets/InstagramIcon.png'
import InstagramItem from './InstagramItem'
import OnionImg from '../assets/OnionImg.png'
import BeefImage from '../assets/BeefImage.png'
const Instagram = (props) => {
  return (
    <Container>
      <InfoContainer>
        <TitleText>Check out @foodieland on Instagram</TitleText>
        <InfoText>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
        </InfoText>
      </InfoContainer>
      <AllPhotoContainer>
        <InstagramItem
          profile={{
            img: OvalImage,
            name: 'Foodieland.',
            location: 'Tokyo, Japan',
          }}
          image={CenterImage}
          likedUser={'craig_love'}
          likeCount={'44,686'}
          comments={
            'The vegetables dishes need to have certain vitamin for those people'
          }
          date={'September 19'}
        />
        <InstagramItem
          profile={{
            img: OvalImage,
            name: 'Foodieland.',
            location: 'New York, USA',
          }}
          image={Pancackes}
          likedUser={'craig_love'}
          likeCount={'25,686'}
          comments={
            'Sweet food can bring someon into happiness as long as they don’t eat to much'
          }
          date={'September 21'}
        />
        <InstagramItem
          profile={{
            img: OvalImage,
            name: 'Foodieland.',
            location: 'Minsk, Republic of Belarus',
          }}
          image={OnionImg}
          likedUser={'craig_love'}
          likeCount={'99,686'}
          comments={
            'What are you doing before start cooking? prepare the  tools or ingredients?'
          }
          date={'October 15'}
        />
        <InstagramItem
          profile={{
            img: OvalImage,
            name: 'Foodieland.',
            location: 'London, Great Britain',
          }}
          image={BeefImage}
          likedUser={'craig_love'}
          likeCount={'56,686'}
          comments={
            'Steak never be wrong, it’s suitable for you who want romantic dinner'
          }
          date={'November 7'}
        />
      </AllPhotoContainer>
      <MainButton
        style={{ width: 229, marginTop: 80 }}
        text={'Visit Our Instagram'}
        imageUrl={InstagramImage}
      />
    </Container>
  )
}

export default Instagram

const Container = styled.div`
  width: 1440px;
  height: 964px;
  margin: 0 auto;
  background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #e7f9fd 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TitleText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  letter-spacing: -0.04em;
  color: #000000;
`
const InfoText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 24px;
  width: 840px;
`

const AllPhotoContainer = styled.div`
  width: 1280px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 40px;

  margin-top: 80px;
`
