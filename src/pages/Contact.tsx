import React from 'react';
import SendEmail from '../component/EmailForm';
import styled from 'styled-components';
import { COLOR } from '../style/theme';
import { Page } from '../component/CommonStyle';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { UpArrow } from '../component/ScrollArrow';

const ContactTitle = styled.h1`
  font-size: 44px;
  margin-top: 70px;
  margin-bottom: 50px;
`;

const ContactWrapper = styled.section`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  h3 {
    font-size: 26px;
    text-align: center;
    border-bottom: 2px solid ${COLOR.main_red};
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const ContactInfo = styled.div`
  p {
    font-size: 18px;
    margin-left: 30px;
    margin-bottom: 20px;
  }
`;

const ContactType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  margin-bottom: 10px;
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
            <p>010-8908-6252</p>
          </ContactInfo>
          <ContactInfo>
            <ContactType>
              <RiKakaoTalkFill />
              <span>KAKAO ID</span>
            </ContactType>
            <p>kiji1313</p>
          </ContactInfo>
        </ContactInfoWrapper>
        <SendEmail />
      </ContactWrapper>
    </Page>
  );
};

export default Contact;
