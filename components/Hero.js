"use client"
export default function Hero() {

  function handleReadMore() {
    alert("Coming Soon!")
  }

  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Welcome to TechTide Blogs</h1>
        <p>Discover the latest in web development, design, and technology</p>
        <button onClick={handleReadMore} className="primary-btn">Start Reading</button>
      </div>
    </header>
  );
}