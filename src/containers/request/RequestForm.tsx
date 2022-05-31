import React, { useState } from "react";
import { Button } from "../../components/styled-components/button/Button";
import { Form } from "../../components/styled-components/Form";
import Input from "../../components/styled-components/input/Input";
import TextArea from "../../components/styled-components/textArea/TextArea";

const RequestForm: React.FC = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputTextArea, setInputTextArea] = useState("");

  // eslint-disable-next-line
  const [sendRequest, setsendRequest] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputName((e.target as HTMLInputElement).value);
  };

  const handleInputEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputEmail((e.target as HTMLInputElement).value);
  };

  const handleInputTextAreaChange = (
    e: React.FormEvent<HTMLTextAreaElement>,
  ) => {
    setInputTextArea((e.target as HTMLInputElement).value);
  };

  const handleSendRequest = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setsendRequest({
      name: inputName,
      email: inputEmail,
      message: inputTextArea,
    });
    setInputName("");
    setInputEmail("");
    setInputTextArea("");
  };

  return (
    <Form maxWidth="360px">
      <Input
        type="text"
        name="name"
        placeholder="Имя"
        value={inputName}
        onChange={handleInputNameChange}
        mb="10px"
      />
      <Input
        type="text"
        name="email"
        placeholder="E-mail"
        mb="10px"
        value={inputEmail}
        onChange={handleInputEmailChange}
      />
      <TextArea
        placeholder="Сообщение"
        name="message"
        value={inputTextArea}
        onChange={handleInputTextAreaChange}
        mb="40px"
        minHeight="100px"
      />
      <Button onClick={handleSendRequest} secondary>
        Отправить заявку{">>>"}
      </Button>
    </Form>
  );
};

export default RequestForm;
