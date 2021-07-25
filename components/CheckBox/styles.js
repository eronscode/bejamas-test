import { color, font } from "@styles/styleUtils";
import styled from "styled-components";

export const CheckBoxWrapper = styled.div`
  text-transform: capitalize;
  .checkbox-wrapper {
    margin: 22px 0;
    display: block;
    width: fit-content;
  }
  .checkbox-label {
    ${font.size(20)}
    line-height: 24px;
    color: ${color.primary.inc2};
    margin-left: 10px;
    cursor: pointer;
  }
  input[type="checkbox"] {
    width: 17px;
    height: 17px;
    border: 1px solid ${color.primary.inc2};;
  }
`;
