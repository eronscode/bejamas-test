import { color, font } from "@styles/styleUtils";
import styled from "styled-components";

export const PaginationWrapper = styled.div`
  text-align: center;
  margin-top: 56px;
  margin-bottom: 73px;

  .pagination {
    display: inline-block;
  }

  .pagination button {
    color: #b4b4b4;
    float: left;
    padding: 8px 16px;
    ${font.regular}
    ${font.size(30)}
    margin: 0 4px;
    cursor: pointer;
  }

  .pagination button.active {
    ${font.bold}
    color: ${color.primary.default};
  }
  .pagination button:disabled {
    cursor: not-allowed;
    color: #ccc;
    opacity: 0.9;
    outline: 0;
  }

  .pagination button:hover:not(.active) {
    background-color: #ddd;
  }
`;
