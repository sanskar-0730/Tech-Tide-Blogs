export async function generateStaticParams() {
  return [
    { slug: 'first-post' },
    { slug: 'second-post' },
    { slug: 'my-third-blog' },
  ];
}

export default function BlogPost({ params }) {

  const { slug } = params;
  
  return (
    <div className="blog-post">
      <h1>Blog Topic: {slug.replaceAll("-", " ")}</h1>
      <p>This is your blog page for {slug}.</p>
    </div>
  );
}