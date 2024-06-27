import React, { useEffect } from "react";
import Poster from "../poster/Poster";
import Products from "../products/Products";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../categories/Categories";
import Banner from "../banner/Banner";
import { filterByPrice } from "../../features/products/productsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const {
    products: { list, filtered },
    categories,
  } = useSelector((state) => state);
  useEffect(() => {
    if (!list.length) return;
    dispatch(filterByPrice(60));
  }, [dispatch, list.length]);
  return (
    <div>
      <Poster />
      <Products products={list} amount={5} title="Trending" />
      <Categories products={categories.list} amount={5} title="Worth seeing" />
      <Banner />
      <Products products={filtered} amount={5} title="Less than $60" />
    </div>
  );
};

export default Home;
