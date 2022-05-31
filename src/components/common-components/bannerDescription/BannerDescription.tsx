import React from "react";
import { FlexBox } from "../../styled-components/FlexBox";
import { Title } from "../../styled-components/Title";
import Paragraph from "../../styled-components/Paragraph";
import { Button } from "../../styled-components/button/Button";

interface IBannerDescriptionProps {
  title: string;
  parahraph: string;
  button: string;
}

const BannerDescription: React.FC<IBannerDescriptionProps> = ({
  title,
  parahraph,
  button,
}) => {
  return (
    <FlexBox flexDirection="column" maxWidth="520px" alignItems="flex-start">
      <Title mb="20px">{title} </Title>
      <Paragraph maxWidth="351px" mb="60px">
        {parahraph}
      </Paragraph>
      <Button primary>{button}</Button>
    </FlexBox>
  );
};

export default BannerDescription;
