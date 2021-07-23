import { color, font } from "@styles/styleUtils";
import styled from "styled-components";


export const PContainter = styled.div`
    margin: 40px 0;
    .header{
        margin: 50px 0;
    }
    .body{
        display: flex;
        align-items: center;
    }
    .aside{
        width: 16%;
        margin-right: 30px;
    }
    .content{
        width: 80%;
    }

    @media screen and (max-width: 966px) {
    .aside {
        display: none;
    }
    .content{
        width: 100%;
    }
  }
`