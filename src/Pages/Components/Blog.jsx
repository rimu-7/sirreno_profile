import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../../assets/dummyBlog";
import Footer from "../Shared/Footer/Footer";

const Blog = () => {
  return (
    <div className="bg-[#212121] flex flex-col ">
      <div className="flex-grow p-4 ">
        <div className="flex flex-col w-96  gap-4 mx-auto">
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
      <Footer/>
    </div>
  );
};

export default Blog;