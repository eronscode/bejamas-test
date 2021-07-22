import { color, font, mixins } from "@styles/styleUtils";
import styled from "styled-components";

export const CartDropDownWrapper = styled.div`
  position: absolute;
  right: 42px;
  width: 443px;
  top: 98px;
  background: ${color.secondary.default};
  border: 4px solid ${color.secondary.inc1};

  .close-icon {
    text-align: right;
    
    svg{
        width: 18px;
    }
  }
  padding: 15px 20px;
  @media screen  and (max-width: 768px){
    width: 300px;
    right: 11px;
  } 
`;

export const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c2c2c2;
  padding: 20px 0;
  .item-info {
    h4 {
      ${font.bold}
      ${font.size(20)}
      ${mixins.truncateText}
      line-height: 22px;
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
    width: 111px;

    > div {
      position: unset !important;
    }

    .image {
      object-fit: contain;
      width: 100% !important;
      position: relative !important;
      height: unset !important;
    }
  }
`;
