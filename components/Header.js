"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href='/'><h1 className="logo gradient-text">TechTide Blogs</h1></Link>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link href='/'><li>Home</li></Link>
          <Link href='/articles'><li>Articles</li></Link>
          <Link href='/categories'><li>Categories</li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/contact'><li>Contact</li></Link>
        </ul>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}