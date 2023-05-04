import React from "react";
import { Spin } from 'antd';

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updateAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updateAt: string;
  };
}

const ProductList = () => {
  let [products, setProducts] = React.useState<[ProductType] | null>(null);
  let [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    let fetchProduct = async () => {
      setLoading(true);
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      let result = await response.json();

      console.log(result);
      setProducts(result);
      setLoading(false);
    };

    fetchProduct();
  }, []);

  return <div>ProductList
    {loading && <div><Spin/></div>}
    {products && products.length > 0 && products.map((product)=>{
      
      return (
        <li key={product.id}>
          <img height={50} src={product.images[0]} alt="" />
          <h3>{product.title}</h3>
          <div>{product.price}</div>
        </li>
      )
    })}
  </div>;
};

export default ProductList;
