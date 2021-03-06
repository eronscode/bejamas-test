import { color, font, mixins } from "@styles/styleUtils";
import styled from "styled-components";

export const CartDropDownWrapper = styled.div`
  position: absolute;
  right: 42px;
  width: 443px;
  top: 98px;
  background: ${color.secondary.default};
  border: 4px solid ${color.secondary.inc1};
  z-index: 1;
  .close-icon {
    text-align: right;
    svg {
      width: 18px;
      ${mixins.clickable}
    }
  }
  .footer {
    margin: 20px 0 0;
  }
  padding: 15px 20px;
  @media screen and (max-width: 768px) {
    width: 300px;
    right: 11px;
  }
`;

export const CartContent = styled.div`
  padding: 0px 22px 22px 0;
  margin-top: 20px;
  overflow: auto;
  overflow-x: hidden;
  resize: none;
  height: 100%;
  max-height: 295px;
  p {
    margin: 0;
  }

  ${mixins.customScrollbar(5)}
`;

export const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c2c2c2;
  padding: 20px 0;

  .item-info {
    width: 60%;
    padding: 0 18px 0 0;
    h4 {
      ${font.bold}
      ${font.size(20)}
      /* ${mixins.truncateText} */
      line-height: 27px;
      margin: 0 0 10px 0;
    
    }
    p {
      ${font.size(29)}
      line-height: 32px;
      ${font.regular}
      color: ${color.primary.inc1};
    }
  }

  .item-image {
    .image-container {
      width: 100px;
      height: 100px;
      position: relative;
    }
    /* width: 111px;

    > div {
      position: unset !important;
    }

    .image {
      object-fit: contain;
      width: 100% !important;
      position: relative !important;
      height: unset !important;
    } */
  }
`;
