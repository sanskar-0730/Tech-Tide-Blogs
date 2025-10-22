export default async function BlogPost({ params }) {
  const { slug } = await params;

  return (
    <div className="blog-post">
      <h1>Blog Topic: {slug.replaceAll("-", " ")}</h1>
      <p>This is the blog page for {slug}.</p>
    </div>
  );
}