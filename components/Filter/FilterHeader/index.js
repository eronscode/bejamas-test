import styled from "styled-components";
import { color, font } from "@styles/styleUtils";
import { ArrowDownIcon, ArrowUpIcon, FilterToggleIcon } from "@utils/icons";
import { useState } from "react";
import { useAppContext } from "context/app.context";

function FilterHeader() {
  const [value, setValue] = useState("name");
  const [currentSort, setCurrentSort] = useState(null);
  const { sortProducts } = useAppContext()
  const isAscending = currentSort === "asc" && "active";
  const isDescending = currentSort === "desc" && "active";

  function handleChange(e) {
    setCurrentSort(null)
    setValue(e.target.value)
  }

  function toggleSort(order) {
    setCurrentSort(order);
    const payload = {
      key: value,
      order
    }
    sortProducts(payload)
  }

  return (
    <Wrapper>
      <div className="title">
        <h4>Photography</h4>
        <span>/</span>
        <h4>Premium Photos</h4>
      </div>
      <div className="sort-wrapper ">
        <span className="hidden-lg">
          <FilterToggleIcon />
        </span>
        <div className="arrow-sort hidden-sm">
          <ArrowUpIcon
            className={isAscending || ""}
            onClick={() => toggleSort("asc")}
          />
          <ArrowDownIcon
            className={isDescending || ""}
            onClick={() => toggleSort("desc")}
          />
          <span>Sort By</span>
        </div>
        <div>
          <select
            className="select-input hidden-sm"
            value={value}
            onChange={handleChange}
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    span {
      font-weight: 600;
      font-size: 34px;
      line-height: 37px;
      color: ${color.primary.default};
      margin: 0 13px;
    }
    h4 {
      ${font.bold}
      ${font.size(30)}
        line-height: 33px;
      color: ${color.primary.default};
      display: inline-block;
    }
    h4:last-child {
      ${font.regular}
      color: ${color.primary.inc3};
    }
  }
  .select-input {
    font-size: 22px;
    line-height: 24px;
    padding: 7px;
    border: none;
    cursor: pointer;
  }

  .sort-wrapper {
    display: flex;
    align-items: center;
  }

  .arrow-sort {
    span {
      ${font.size(22)}
      line-height: 24px;
      color: ${color.primary.inc3};
      margin: 0 9px 0 6px;
    }
    svg{
        color: ${color.primary.inc3};
        cursor: pointer;
        margin: 0 4px;
        width: 8px;
        height: 20px;
        &.active{
            color: ${color.primary.default};
        }
    }
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
    }
    .hidden-sm {
      display: none;
    }
  }
  @media screen and (max-width: 966px) {
    .title {
        h4, span {
            ${font.size(18)}
        }
    }
  }
`;

export default FilterHeader;
