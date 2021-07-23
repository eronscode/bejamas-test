import { color, font } from "@styles/styleUtils";
import styled from "styled-components";

export const CheckBoxWrapper = styled.div`
  .checkbox-wrapper {
    margin: 14px 0;
  }
  .checkbox-label {
    ${font.size(20)}
    line-height: 24px;
    color: ${color.primary.inc2};
    margin-left: 20px;
    cursor: pointer;
  }
`;
