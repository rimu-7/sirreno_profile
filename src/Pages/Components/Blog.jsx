import React, { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import { Link } from "react-router-dom";
import { blogs } from "../../assets/dummyBlog";

const Blog = () => {
  return (
    <div className="h-screen flex flex-col overflow-y-hidden">
      <div className="flex-grow p-4 overflow-y-auto">
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
              <h3
                className="text-lg font-semibold mt-2"
                title={blog.blog_title}
              >
                {blog.blog_title.length > 50
                  ? `${blog.blog_title.substring(0, 50)}...`
                  : blog.blog_title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
};

export default Blog;
