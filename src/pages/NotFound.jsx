import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeftCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="bg-card shadow-lg rounded-3xl p-10 max-w-md text-center border border-border">
        
        {/* Decorative Icon */}
        <div className="mx-auto mb-6 h-24 w-24 flex items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-orange-400 text-white shadow-lg animate-pulse">
          <ArrowLeftCircle size={50} />
        </div>

        {/* Title */}
        <h1 className="text-6xl font-extrabold text-foreground mb-4">404</h1>

        {/* Subtitle */}
        <p className="text-lg text-muted-foreground mb-6">
          Oops! The page you are looking for doesn’t exist.
        </p>

        {/* Back Home Button */}
        <a
          href="/"
          className="inline-block bg-gradient-to-r from-red-500 to-orange-400 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
