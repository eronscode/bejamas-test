import { color, font } from "@styles/styleUtils";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
  border-bottom: 4px solid #e4e4e4;

  span {
    cursor: pointer;
  }
  .cart-badge {
    background: ${color.primary.default};
    color: ${color.secondary.default};
    padding: 5px 6px;
    position: relative;
    font-size: ${font.size(15)};
    line-height: 22px;
    top: 1px;
    left: -4px;
  }
`;
