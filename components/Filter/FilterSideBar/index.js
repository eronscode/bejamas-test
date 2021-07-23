import MultiCheckBox from "@components/CheckBox/MultiCheckBox";
import SingleCheckBox from "@components/CheckBox/SingleCheckBox";
import styled from "styled-components";

import { color, font, mixins } from "@styles/styleUtils";

function FilterSideBar() {
  return (
    <Wrapper>
      <div className="item">
        <h4 className="header">Category</h4>
        <MultiCheckBox />
      </div>
      <div className="divider"></div>
      <div className="item">
        <h4 className="header">Price Range</h4>
        <SingleCheckBox />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .header {
    ${font.size(23)}
    ${font.bold}
    line-height: 24px;
    color: ${color.primary.default};
    margin-bottom: 25px;
  }

  .divider {
    border: 1px solid #c2c2c2;
    margin: 30px 0;
  }
`;

export default FilterSideBar;
