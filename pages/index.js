import MultiCheckBox from "@components/CheckBox/MultiCheckBox";
import SingleCheckBox from "@components/CheckBox/SingleCheckBox";
import FilterHeader from "@components/Filter/FilterHeader";
import FilterSideBar from "@components/Filter/FilterSideBar";
import FeaturedProduct from "@components/Product/FeaturedProduct";
import ProductContainer from "@components/Product/ProductContainer";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <FeaturedProduct />
      <ProductContainer />
    </>
  );
}
