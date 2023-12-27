import React from 'react';
import { Page } from '../component/CommonStyle';
import styled from 'styled-components';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import EmailForm from '../component/EmailForm';

const ContactTitle = styled.h1`
  font-size: 44px;
  margin-top: 70px;
`;

const Contact = () => {
  return (
    <Page>
      <ContactTitle>CONTACT</ContactTitle>
      <div>
        <div>
          <MdOutlineMailOutline />
          <span>Email</span>
          <p>kiji13133@gmail.com</p>
        </div>
        <div>
          <IoPhonePortraitOutline />
          <span>Phone Number</span>
          <p>010-8908-6252</p>
        </div>
        <EmailForm />
      </div>
    </Page>
  );
};

export default Contact;
