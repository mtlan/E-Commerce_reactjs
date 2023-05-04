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

const ProductList = () => {
  let [products, setProducts] = React.useState<[ProductType] | null>(null);
  let [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    let fetchProduct = async () => {
      setLoading(true);
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/products?offset=0&limit=4"
      );
      const result = await response.json();
      setProducts(result);
      setLoading(false);
    };
    fetchProduct();
  }, []);
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      <div className="col_main">
        <section>
          <h2 className="section_subtitle">Danh sách sản phẩm</h2>

          <div className="product_wrapper d-flex">
            {loading && (
              <div>
                <Spin />
              </div>
            )}
            {products &&
              products.length > 0 &&
              products.map((product) => {
                return (
                  <div className="product_item" key={product.id}>
                    <Link to={`/product/${product.id}`}>
                      <img src={product.images[0]} alt="" />
                      <h3>{product.title}</h3>
                    </Link>

                    <div className="price">
                      <strong>{USDollar.format(product.price)}</strong>
                      {/* <del>1.725.000đ</del> */}
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductList;
