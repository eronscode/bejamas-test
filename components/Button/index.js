import React from "react";
import { StyledButton } from "./styles";


const defaultProps = {
  className: undefined,
  children: undefined,
  variant: "primary",
  disabled: false,
  isLoading: false,
  round: true,
  onClick: () => {},
};

const ButtonLoader = () => (
  <>
    <div>Loading...</div>
  </>
);

const Button = React.forwardRef(function ButtonWrapper(
  { children, variant, disabled, onClick, isLoading, ...restProps },
  ref
) {
  const handleClick = () => {
    if (!disabled && !isLoading) {
      onClick();
    }
  };

  return (
    <StyledButton
      {...restProps}
      variant={variant}
      disabled={disabled}
      onClick={handleClick}
      ref={ref}
    >
      {isLoading ? <ButtonLoader /> : children}
    </StyledButton>
  );
});

Button.defaultProps = defaultProps;

export default Button;
