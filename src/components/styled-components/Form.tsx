import styled from "styled-components";

interface IFormProps {
  maxWidth?: string;
}

export const Form = styled.div<IFormProps>`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.maxWidth};
  width: 100%;
`;
