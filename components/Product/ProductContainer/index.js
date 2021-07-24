import FilterHeader from "@components/Filter/FilterHeader";
import FilterModal from "@components/Filter/FilterModal";
import FilterSideBar from "@components/Filter/FilterSideBar";
import { useAppContext } from "context/app.context";
import ProductCard from "../ProductCard";
import { PContainter } from "./styles";

function ProductContainer() {
  const { products, addToCart } = useAppContext();

  if (!products) return null;
  const mainProducts = products.filter((item) => !item.featured);
  console.log({ mainProducts });
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
            {mainProducts.map((item) => (
              <div key={item.id} className="product-item">
                <ProductCard  {...item} addToCart={() => addToCart(item) } />
              </div>
            ))}

          </div>
        </div>
      </div>
    </PContainter>
  );
}

export default ProductContainer;
