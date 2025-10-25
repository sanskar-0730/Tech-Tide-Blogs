import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Page Not Found</h2>
        <p className="notfound-text">
          Oops! The page you’re looking for doesn’t exist or may have been moved.
        </p>
        <Link href="/" className="notfound-button">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}