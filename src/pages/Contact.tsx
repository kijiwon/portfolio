import SendEmail from '../component/EmailForm';
import styled from 'styled-components';
import { COLOR, SIZE } from '../style/theme';
import { Page } from '../component/CommonStyle';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { UpArrow } from '../component/ScrollArrow';

const ContactTitle = styled.h1`
  font-size: 44px;
  margin-top: 70px;
  margin-bottom: 50px;

  @media screen and (max-width: ${SIZE.tablet}) {
    display: none;
  }
`;

const ContactWrapper = styled.section`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: ${SIZE.tablet}) {
    width: 90%;
    margin-top: 60px;
    flex-direction: column;
    justify-content: start;
  }
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
  img {
    width: 220px;
    border: 3px double ${COLOR.main_red};
    border-radius: 50% 50% 0 0;
    background-color: ${COLOR.bg_green};
    padding: 10px 0px 0px 20px;
  }
  div > h3 {
    font-size: 26px;
    text-align: center;
    border-bottom: 2px solid ${COLOR.main_red};
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: ${SIZE.tablet}) {
    width: 100%;
    height: 200px;
    flex-direction: row;
    justify-content: center;

    margin-bottom: 20px;
    border-bottom: 4px dashed ${COLOR.hover_green};
    padding-bottom: 20px;
    img {
      width: 40%;
      border: 2px solid ${COLOR.main_red};
      margin-right: 40px;
    }

    div > h3 {
      font-size: 22px;
      margin-top: 0;
      margin-bottom: 10px;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 18px;
    margin-left: 30px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: ${SIZE.tablet}) {
    p {
      text-align: end;
      font-size: 16px;
      font-family: 'Nanum Gothic';
      font-weight: 600;
      margin-bottom: 10px;
    }
  }
`;

const ContactType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  margin-bottom: 10px;
  span {
    margin-left: 5px;
  }
`;

const Contact = () => {
  return (
    <Page>
      <UpArrow />
      <ContactTitle>CONTACT</ContactTitle>
      <ContactWrapper>
        <ContactInfoWrapper>
          <img
            src={process.env.PUBLIC_URL + '/assets/mimo3.png'}
            alt="contactimg"
          />
          <div>
            <h3>Contact With Me</h3>
            <ContactInfo>
              <ContactType>
                <MdOutlineMailOutline />
                <span>EMAIL</span>
              </ContactType>
              <p>kiji1313@gmail.com</p>
            </ContactInfo>
            <ContactInfo>
              <ContactType>
                <IoPhonePortraitOutline />
                <span>PHONE</span>
              </ContactType>
              <p>010.8908.6252</p>
            </ContactInfo>
            <ContactInfo>
              <ContactType>
                <RiKakaoTalkFill />
                <span>KAKAO ID</span>
              </ContactType>
              <p>kiji1313</p>
            </ContactInfo>
          </div>
        </ContactInfoWrapper>
        <SendEmail />
      </ContactWrapper>
    </Page>
  );
};

export default Contact;
