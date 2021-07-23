import { color } from "@styles/styleUtils";
import styled, { css } from "styled-components";

export const ScrollOverlay = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* overflow-x: hidden; */
  /* overflow-y: auto; */

  -webkit-overflow-scrolling: touch;
  min-height: 100%;
  background: rgba(2, 19, 51, 0.5);
  display: flex;
  justify-content: center;
  @media screen and (min-width: 966px) {
    &.hidden-lg{
        display: none;
    }
  }
`;

export const StyledModal = styled.div`
  display: inline-block;
  position: relative;
  background: ${color.secondary.default};
  margin-top: 50px;

  /* min-height: 100%; */
  vertical-align: middle;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  /* box-shadow: ''; */
  filter: drop-shadow(0px 3px 5px rgba(9, 30, 66, 0.2)),
    drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31));
`;

const modalSizes = {
  sm: css`
    max-width: 550px;
  `,
  md: css`
    max-width: 700px;
  `,
  lg: css`
    max-width: 950px;
  `,
};

export const ModalHeader = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 22px 22px 10px 22px;
  width: 100%;
  justify-content: space-between;
  font-size: 26px;
  line-height: 37px;

  color: #000000;
`;
