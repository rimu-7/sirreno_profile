import React, { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import { Link } from "react-router-dom";
import { blogs } from "../../assets/dummyBlog";

const Blog = () => {
  return (
    <div className="">
      <div className="p-4 h-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {blogs.map((blog) => (
            <Link
              to={`/blogdetails/${blog.blog_id}`}
              key={blog.blog_id}
              className="border p-4 rounded-lg cursor-pointer"
            >
              <img
                src={blog.blog_image}
                alt={blog.blog_title}
                className="w-full h-48 object-cover rounded-lg"
                style={{ fontFamily: "Abril Fatface, serif" }}
              />
              <h3 className="text-lg font-semibold mt-2">{blog.blog_title}</h3>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
