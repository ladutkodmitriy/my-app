import styled from 'styled-components'
import BreakfastImage from '../assets/BreakfastImage.png'
import VeganImage from '../assets/VeganImage.png'
import MeatImage from '../assets/MeatImage.png'
import DessetImage from '../assets/DessrtImage.png'
import LunchImage from '../assets/LunchImage.png'
import ChocolateImage from '../assets/ChocolateImage.png'
const Categories = (props) => {
  return (
    <Container>
      <CategoriesAll>
        <CategoriesText>Categories</CategoriesText>
        <RectangleButton>
          <RectangleText>View All Categories</RectangleText>
        </RectangleButton>
      </CategoriesAll>
      <CategoriesList>
        <CategoryBackground
          style={{
            background: `linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%)`,
          }}
        >
          <CategoryImg src={BreakfastImage} />
          <CategoryText>Breakfast</CategoryText>
        </CategoryBackground>

        <CategoryBackground
          style={{
            background: `linear-gradient(180deg,rgba(108, 198, 63, 0) 0%,rgba(108, 198, 63, 0.1) 100%)`,
          }}
        >
          <CategoryImg src={VeganImage} />
          <CategoryText>Vegan</CategoryText>
        </CategoryBackground>

        <CategoryBackground
          style={{
            background: `linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%)`,
          }}
        >
          <CategoryImg src={MeatImage} />
          <CategoryText>Meat</CategoryText>
        </CategoryBackground>

        <CategoryBackground
          style={{
            background: `linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%)`,
          }}
        >
          <CategoryImg src={DessetImage} />
          <CategoryText>Dessert</CategoryText>
        </CategoryBackground>

        <CategoryBackground
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)`,
          }}
        >
          <CategoryImg src={LunchImage} />
          <CategoryText>Lunch</CategoryText>
        </CategoryBackground>

        <CategoryBackground
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)`,
          }}
        >
          <CategoryImg src={ChocolateImage} />
          <CategoryText>Chocolate</CategoryText>
        </CategoryBackground>
      </CategoriesList>
    </Container>
  )
}

export default Categories

const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
`

const CategoriesAll = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CategoriesText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
  letter-spacing: -0.04em;
  color: #000000;
  margin-top: 160px;
`
const RectangleButton = styled.div`
  background: #e7fafe;
  border-radius: 16px;
  width: 200px;
  height: 60px;
  margin-top: 160px;
`

const RectangleText = styled.div`
  color: #000000;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  padding: 21px 27px 20px 27px;
`
const CategoriesList = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 130px;
`

const CategoryBackground = styled.div`
  width: 180px;
  height: 152px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const CategoryText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #000000;
  margin-top: 50px;
`

const CategoryImg = styled.img`
  margin-top: -50px;
  width: 100px;
  height: 100px;
`
