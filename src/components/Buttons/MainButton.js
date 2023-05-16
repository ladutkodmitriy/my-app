import React from 'react'
import styled from 'styled-components'

const MainButton = (props) => {
  return (
    <ButtonContainer style={props.style}>
      <ButtonText>{props.text}</ButtonText>
      {props?.imageUrl && <ButtonImage src={props?.imageUrl} />}
    </ButtonContainer>
  )
}

export default MainButton

const ButtonContainer = styled.div`
  background: #000000;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 36px;
`

const ButtonText = styled.div`
  font-family: 'Inter';
  white-space: nowrap;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  color: #ffffff;
`

const ButtonImage = styled.img`
  margin-left: 15px;
`
