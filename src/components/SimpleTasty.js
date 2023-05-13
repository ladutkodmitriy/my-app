import styled from 'styled-components'
import BurgerImage from '../assets/BurgerImage.png'
import TimerImage from '../assets/TimerImage.png'
import ForkKnife from '../assets/ForkKnifeImage.png'
import HeartImage from '../assets/HeartImage.png'
import RecipeItem from './RecipeItem'
import FishImage from '../assets/FishImage.png'
import DarkLikeImage from '../assets/DarkLikeImage.png'
import BeamImage from '../assets/BeamImage.png'
import MixedImage from '../assets/MixedImage.png'
import MeatballsImage from '../assets/MeatballsImage.png'
import HealthyImage from '../assets/HealthyFoodImage.png'
import FruityImage from '../assets/FruityImage.png'
import ChikenImage from '../assets/ChickenImage.png'
import PastaImage from '../assets/PastaImage.png'
const SimpleTasty = (props) => {
  return (
    <Container>
      <SimpleRecipeList>
        <SimpleText>Simple and tasty recipes</SimpleText>
        <SomeText>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
        </SomeText>
        <RecipeList>
          <RecipeItem
            image={BurgerImage}
            title={'Big and Juicy Wagyu Beef Cheeseburger'}
            tags={[
              { icon: TimerImage, text: '30 Minutes' },
              { icon: ForkKnife, text: 'Snack' },
            ]}
            imageLike={HeartImage}
          />
          <RecipeItem
            image={FishImage}
            title={'Fresh Lime Roasted Salmon with Ginger Sauce'}
            tags={[
              { icon: TimerImage, text: '30 Minutes' },
              { icon: ForkKnife, text: 'Fish' },
            ]}
            imageLike={DarkLikeImage}
          />
          <RecipeItem
            image={BeamImage}
            title={'Strawberry Oatmeal Pancake with Honey Syrup'}
            tags={[
              { icon: TimerImage, text: '30 Minutes' },
              { icon: ForkKnife, text: 'Breakfast' },
            ]}
            imageLike={DarkLikeImage}
          />
          <RecipeItem
            image={MixedImage}
            title={'Fresh and Healthy Mixed Mayonnaise Salad'}
            tags={[
              { icon: TimerImage, text: '30 Minutes' },
              { icon: ForkKnife, text: 'Healthy' },
            ]}
            imageLike={HeartImage}
          />
          <RecipeItem
            image={MeatballsImage}
            title={'Chicken Meatballs with Cream Cheese'}
            tags={[
              { icon: TimerImage, text: '30 Minutes' },
              { icon: ForkKnife, text: 'Meat' },
            ]}
            imageLike={DarkLikeImage}
          />
          <HealthyFood src={HealthyImage} />
          <RecipeItem
            image={FruityImage}
            title={'Fruity Pancake with Orange & Blueberry'}
            tags={[
              { icon: TimerImage, text: '30 Minutes' },
              { icon: ForkKnife, text: 'Sweet' },
            ]}
            imageLike={HeartImage}
          />
          <RecipeItem
            image={ChikenImage}
            title={'The Best Easy One Pot Chicken and Rice'}
            tags={[
              { icon: TimerImage, text: '30 Minutes' },
              { icon: ForkKnife, text: 'Snack' },
            ]}
            imageLike={DarkLikeImage}
          />
          <RecipeItem
            image={PastaImage}
            title={'The Creamiest Creamy Chicken and Bacon Pasta'}
            tags={[
              { icon: TimerImage, text: '30 Minutes' },
              { icon: ForkKnife, text: 'Noodles' },
            ]}
            imageLike={DarkLikeImage}
          />
        </RecipeList>
      </SimpleRecipeList>
    </Container>
  )
}

export default SimpleTasty

const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
`

const SimpleRecipeList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const SimpleText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
  letter-spacing: -0.04em;
  color: #000000;
  margin-top: 183px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SomeText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  width: 706px;
  margin-top: 24px;
`

const RecipeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 96px;
`

const HealthyFood = styled.img``
