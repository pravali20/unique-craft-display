import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <div className="text-8xl">🔍</div>
          <h1 className="text-6xl font-bold gradient-text">404</h1>
          <p className="text-xl text-muted-foreground">Oops! Page not found</p>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <Button asChild className="glow-primary">
          <a href="/">
            <Home className="h-4 w-4 mr-2" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
