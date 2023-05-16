import styled from 'styled-components'
import MixedImage from '../assets/MixImage.png'
import ClockImage from '../assets/ClockImage.png'
import ForkImage from '../assets/ForkImage.png'
import LikePhotoImage from '../assets/LikePhotoImage.png'
const DeliciousRecipes = (props) => {
  return (
    <Container>
      <TitleInfo>
        <LeftTitleInfo>
          <Title>Try this delicious recipe to make your day</Title>
          <MenuBarInfo>
            <PhotoBarInfo src={MixedImage} />
            <TitleBarText>
              Mixed Tropical Fruit Salad with Superfood Boosts{' '}
            </TitleBarText>
            <BottomBarInfo>
              <LeftBar>
                <Clock src={ClockImage} />
                <Time>30 Minutes</Time>
              </LeftBar>
              <RightBar>
                <ForkKnife src={ForkImage} />
                <Healthy>Healthy</Healthy>
              </RightBar>
            </BottomBarInfo>
          </MenuBarInfo>
        </LeftTitleInfo>
        <RightTitleInfo>
          <Info>
            {/* Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod */}
            {/* tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '} */}
          </Info>
        </RightTitleInfo>
        <LikePhoto src={LikePhotoImage} />
      </TitleInfo>
    </Container>
  )
}
export default DeliciousRecipes

const Container = styled.div`
  width: 1280px;
  height: 868px;
  margin: 0 auto;
  margin-top: 151px;
`

const TitleInfo = styled.div``

const LeftTitleInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
  letter-spacing: -0.04em;
  color: #000000;
`
const MenuBarInfo = styled.div`
  width: 290px;
  height: 316px;
  margin-top: 80px;
`

const PhotoBarInfo = styled.img``

const TitleBarText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.04em;
  color: #000000;
  margin-top: 16px;
`
const BottomBarInfo = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const LeftBar = styled.div``

const Clock = styled.img``

const Time = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.6);
`

const RightBar = styled.div``

const ForkKnife = styled.img``

const Healthy = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.6);
`

const RightTitleInfo = styled.div``

const LikePhoto = styled.img``

const Info = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.6);
`
