import React from "react";
import { IconPhone } from "../../../components/common-components/layout/IconPhone";
import { FlexBox } from "../../../components/styled-components/FlexBox";
import Paragraph from "../../../components/styled-components/Paragraph";
import styled from "styled-components";
import { Theme } from "../../../styles/theme";

const ContactInfoComponent = styled(FlexBox)`
  background-color: ${(props) => (props.theme as Theme).colors.common.white};
  border-radius: 70px;
  padding: 10px 30px 10px 15px;
`;

export const ContactInfo = () => {
  return (
    <ContactInfoComponent maxWidth="255px" width="100%">
      <IconPhone />
      <FlexBox flexDirection="column" alignItems="flex-start" maxWidth="135px">
        <Paragraph primary fontSize="14px">
          +7 (926) 173 80 30
        </Paragraph>
        <Paragraph primary fontSize="14px" mb="4px">
          +7 (985) 149 11 99
        </Paragraph>
        <Paragraph secondary fontSize="14px">
          Обратный звонок
        </Paragraph>
      </FlexBox>
    </ContactInfoComponent>
  );
};
