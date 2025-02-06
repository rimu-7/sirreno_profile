import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import Blog from "./Blog";
import { blogs } from "../../assets/dummyBlog";
import Footer from "../Shared/Footer/Footer";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.blog_id === id);

  if (!blog) {
    return <div className="p-4">Blog not found</div>;
  }

  const paragraphs = blog.blog_description.split("###");

  return (
    <div className="">
      <div className="p-4 max-w-2xl mx-auto">
        <img
          src={blog.blog_image}
          alt={blog.blog_title}
          className="w-full rounded-lg"
        />
        <h2
          className="text-3xl text-center font-bold m-4"
          style={{ fontFamily: "Abril Fatface, serif" }}
        >
          {blog.blog_title}
        </h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mt-2 text-justify">
            {paragraph.trim()}
          </p>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;
