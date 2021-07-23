import FilterHeader from "@components/Filter/FilterHeader";
import FilterModal from "@components/Filter/FilterModal";
import FilterSideBar from "@components/Filter/FilterSideBar";
import ProductCard from "../ProductCard";
import { PContainter } from "./styles";

function ProductContainer() {
  return (
    <PContainter>
      <div className="header">
        <FilterHeader />
      </div>
      <div className="body">
        <div className="aside">
          <FilterSideBar />
         <FilterModal /> 
        </div>
        <div className="content">
          <div className="product-wrapper">
            <div className="product-item"><ProductCard /></div>
            <div className="product-item"><ProductCard /></div>
            <div className="product-item"><ProductCard /></div>
          </div>
        </div>
      </div>
    </PContainter>
  );
}

export default ProductContainer;
