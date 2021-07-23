import MultiCheckBox from "@components/CheckBox/MultiCheckBox";
import SingleCheckBox from "@components/CheckBox/SingleCheckBox";
import FilterHeader from "@components/Filter/FilterHeader";
import FilterSideBar from "@components/Filter/FilterSideBar";
import FeaturedProduct from "@components/Product/FeaturedProduct";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <FeaturedProduct />
      <MultiCheckBox />
      <FilterHeader />
      <FilterSideBar />
      <div>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </div>
    </>
  );
}
