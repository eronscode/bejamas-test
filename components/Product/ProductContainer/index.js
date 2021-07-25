import FilterHeader from "@components/Filter/FilterHeader";
import FilterModal from "@components/Filter/FilterModal";
import FilterSideBar from "@components/Filter/FilterSideBar";
import Pagination from "@components/Pagination";
import { paginator } from "@utils/methods";
import { useAppContext } from "context/app.context";
import { useState } from "react";
import ProductCard from "../ProductCard";
import { PContainter } from "./styles";

function ProductContainer() {
  const { products, addToCart } = useAppContext();
  const [page, setPage] = useState(1);
  const [paginate, setPaginate] = useState(false);

  function paginateData(page, data) {
    const paginate = paginator(data, 2);
    return paginate(page);
  }

  function paginateOtherData(data) {
    setPaginate(true);
    setPage(data);
    // this.searchRef.current.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "nearest",
    // });
  }

  if (!products) return null;
  const mainProducts = products.filter((item) => !item.featured);
  console.log({ mainProducts });

  let newData = paginateData(page, mainProducts);
  let pageLength = Math.ceil(mainProducts.length / 2);
  let pre_page = page - 1 ? page - 1 : null;
  let next_page = pageLength > page ? page + 1 : null;


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
