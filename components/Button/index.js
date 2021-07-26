import React from "react";
import PropTypes from "prop-types";
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

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  round: PropTypes.bool,
  onClick: PropTypes.func,
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
Button.propTypes = propTypes;

export default Button;
