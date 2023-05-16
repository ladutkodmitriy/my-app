import styled from 'styled-components'
import MarkImage from '../assets/MarkImage.png'
import DotsImage from '../assets/DotsImage.png'
import LikeImage from '../assets/LikeImage.png'
import CommentImage from '../assets/CommentImage.png'
import MessageImage from '../assets/MessangerImage.png'
import PaginationImage from '../assets/PaginationImage.png'
import SaveImage from '../assets/SaveImage.png'
import UserImage from '../assets/OvalPhoto.png'

const InstagramItem = (props) => {
  return (
    <PhotoContainer>
      <HeaderPhotoContainer>
        <Header>
          <LeftOvalPhoto src={props.profile.img} />
          <div>
            <LeftText>
              {props.profile.name} <img src={MarkImage} alt='' />
            </LeftText>
            <LeftCityText>{props.profile.location}</LeftCityText>
          </div>
        </Header>
        <img src={DotsImage} alt='' />
      </HeaderPhotoContainer>
      <div>
        <img src={props.image} alt='' />
      </div>
      <BottomInformationContainer>
        <BottomPhoto>
          <LikeCommentSend>
            <img src={LikeImage} alt='' />
            <img src={CommentImage} alt='' />
            <img src={MessageImage} alt='' />
            <Pagination src={PaginationImage} />
          </LikeCommentSend>
          <img src={SaveImage} alt='' />
        </BottomPhoto>
        <UserInformation>
          <UserPhoto src={UserImage} />
          <UserText>
            Liked by <b>{props.likedUser}</b> and <b>{props.likeCount}</b>{' '}
            others
          </UserText>
        </UserInformation>
        <TitleUserText>
          <b>{props.profile.name}</b>
          {props.comments}
        </TitleUserText>
        <DateUserText>{props.date}</DateUserText>
      </BottomInformationContainer>
    </PhotoContainer>
  )
}

export default InstagramItem

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
`

const HeaderPhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 290px;
  box-shadow: 0px 0.2552px 0px rgba(60, 60, 67, 0.29);
  background: #ffffff;
  padding: 8px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
`

const LeftOvalPhoto = styled.img`
  margin-right: 8px;
`
const LeftText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 10.0533px;
  line-height: 14px;
  letter-spacing: -0.0773333px;
  color: #262626;
`
const LeftCityText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 8.50667px;
  line-height: 10px;
  letter-spacing: 0.0541333px;
  color: #262626;
`

const BottomInformationContainer = styled.div`
  background: #ffffff;
  width: 290px;
  height: 113px;
  padding: 10px;
`

const BottomPhoto = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LikeCommentSend = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`

const Pagination = styled.img`
  margin-left: 44px;
`

const UserInformation = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
`

const UserPhoto = styled.img`
  margin-right: 5px;
`

const UserText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 10.0533px;
  line-height: 14px;
  letter-spacing: -0.0541333px;
  color: #262626;
`
const TitleUserText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 10.0533px;
  line-height: 14px;
  letter-spacing: -0.0773333px;
  color: #262626;
  margin: 3px 0 0 0;
`

const DateUserText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 8.50667px;
  line-height: 10px;
  letter-spacing: 0.0386667px;
  color: rgba(0, 0, 0, 0.4);
  margin: 10px 0 0 0;
`
