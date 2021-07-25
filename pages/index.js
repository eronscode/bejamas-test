import { useEffect, useState } from "react";
import MultiCheckBox from "@components/CheckBox/MultiCheckBox";
import SingleCheckBox from "@components/CheckBox/SingleCheckBox";
import FilterHeader from "@components/Filter/FilterHeader";
import FilterSideBar from "@components/Filter/FilterSideBar";
import FeaturedProduct from "@components/Product/FeaturedProduct";
import ProductContainer from "@components/Product/ProductContainer";
import productService from "@utils/hooks/useProductService";
import { useAppContext } from "context/app.context";
import { ResponsiveArticle } from "@utils/placeholders";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {  loadProducts } = useAppContext();

  useEffect(() => productService.fetchProducts(setLoading, setError, loadProducts), []);

  if (loading) {
    return <ResponsiveArticle />;
  }

  if (error) {
    return "Error Occured";
  }

  return (
    <>
      <FeaturedProduct  />
      <ProductContainer />
    </>
  );
}
