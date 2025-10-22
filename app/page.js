import Hero from "@/components/Hero";
import BlogGrid from "@/components/BlogGrid";

export default function Home() {
  return (
    <div className="blogs-container">
      <Hero />
      <main className="main-container">
        <BlogGrid />
      </main>
    </div>
  );
}