import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
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
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>
          이메일
          <input type="email" name="fromEmail" required />
        </label>
        <label>
          제목
          <input type="text" name="subject" required />
        </label>
        <label>
          <textarea name="content" required />
        </label>
        <button type="submit" value="sendEmail">
          보내기
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
