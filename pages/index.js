import { useEffect, useState } from "react";
import MultiCheckBox from "@components/CheckBox/MultiCheckBox";
import SingleCheckBox from "@components/CheckBox/SingleCheckBox";
import FilterHeader from "@components/Filter/FilterHeader";
import FilterSideBar from "@components/Filter/FilterSideBar";
import FeaturedProduct from "@components/Product/FeaturedProduct";
import ProductContainer from "@components/Product/ProductContainer";
import { useProductService } from "@utils/hooks/useProductService";
import Head from "next/head";
import Image from "next/image";
import { useAppContext } from "context/app.context";
import { ResponsiveArticle } from "@utils/placeholders";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { products, loadProducts } = useAppContext();

  useEffect(() => useProductService(setLoading, setError, loadProducts), []);

  if (loading) {
    return <ResponsiveArticle />;
  }

  if (error) {
    return "Error Occured";
  }

  const featuredProduct = products.filter((item) => item.featured);
  return (
    <>
      <FeaturedProduct product={featuredProduct[0]} />
      <ProductContainer />
    </>
  );
}
