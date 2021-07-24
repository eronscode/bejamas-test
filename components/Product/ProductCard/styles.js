import { color, font } from "@styles/styleUtils";
import styled from "styled-components";

export const ProductCardContainer = styled.div`
  text-transform: capitalize;
  .image-container {
    width: 100%;
    height: 390px;
    position: relative;
    .tag-label {
      position: absolute;
      top: 0;
      left: 0;
      background: ${color.secondary.default};
      z-index: 1;
      padding: 10px 7px;
      text-align: center;
      /* transform: translateY(-100%); */
      ${font.regular}
      ${font.size(20)}
      line-height: 22px;
    }
  }

  .product-info {
    margin-top: 10px;
    span {
      ${font.size(20)}
      ${font.bold}
      line-height: 24px;
      color: ${color.primary.inc1};
    }

    h4 {
      ${font.size(34)}
      line-height: 37px;
      margin: 7px 0;
      color: ${color.primary.default};
    }
    p {
      ${font.size(29)}
      line-height: 32px;
      ${font.regular}
      color: ${color.primary.inc3};
    }
  }

  .cart-button {
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 0;
    display: block;
  }
  @media screen and (min-width: 966px) {
    .cart-button {
      display: none;
    }

    &:hover .cart-button {
      display: block;
      transition: all 1s ease-in;
    }
  }
`;
