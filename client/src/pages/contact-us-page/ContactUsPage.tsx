import React from "react";
import Input from "ui/library/input/Input";
import { ContactUsPageContainer, FormWrapper } from "./ContactUsPage.styles";

const ContactUsPage = () => {
  return (
    <ContactUsPageContainer>
      <FormWrapper>
        <div className="block">
          <Input
            type="text"
            label="Your Name"
            placeholder="What's Your Name?"
          />
          <Input
            type="email"
            label="Your Name"
            placeholder="What's Your Email?"
          />
        </div>
        <div className="block">
          <Input
            type="text"
            label="Your Name"
            placeholder="What's Your Name?"
          />
          <Input
            type="text"
            label="Your Name"
            placeholder="What's Your Name?"
          />
        </div>
        <Input type="text" label="Your Name" placeholder="What's Your Name?" />
      </FormWrapper>
    </ContactUsPageContainer>
  );
};

export default ContactUsPage;
