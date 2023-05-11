import React from 'react'
import styled from 'styled-components'
import LogoImage from '../assets/logo.png'
import FacebookImage from '../assets/facebook.svg'
import TwitterImage from '../assets/twitter.svg'
import InstagramImage from '../assets/instagram.svg'
const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Logo src={LogoImage} />
        <Navigators>
          <Navigation>Home</Navigation>
          <Navigation>Recipes</Navigation>
          <Navigation>Blog</Navigation>
          <Navigation>Contact</Navigation>
          <Navigation>About us</Navigation>
        </Navigators>
        <Links>
          <Link src={FacebookImage} />
          <Link src={TwitterImage} />
          <Link src={InstagramImage} />
        </Links>
      </HeaderContainer>
    </Container>
  )
}

const Container = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const Logo = styled.img`
  width: 110px;
  height: 30px;
  object-fit: contain;
`

const HeaderContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Navigators = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`

const Navigation = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;

  color: #000000;
`

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`

const Link = styled.img``

export default Header
