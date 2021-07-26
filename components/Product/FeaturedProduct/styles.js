import { color, font, mixins } from "@styles/styleUtils";
import styled from "styled-components";

export const FeaturedWrapper = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 30px 0;
    h4 {
      ${font.bold}
      ${font.size(32)}
        color: ${color.primary.default}
    }
  }
  .image-wrapper {
    .image-container {
      width: 100%;
      height: 700px;
      position: relative;
    }
    .tag-label {
      position: absolute;
      background: ${color.secondary.default};
      padding: 26px 30px;
      text-align: center;
      transform: translateY(-100%);
      ${font.bold}
      ${font.size(20)}
      line-height: 22px;
    }

    /* height: 800px;
    width: 100%;
    overflow: hidden;

    .image-container{
        width: 100%;
    height: 100%;

    > div {
      position: unset !important;
    }

    .image {
      object-fit: contain;
      width: 100% !important;
      position: relative !important;
      height: unset !important;
    }
    } */
  }

  .hidden-sm {
    display: block;
   
  }
  .hidden-lg {
    display: none;
  }

  @media screen and (max-width: 966px) {
    .hidden-lg {
      display: block;
      margin-top: 20px;
    }
    .hidden-sm {
      display: none;
    }
    .image-container {
      height: 400px !important;
    }
  }
`;

export const FeaturedDescription = styled.div`
  margin: 40px 0 0 0;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  border-bottom: 4px solid ${color.secondary.inc1};
  padding-bottom: 34px;

  .about {
    width: 50%;
    h4 {
      ${font.bold}
      ${font.size(22)}
      line-height: 24px;
      margin: 0 0 20px 0;
    }
    h4:nth-child(2) {
      color: ${color.primary.inc1};
    }

    p {
      ${font.regular}
      ${font.size(18)}
      line-height: 180%;
      color: ${color.primary.inc1};
    }
  }

  .related-info {
    width: 50%;
    text-align: right;
    h4 {
      ${font.bold}
      ${font.size(22)}
        line-height: 24px;
    }
    .suggestion-item-wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin: 25px 0;
      .suggestion-item {
        margin: 0 10px 10px 0;
        width: 117px;
        height: 150px;
        position: relative;
      }
    }

    .details {
      p {
        ${font.regular}
        ${font.size(16)};
        line-height: 17px;
        margin: 22px 0px;
        color: ${color.primary.inc1};
      }
    }
  }

  @media screen and (max-width: 966px) {
    flex-direction: column;
    .about {
      width: auto;
    }
    .related-info {
      width: auto;
      text-align: left;
      .suggestion-container {
        margin: 15px 0 0 0;
      }
      .suggestion-item-wrapper {
        justify-content: flex-start;
        .suggestion-item {
          width: 110px;
        }
      }
    }
  }
`;
