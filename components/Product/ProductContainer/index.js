import { useEffect, useRef, useState } from "react";
import FilterHeader from "@components/Filter/FilterHeader";
import FilterSideBar from "@components/Filter/FilterSideBar";
import Pagination from "@components/Pagination";
import { handleFilteringSorting, paginator } from "@utils/methods";
import { useAppContext } from "context/app.context";
import ProductCard from "../ProductCard";
import { PContainter } from "./styles";
import { ITEMS_PER_PAGE } from "@utils/constants";
import { NoData } from "@utils/placeholders";
import { isEmpty } from "lodash";
import FilterModal from "@components/Filter/FilterModal";

function ProductContainer() {
  const {
    products,
    addToCart,
    sortOptions,
    priceFilterOptions,
    categoryFilterOptions,
    filterProductsByCategory,
    filterProductsByPrice,
  } = useAppContext();
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkedCategory, setCheckedCategory] = useState([]);
  const [checkedPrice, setCheckedPrice] = useState([]);
  const containerRef = useRef();

  /*
    # ------------------------------------------------------------ #
    # Declarations and functions to handle sorting and filtering   #
    # ------------------------------------------------------------ #
  */
  const mainProducts = products.filter((item) => !item.featured);

  const filteredProducts = handleFilteringSorting(
    mainProducts,
    categoryFilterOptions,
    priceFilterOptions,
    sortOptions?.order,
    sortOptions?.key
  );
  useEffect(() => {
    setPage(1);
  }, [categoryFilterOptions, priceFilterOptions, sortOptions]);

  function handleCategoryFilter(values) {
    setCheckedCategory(values);
    filterProductsByCategory(values);
  }

  function handlePriceFilter(values) {
    setCheckedPrice(values);
    filterProductsByPrice(values);
  }

  /*
    # ------------------------------------------------- #
    # Declarations and functions to handle pagination   #
    # ------------------------------------------------- #
  */

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

  const newData = paginateData(page, filteredProducts);
  const pageLength = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const pre_page = page - 1 ? page - 1 : null;
  const next_page = pageLength > page ? page + 1 : null;

  function toggleModal() {
    setIsModalOpen((prev) => !prev);
  }

  if (isEmpty(products)) return null;

  return (
    <PContainter ref={containerRef}>
      <div className="header">
        <FilterHeader openModal={toggleModal} />
      </div>
      <div className="body">
        <div className="aside">
          <FilterSideBar
            handleCategoryFilter={handleCategoryFilter}
            handlePriceFilter={handlePriceFilter}
            checkedCategory={checkedCategory}
            checkedPrice={checkedPrice}
          />

          <FilterModal isOpen={isModalOpen} toggleModal={toggleModal} />
        </div>
        <div className="content">
          {newData.length === 0 &&
          (!isEmpty(categoryFilterOptions) ||
            !isEmpty(priceFilterOptions) ||
            !isEmpty(sortOptions)) ? (
            <NoData text="Sorry! No result found for the selected filter query!" />
          ) : null}
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
