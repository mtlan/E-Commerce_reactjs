// library
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/layouts/Layout";

// css
import "./styles/global.css";
import "./styles/index.css";
import "./styles/product.css";
import NoPage from "./pages/NoPage";
import GetMethod from "./components/NetworkingCallAPI/GetMethod";
import PostMethod from "./components/NetworkingCallAPI/PostMethod";
import ProductList from "./components/NetworkingCallAPI/ProductList";
import PostLogin from "./components/NetworkingCallAPI/PostLogin";
import ProductDetail from "./pages/ProductDetail";


function App() {
  return (
    // <div>
    //   {/* <HomePage/> */}
    //   <CategoryPage/>
    //   {/* <ProductPage/> */}
    // </div>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/getmethod" element={<GetMethod />} />
            <Route path="/postmethod" element={<PostMethod />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/postlogin" element={<PostLogin />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
