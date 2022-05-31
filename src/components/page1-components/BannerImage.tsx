import React from "react";
import styled, { css } from "styled-components";
import { COLOR } from "../../styles/color-constants";
import BannerImg from "../../asseets/imagesForBanners/BannerImg.png";

interface ICircleProps {
  big?: boolean;
  middle?: boolean;
  small?: boolean;
}

const Circle = styled.div<ICircleProps>`
  border-radius: 50%;
  display: flex;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  ${(props) =>
    props.big &&
    css`
      max-width: 594px;
      height: 594px;
      border: 1px solid ${COLOR.white};
      background-color: transparent;
    `}
  ${(props) =>
    props.middle &&
    css`
      max-width: 496px;
      height: 496px;
      border: none;
      background-color: ${COLOR.purple};
    `}
    ${(props) =>
    props.small &&
    css`
      max-width: 333px;
      height: 333px;
      border: none;
      background-color: ${COLOR.blue};
    `}
`;

export const BannerImage = () => {
  return (
    <Circle big>
      <Circle middle>
        <Circle small>
          <img
            src={BannerImg}
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Circle>
      </Circle>
    </Circle>
  );
};
