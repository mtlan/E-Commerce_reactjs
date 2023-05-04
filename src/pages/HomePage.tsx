import React from "react";
// import Header from "../components/layouts/Header";
// import Footer from "../components/layouts/Footer";
// import Main from "../components/layouts/Main";
import HomeContent from "../components/HomeContent";
import HomePost from "../components/HomePost";
import HomePostItem from "../components/HomePostItem";
import { posts } from "../data/posts";
import HomeSubscribe from "../components/HomeSubscribe";

const HomePage = () => {
  return (
    <>
      <HomeContent />
      <HomePost>
        {posts.map((post) => (
          <HomePostItem
            key={post.id}
            image={post.image}
            content={post.content}
            desc={post.desc}
          />
        ))}
      </HomePost>
      <HomeSubscribe />
    </>
  );
};

export default HomePage;
