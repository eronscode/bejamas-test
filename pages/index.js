import { useEffect, useState } from "react";
import productService from "@utils/hooks/useProductService";
import { useAppContext } from "context/app.context";
import { ContentPlaceholder, NoData } from "@utils/placeholders";
import FeaturedProduct from "@components/Product/FeaturedProduct";
import ProductContainer from "@components/Product/ProductContainer";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { loadProducts } = useAppContext();

  useEffect(
    () => productService.fetchProducts(setLoading, setError, loadProducts),
    []
  );

  if (loading) {
    return <ContentPlaceholder />;
  }

  if (error) {
    return (
      // Mini implmenteation. Further implementation would be to display API specific error from response.
      <NoData
        text="Error Occured while fetching Data"
        subText="This is unlikely to happen. Try checking internet or database connection"
      />
    );
  }

  return (
    <>
      <FeaturedProduct />
      <ProductContainer />
    </>
  );
}
