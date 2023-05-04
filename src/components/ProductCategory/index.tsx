import React from "react";
import { Spin } from "antd";
import { Link } from "react-router-dom";

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

const ProductCategory = () => {
  let [products, setProducts] = React.useState<[ProductType] | null>(null)
    let [loading, setLoading] =  React.useState(false);
    let [categoryId, setCategoryId] =  React.useState(0);
  React.useEffect(() => {
    let fetchProduct = async () => {
      let url = categoryId == 0 ? 'https://api.escuelajs.co/api/v1/products' : `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
      const response = await fetch(url);
      const result = await response.json();
      
      setProducts(result)
      
    };
    fetchProduct();
  }, []);
  
  return (
    <>
      <div className="col_sidebar">
        <section>
          <h2 className="section_subtitle">Bộ lọc</h2>
          {products && products.length > 0 && products.map((item) => {
                
              return (
                <ul className="filters" key={item.id}>
                  <Link to={`/product/${item.id}`}>
                  <li>{item.title}</li>
                  </Link>
                </ul>
              );
            })}
        </section>
      </div>
    </>
  );
};

export default ProductCategory;
