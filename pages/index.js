import { useEffect, useState } from "react";
import dynamic from 'next/dynamic'
import productService from "@utils/hooks/useProductService";
import { useAppContext } from "context/app.context";
import { ContentPlaceholder, NoData } from "@utils/placeholders";

const FeaturedProduct = dynamic(() => import('@components/Product/FeaturedProduct'))
const ProductContainer = dynamic(() => import('@components/Product/ProductContainer'))

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { loadProducts } = useAppContext();

  useEffect(
    () => productService.fetchProducts(setLoading, setError, loadProducts),
    []
  );

  if (loading) {
    return <ContentPlaceholder/>;
  }

  if (error) {
    return (
      <NoData
        text="Error Occured while fetching Data"
        subText="Try checking internet or database connection "
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
