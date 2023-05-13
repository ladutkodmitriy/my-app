import styled from 'styled-components'
import HeartImage from '../assets/HeartImage.png'
const RecipeItem = (props) => {
  return (
    <RecipeMenuBackground>
      <RecipeMenuImage src={props.image} />
      <RecipeMenuInfo>
        <RecipeMenuText>{props.title}</RecipeMenuText>
        <RecipeTags>
          {props.tags.map((item, index) => (
            <RecipeTag
              style={{
                marginLeft: index !== 0 ? 24 : 0,
              }}
            >
              <RecipeImage src={item.icon} />
              <RecipeText>{item.text}</RecipeText>
            </RecipeTag>
          ))}
        </RecipeTags>
      </RecipeMenuInfo>
      <RecipeLike src={props.imageLike} />
    </RecipeMenuBackground>
  )
}

export default RecipeItem

const RecipeMenuBackground = styled.div`
  position: relative;
  background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #e7f9fd 100%);
  border-radius: 30px;
  width: 400px;
  height: 434px;
`
const RecipeMenuImage = styled.img`
  width: 368px;
  height: 250px;
  margin: 16px 16px 24px 16px;
  border-radius: 20px;
`

const RecipeMenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 24px;
`

const RecipeMenuText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.04em;
  color: #000000;
`
const RecipeTags = styled.div`
  display: flex;
  margin-top: 24px;
`

const RecipeTag = styled.div`
  display: flex;
  align-items: center;
`

const RecipeImage = styled.img`
  margin-right: 10px;
`

const RecipeText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.6);
`
const RecipeLike = styled.img`
  position: absolute;
  right: 36px;
  top: 36px;
`
