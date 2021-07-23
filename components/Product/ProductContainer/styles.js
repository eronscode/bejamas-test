import { color, font } from "@styles/styleUtils";
import styled from "styled-components";

export const PContainter = styled.div`
  margin: 40px 0;
  .header {
    margin: 50px 0;
  }
  .body {
    display: flex;
    align-items: center;
  }
  .aside {
    width: 16%;
    margin-right: 30px;
  }
  .content {
    width: 80%;
  }
  .product-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .product-item {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding: 0 20px;
  }

  @media screen and (max-width: 966px) {
    .aside {
      display: none;
    }
    .content {
      width: 100%;
    }
    .product-item {
      padding: 23px 0;
    }
  }
  @media screen and (min-width: 966px) {
    .product-item {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
  }
`;
