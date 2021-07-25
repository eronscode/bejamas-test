import { useRef, useState } from "react";
import FilterHeader from "@components/Filter/FilterHeader";
import FilterModal from "@components/Filter/FilterModal";
import FilterSideBar from "@components/Filter/FilterSideBar";
import Pagination from "@components/Pagination";
import { handleFilteringSorting, paginator } from "@utils/methods";
import { useAppContext } from "context/app.context";
import ProductCard from "../ProductCard";
import { PContainter } from "./styles";
import { ITEMS_PER_PAGE } from "@utils/constants";

function ProductContainer() {
  const {
    products,
    addToCart,
    sortOptions,
    priceFilterOptions,
    categoryFilterOptions,
  } = useAppContext();
  const [page, setPage] = useState(1);
  const containerRef = useRef();

  function paginateData(page, data) {
    const paginate = paginator(data, ITEMS_PER_PAGE);
    return paginate(page);
  }

  function paginateOtherData(data) {
    setPage(data);
    containerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  if (!products) return null;
  const mainProducts = products.filter((item) => !item.featured);

  const filteredProducts = handleFilteringSorting(
    mainProducts,
    categoryFilterOptions,
    priceFilterOptions,
    sortOptions?.order,
    sortOptions?.key
  );

  let newData = paginateData(page, filteredProducts);
  let pageLength = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  let pre_page = page - 1 ? page - 1 : null;
  let next_page = pageLength > page ? page + 1 : null;

  // console.log({neeww})
  console.log({priceFilterOptions})

  return (
    <PContainter ref={containerRef}>
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
            {newData.map((item) => (
              <div key={item.id} className="product-item">
                <ProductCard {...item} addToCart={() => addToCart(item)} />
              </div>
            ))}
          </div>
          <Pagination
            length={pageLength}
            prev={pre_page}
            next={next_page}
            click={paginateOtherData}
            currentPage={page}
          />
        </div>
      </div>
    </PContainter>
  );
}

export default ProductContainer;
