import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../Shared/Footer/Footer";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://nativeadmin-five.vercel.app/api/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-white text-center mt-10">Loading blogs...</div>;
  }

  return (
    <div className="bg-[#212121] flex text-white  flex-col">
      <div className="flex-grow p-4">
        <div className="flex flex-col w-96 gap-4 mx-auto">
          {blogs.length === 0 ? (
            <p className="text-white text-center">No blogs available.</p>
          ) : (
            blogs.map((blog) => (
              <Link
                to={`/blogdetails/${blog.blog_id}`}
                key={blog.blog_id}
                className="border p-4 rounded-lg   cursor-pointer "
              >
                <img
                  src={blog.blog_image}
                  alt={blog.blog_title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3
                  className="text-lg font-semibold mt-2 "
                  title={blog.blog_title}
                >
                  {blog.blog_title.length > 50
                    ? `${blog.blog_title.substring(0, 50)}...`
                    : blog.blog_title}
                </h3>
              </Link>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
