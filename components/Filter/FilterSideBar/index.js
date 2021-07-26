import { useState } from "react";
import MultiCheckBox from "@components/CheckBox/MultiCheckBox";
import SingleCheckBox from "@components/CheckBox/SingleCheckBox";
import styled from "styled-components";

import { color, font } from "@styles/styleUtils";
import { useAppContext } from "context/app.context";
import {
  createCategoryFilter,
  extractKeyValue,
  priceRageGenerator,
} from "@utils/methods";

function FilterSideBar({
  checkedPrice,
  checkedCategory,
  handleCategoryFilter,
  handlePriceFilter,
}) {
  const { products } = useAppContext();

  const mainProducts = products.filter((item) => !item.featured);

  const categories = createCategoryFilter(mainProducts);
  const extractedPrices = extractKeyValue(mainProducts, "price");
  const prices = priceRageGenerator(extractedPrices);

  return (
    <Wrapper>
      <div className="item">
        <h4 className="title">Category</h4>
        <MultiCheckBox
          values={categories}
          checkedItems={checkedCategory}
          onChange={handleCategoryFilter}
        />
      </div>
      <div className="divider"></div>
      <div className="item">
        <h4 className="title">Price Range</h4>
        <SingleCheckBox
          values={prices}
          checkedItems={checkedPrice}
          onChange={handlePriceFilter}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .title {
    ${font.size(23)}
    ${font.bold}
    line-height: 24px;
    color: ${color.primary.default};
    margin-bottom: 30px;
  }

  .divider {
    border: 1px solid #c2c2c2;
    margin: 30px 0;
  }
`;

export default FilterSideBar;
