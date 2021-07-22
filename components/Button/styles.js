import styled, { css } from "styled-components";

import { color, font, mixins } from "@styles/styleUtils";

const StyledButton = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  line-height: 1;
  padding: 10px 12px;
  white-space: nowrap;
  transition: all 0.1s;
  appearance: none;
  border: 3px solid ${color.primary.default};
  outline: 0;
  text-transform: uppercase;
  min-width: 100%;
  line-height: 25px;
  letter-spacing: 0.07em;
  ${mixins.clickable}
  ${font.size(23)}
  ${(props) => buttonVariants[props.variant]}
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const buttonVariants = {
  primary: css`
    color: ${color.secondary.default};
    background: ${(props) => color[props.variant].default};
  `,
  secondary: css`
    color: ${color.primary.default};
    background: ${(props) => color[props.variant].default};
  `,
};

export { StyledButton };
