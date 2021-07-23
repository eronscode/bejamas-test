import FilterHeader from "@components/Filter/FilterHeader";
import FilterSideBar from "@components/Filter/FilterSideBar";
import { PContainter } from "./styles";

function ProductContainer() {
  return (
    <PContainter>
      <div className="header">
      <FilterHeader />
      </div>
      <div className="body">
          <div className="aside"><FilterSideBar /></div>
          <div className="content">
              
          </div>
      </div>
    </PContainter>
  );
}

export default ProductContainer;
