import React from "react";
import ButtonBase from "./components/ButtonBase";
import ButtonLink from "./components/ButtonLink";

interface IButtonProps {
  primary?: boolean;
  secondary?: boolean;
  moreDetail?: boolean;
  disabled?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = ({
  primary,
  secondary,
  moreDetail,
  disabled,
  href,
  onClick,
  children,
}) => {
  if (href) {
    return (
      <ButtonLink to={disabled ? "" : href}>
        <ButtonBase
          disabled={disabled}
          onClick={onClick}
          primary={primary}
          secondary={secondary}
          moreDetail={moreDetail}
        >
          {children}
        </ButtonBase>
      </ButtonLink>
    );
  }

  return (
    <ButtonBase
      disabled={disabled}
      onClick={onClick}
      primary={primary}
      secondary={secondary}
      moreDetail={moreDetail}
    >
      {children}
    </ButtonBase>
  );
};
