import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import images
import tatamis1 from "@/assets/gallery/tatamis-1.png";
import tatamis2 from "@/assets/gallery/tatamis-2.png";
import cageMma from "@/assets/gallery/cage-mma.png";
import sacFrappe from "@/assets/gallery/sac-frappe.jpeg";
import espaceCardio from "@/assets/gallery/espace-cardio.png";

const galleryImages = [
  {
    src: tatamis1,
    title: "Tatamis - Espace Combat",
    description: "Tatamis professionnels pour MMA, JJB et Grappling"
  },
  {
    src: tatamis2,
    title: "Tatamis - Zone d'Entraînement",
    description: "Espace d'entraînement technique et sparring"
  },
  {
    src: cageMma,
    title: "Espace Cardio",
    description: "Zone cardio et préparation physique"
  },
  {
    src: sacFrappe,
    title: "Sacs de Frappe",
    description: "Équipement de frappe haute qualité"
  },
  {
    src: espaceCardio,
    title: "Cage MMA",
    description: "Cage octogonale professionnelle pour MMA"
  }
];

const Galerie = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Galerie - Apex Martial Gym Toulon | Photos de la Salle</title>
      <meta
        name="description"
        content="Découvrez les installations d'Apex Martial Gym Toulon : tatamis, cage MMA, sacs de frappe, espace cardio. Club d'arts martiaux moderne et équipé."
      />

      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Galerie
              <span className="block text-2xl md:text-3xl text-accent font-normal mt-2">
                Découvrez nos installations
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Des équipements professionnels dans un cadre moderne pour votre entraînement
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-square relative">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                        <p className="text-sm">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Prêt à vous entraîner ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Rejoignez-nous pour découvrir nos installations exceptionnelles
            </p>
            <Button variant="hero" size="xl" className="animate-pulse-glow">
              Réserver un essai gratuit
            </Button>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            <img
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].title}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-4 left-4 right-4 text-center text-white">
              <h3 className="text-xl font-bold mb-2">
                {galleryImages[currentImageIndex].title}
              </h3>
              <p className="text-sm text-gray-300">
                {galleryImages[currentImageIndex].description}
              </p>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Galerie;