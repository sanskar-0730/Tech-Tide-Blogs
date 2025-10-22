"use client";
import { useState } from "react";

export default function BlogGrid() {
  const [filter, setFilter] = useState("all");

  const posts = [
    { id: 1, title: "Advanced JavaScript Patterns", category: "javascript" },
    { id: 2, title: "Modern CSS Grid Layouts", category: "css" },
    { id: 3, title: "React Hooks Deep Dive", category: "react" },
    { id: 4, title: "Testing JavaScript Applications", category: "javascript" },
    { id: 5, title: "CSS Animations and Transitions", category: "css" },
    { id: 6, title: "State Management in React", category: "react" },
  ];

  const filteredPosts = filter === "all" ? posts : posts.filter(p => p.category === filter);

  return (
    <section className="blog-grid-section">
      <div className="filter-bar">
        {["all", "react", "javascript", "css"].map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="blog-grid">
        {filteredPosts.map(post => (
          <article key={post.id} className="blog-card fade-in">
            <h3>{post.title}</h3>
            <p>Category: {post.category}</p>
            <button className="link-btn">Read More →</button>
          </article>
        ))}
      </div>
    </section>
  );
}