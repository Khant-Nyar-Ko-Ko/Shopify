import { useEffect } from "react";
import { getData } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../services/productSlice";
import Card from "./Card";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const getProductsData = async () => {
    const data = await getData("/products");
    dispatch(addProducts(data));
  };

  useEffect(() => {
    getProductsData();
  }, []);
  return (
    <div className=" my-5 pt-16 flex flex-wrap gap-7 justify-center">
      {products?.map((product) => (
        <Card key={product?.id} product={product}/>
      ))}
    </div>
  );
};

export default Products;
