import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Blog.css";

const Blog = ({ blog, src, alt, h1 }) => {
  return (
    <Link href={`/blog/${blog}`} className="blogs">
      <Image className="blog-logo" width={400} height={250} src={src} alt={alt} priority />
      <h1>{h1}</h1>
    </Link>
  );
};

export default Blog;