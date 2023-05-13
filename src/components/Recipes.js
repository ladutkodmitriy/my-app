import React from 'react'
import styled from 'styled-components'
import BadgeImage from '../assets/Badge.png'
import CircleImage from '../assets/Circle.svg'
import ForkKnifeImage from '../assets/ForkKnife.svg'
import PhotoRecipes from '../assets/PhotoRecipes.png'
import TimerImage from '../assets/Timer.svg'
import PersonImage from '../assets/User.png'
import ScrollImage from '../assets/scroll.svg'
import MainButton from './Buttons/MainButton'

const Recipes = () => {
  return (
    <Container>
      <Content>
        <Tag>
          <TagImage src={ScrollImage} />
          <TagText>Hot Recipes</TagText>
        </Tag>
        <Title>Spicy delicious chicken wings</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
        </Description>
        <Features>
          <Feature>
            <FeatureImage src={TimerImage} />
            <FeatureText>30 Minutes</FeatureText>
          </Feature>
          <Feature>
            <FeatureImage src={ForkKnifeImage} />
            <FeatureText>Chicken</FeatureText>
          </Feature>
        </Features>
        <Information>
          <InformationUser>
            <UserImage src={PersonImage} />
            <InformationText>
              <UserName>John Smith</UserName>
              <UserDate>15 March 2022</UserDate>
            </InformationText>
          </InformationUser>
          <MainButton text={'View Recipes'} imageUrl={CircleImage} />
        </Information>
      </Content>
      <Image src={PhotoRecipes} />
      <Badge src={BadgeImage} />
    </Container>
  )
}

export default Recipes

const Container = styled.div`
  width: 1280px;
  height: 640px;
  margin: 0 auto;
  border-radius: 50px;
  overflow: hidden;
  position: relative;
  display: flex;
  margin-top: 40px;
`

const Content = styled.div`
  background: #e7fafe;
  display: flex;

  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px;
  flex-direction: column;
`

const Image = styled.img`
  /* flex: 1; */
  object-fit: contain;
`

const Badge = styled.img`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 50px;
  bottom: 0;
  width: 150px;
  height: 150px;
  object-fit: contain;
`
const Tag = styled.div`
  background: #ffffff;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 20px 10px 20px;
`

const TagImage = styled.img`
  margin-right: 13px;
`

const TagText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  color: #000000;
`
const Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 77px;
  letter-spacing: -0.04em;
  color: #000000;
  margin-top: 32px;
`
const Description = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 24px;
`

const Features = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 16px;
`
const Feature = styled.div`
  background: rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
`

const FeatureImage = styled.img`
  margin-right: 10px;
`

const FeatureText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.6);
`
const Information = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
`

const InformationUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const UserImage = styled.img`
  margin-right: 16px;
`

const UserName = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #000000;
`
const InformationText = styled.div``

const UserDate = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 8px;
`
