import React from "react";
import { COLOR } from "../../styles/color-constants";
import { Box } from "../styled-components/Box";
import { Button } from "../styled-components/button/Button";
import { FlexBox } from "../styled-components/FlexBox";
import Paragraph from "../styled-components/Paragraph";
import { TitleH2 } from "../styled-components/Title";

interface IServiceProps {
  serviceName: string;
  description: string;
  btnProps: string;
}

const Service: React.FC<IServiceProps> = ({
  serviceName,
  description,
  btnProps,
}) => {
  return (
    <FlexBox mb="70px">
      <Box
        border="2px solid #FFFFFF"
        borderRadius="100px"
        maxWidth="490px"
        pdd="30px"
        textAlign="center"
      >
        <TitleH2>{serviceName}</TitleH2>
      </Box>
      <FlexBox flexDirection="column" maxWidth="555px" alignItems="start">
        <Paragraph mb="30px" opacity="0.8">
          {description}
        </Paragraph>
        <Button moreDetail>{btnProps}</Button>
      </FlexBox>
    </FlexBox>
  );
};

export default Service;
