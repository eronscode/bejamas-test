import { css } from "styled-components";

export const color = {
  primary: {
    default: "#000000",
    inc1: "#656565",
    inc2: "",
    inc3: "",
  },
  secondary: {
    default: "#ffffff",
    inc1: "#E4E4E4",
  },
};

export const font = {
  regular: 'font-family: "ArchivoRegular"; font-weight: normal;',
  bold: 'font-family: "ArchivoBold"; font-weight: normal;',
  size: (size) => `font-size: ${size}px;`,
};

export const mixins = {
  truncateText: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  clickable: css`
    cursor: pointer;
    user-select: none;
  `,
  scrollableY: css`
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  `,
  customScrollbar: ({ width = 8, background = color.backgroundMedium } = {}) => css`
    &::-webkit-scrollbar {
      width: ${width}px;
    }
    &::-webkit-scrollbar-track {
      background: none;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 99px;
      background: ${background};
    }
  `,
};
