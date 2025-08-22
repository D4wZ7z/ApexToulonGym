import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-dark pt-24">
      <div className="text-center max-w-2xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient">404</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Page introuvable
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/">Retour à l'Accueil</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Nous Contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
