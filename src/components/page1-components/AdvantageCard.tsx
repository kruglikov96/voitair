import React from "react";
import { COLOR } from "../../styles/color-constants";
import { FlexBox } from "../styled-components/FlexBox";
import Paragraph from "../styled-components/Paragraph";

interface IAdvantageCardProps {
  icon: string;
  title: string;
  description: string;
}

const AdvantageCard: React.FC<IAdvantageCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <FlexBox
      bcc={COLOR.white}
      flexDirection="column"
      maxWidth="282px"
      width="100%"
      justifyContent="flex-start"
      pdd="25px 25px 35px 25px"
    >
      <img src={icon} alt="" style={{ marginBottom: "15px" }} />
      <Paragraph primary mb="7px">
        {title}
      </Paragraph>
      <Paragraph fontSize="16px" mb="35px" primary>
        {description}
      </Paragraph>
    </FlexBox>
  );
};

export default AdvantageCard;
