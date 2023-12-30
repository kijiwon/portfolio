import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { COLOR, SIZE } from '../style/theme';
import { SiMinutemailer } from 'react-icons/si';

const EmailFormWrapper = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLOR.bg_green};
  border-radius: 20px;
  padding-top: 30px;
  margin-bottom: 20px;
  h2 {
    font-size: 24px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: ${SIZE.tablet}) {
    height: 80%;
    h2 {
      font-size: 20px;
    }
  }
`;

const EmailForm = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  @media screen and (max-width: ${SIZE.tablet}) {
    width: 80%;
  }
`;

const EmailLabel = styled.label`
  width: 60px;
  text-align: center;
  font-size: 18px;
  margin-right: 10px;
  padding-bottom: 2px;
  border-bottom: 3px solid ${COLOR.main_red};
`;

const InputForm = styled.input`
  width: 85%;
  height: 30px;
  border-radius: 20px;
  padding-left: 18px;
  font-size: 16px;
  font-family: 'Nanum Gothic';
  letter-spacing: 1.5px;
  background-color: ${COLOR.bg};

  &:focus {
    outline: none;
    box-shadow: 2px 3px 2px 1px ${COLOR.hover_green};
  }
`;

const EmailTextArea = styled.textarea`
  width: 100% !important;
  min-height: 200px;
  max-height: 220px;
  padding: 10px;
  font-size: 16px;
  font-family: 'Nanum Gothic';
  line-height: 1.5;
  background-color: ${COLOR.bg};
  border-radius: 10px;

  &:focus {
    outline: none;
    box-shadow: 4px 6px 3px 1px ${COLOR.hover_green};
  }
`;

const EmailSubmitButton = styled.button`
  height: 40px;
  font-size: 18px;
  font-family: 'Jua';
  align-items: center;
  margin-top: 30px;
  border-radius: 20px;
  border: none;
  background-color: ${COLOR.main_green};
  color: ${COLOR.bg};
  cursor: pointer;
  span {
    margin-right: 5px;
    color: ${COLOR.bg};
  }

  &:hover {
    background-color: ${COLOR.hover_green};
  }
`;

const SendEmail = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID as string;
    const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID as string;
    const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY as string;
    if (serviceId && templateId && publicKey && form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          console.log(result);
          alert('이메일이 전송되었습니다!');
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          alert('이메일이 전송이 실패되었습니다.');
        },
      );
    }
  };

  return (
    <EmailFormWrapper>
      <h2>궁금한 점은 메일로 문의해 주세요🙏</h2>
      <EmailForm ref={form} onSubmit={sendEmail}>
        <div>
          <EmailLabel>이메일</EmailLabel>
          <InputForm
            type="email"
            name="fromEmail"
            placeholder="회신 받을 이메일을 입력해 주세요"
            required
          />
        </div>
        <div>
          <EmailLabel>제목</EmailLabel>
          <InputForm
            type="text"
            name="subject"
            maxLength={30}
            placeholder="제목을 입력해 주세요"
            required
          />
        </div>
        <EmailTextArea
          name="content"
          placeholder="내용을 입력해 주세요"
          required
        />
        <EmailSubmitButton type="submit" value="sendEmail">
          <span>메일 보내기</span>
          <SiMinutemailer />
        </EmailSubmitButton>
      </EmailForm>
    </EmailFormWrapper>
  );
};

export default SendEmail;
