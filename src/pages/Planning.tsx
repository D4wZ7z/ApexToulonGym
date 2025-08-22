import { useState } from "react";
import { Calendar, Clock, Users, Target, Trophy, Zap, X, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Import real planning images
import mmaAdulteReal from "@/assets/planning/mma-adulte-real.jpg";
import mmaAdoReal from "@/assets/planning/mma-ado-real.jpg";
import jjbAdulteReal from "@/assets/planning/jjb-adulte-real.jpg";

const Planning = () => {
  const [activeCategory, setActiveCategory] = useState("adultes");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const plannings = {
    adultes: [
      {
        discipline: "MMA Adultes",
        image: mmaAdulteReal,
        icon: <Trophy className="w-6 h-6" />,
        color: "from-primary to-primary-glow",
        description: "Mixed Martial Arts complet pour adultes",
      },
      {
        discipline: "JJB Adultes",
        image: jjbAdulteReal,
        icon: <Target className="w-6 h-6" />,
        color: "from-accent to-primary",
        description: "Jiu-Jitsu Brésilien Gi et No-Gi",
      },
      {
        discipline: "Grappling Adultes",
        image: jjbAdulteReal, // Utilise la même image que JJB pour le moment
        icon: <Users className="w-6 h-6" />,
        color: "from-primary-glow to-accent",
        description: "Lutte moderne et soumissions",
      },
      {
        discipline: "Kickboxing Adultes",
        image: jjbAdulteReal, // Placeholder jusqu'à ce qu'on récupère l'image
        icon: <Zap className="w-6 h-6" />,
        color: "from-accent to-primary-glow",
        description: "Boxe pieds-poings et cardio",
      },
    ],
    ados: [
      {
        discipline: "MMA Ados",
        image: mmaAdoReal,
        icon: <Trophy className="w-6 h-6" />,
        color: "from-primary to-primary-glow",
        description: "MMA adapté aux adolescents",
      },
      {
        discipline: "JJB Ados",
        image: jjbAdulteReal, // Placeholder
        icon: <Target className="w-6 h-6" />,
        color: "from-accent to-primary",
        description: "Jiu-Jitsu Brésilien pour ados",
      },
      {
        discipline: "Grappling Ados",
        image: jjbAdulteReal, // Placeholder
        icon: <Users className="w-6 h-6" />,
        color: "from-primary-glow to-accent",
        description: "Grappling adapté aux ados",
      },
      {
        discipline: "Kickboxing Ados",
        image: jjbAdulteReal, // Placeholder
        icon: <Zap className="w-6 h-6" />,
        color: "from-accent to-primary-glow",
        description: "Kickboxing pour adolescents",
      },
    ],
    enfants: [
      {
        discipline: "JJB Enfants",
        subtitle: "(Le Revest-les-Eaux)",
        image: jjbAdulteReal, // Placeholder
        icon: <Target className="w-6 h-6" />,
        color: "from-accent to-primary",
        description: "JJB adapté aux 6-12 ans",
      },
    ],
  };

  const categories = [
    { id: "adultes", label: "Adultes", icon: <Users className="w-4 h-4" /> },
    { id: "ados", label: "Adolescents", icon: <Target className="w-4 h-4" /> },
    { id: "enfants", label: "Enfants", icon: <Calendar className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Planning - Apex Martial Gym Toulon | Horaires Cours Arts Martiaux</title>
      <meta
        name="description"
        content="Consultez les horaires des cours de MMA, JJB, Grappling et Kickboxing à Apex Martial Gym Toulon. Planning adultes, ados et enfants."
      />

      <div className="min-h-screen bg-background pt-20">
        {/* Header Section */}
        <section className="py-16 bg-gradient-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-20" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Calendar className="w-12 h-12 text-accent mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Planning des <span className="text-gradient">Cours</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                Découvrez nos créneaux d'entraînement pour tous les âges et tous les niveaux
              </p>
            </div>
          </div>
        </section>

        {/* Category Selection */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "hero" : "outline"}
                  size="lg"
                  onClick={() => setActiveCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  {category.icon}
                  {category.label}
                </Button>
              ))}
            </div>

            {/* Planning Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {plannings[activeCategory as keyof typeof plannings].map((planning, index) => (
                <Card 
                  key={planning.discipline}
                  className="group overflow-hidden bg-card border-border/50 hover:border-primary/50 transition-all duration-500 animate-fade-in hover:shadow-intense cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => {
                    setSelectedImage(planning.image);
                    setSelectedTitle(planning.discipline + (planning.subtitle ? ` ${planning.subtitle}` : ''));
                  }}
                >
                  <CardContent className="p-0">
                    {/* Planning Image */}
                    <div className="relative overflow-hidden h-80">
                      <img
                        src={planning.image}
                        alt={`Planning ${planning.discipline}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      
                      {/* View Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                          <Eye className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Floating Discipline Badge */}
                      <div className="absolute top-6 left-6">
                        <Badge className={`bg-gradient-to-r ${planning.color} text-white border-0 px-4 py-2 text-sm font-semibold shadow-lg`}>
                          <span className="flex items-center gap-2">
                            {planning.icon}
                            {planning.discipline}
                          </span>
                        </Badge>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-bold mb-2 text-white">
                          {planning.discipline}
                          {planning.subtitle && (
                            <span className="block text-sm text-gray-300 font-normal">
                              {planning.subtitle}
                            </span>
                          )}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">
                          {planning.description}
                        </p>
                        <div className="flex items-center gap-2 text-accent">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            Cliquez pour voir les horaires complets
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Section */}
                    <div className="p-6 bg-gradient-to-br from-card to-muted/30">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button 
                          variant="hero" 
                          size="sm" 
                          className="flex-1 group"
                        >
                          <span className="flex items-center justify-center">
                            Réserver un Essai
                            <Clock className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                          </span>
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-accent/30 text-accent hover:bg-accent/10"
                        >
                          Plus d'infos
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-gradient-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-20" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Informations <span className="text-gradient">Pratiques</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                    <Clock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Ponctualité</h3>
                      <p className="text-gray-300 text-sm">
                        Arrivez 10 minutes avant le début du cours pour vous échauffer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                    <Users className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Tous Niveaux</h3>
                      <p className="text-gray-300 text-sm">
                        Débutants à experts, chaque pratiquant trouve sa place
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                    <Target className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Cours Spécialisés</h3>
                      <p className="text-gray-300 text-sm">
                        JJB enfants disponible au Revest-les-Eaux
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Équipement <span className="text-gradient">Requis</span>
                </h2>
                <div className="space-y-4">
                  <div className="p-5 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                    <h3 className="font-semibold text-accent mb-3 flex items-center gap-2">
                      <Trophy className="w-5 h-5" />
                      MMA / Grappling
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Short de sport, rashguard, protège-dents, coquille
                    </p>
                  </div>
                  <div className="p-5 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                    <h3 className="font-semibold text-accent mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      JJB
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Kimono (Gi) pour les cours Gi, rashguard pour No-Gi
                    </p>
                  </div>
                  <div className="p-5 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                    <h3 className="font-semibold text-accent mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Kick Boxing
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Gants de boxe, protège-tibias, short de sport
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Des questions sur nos <span className="text-gradient">horaires</span> ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Notre équipe est là pour vous accompagner dans le choix de vos créneaux d'entraînement
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl">
                  Réserver un Essai Gratuit
                </Button>
                <Button variant="outline" size="xl" className="border-accent text-accent hover:bg-accent/10">
                  Nous Contacter
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Planning Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 bg-black/95 border-none">
            <DialogTitle className="sr-only">{selectedTitle}</DialogTitle>
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white border-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-5 h-5" />
              </Button>
              
              {/* Image */}
              {selectedImage && (
                <div className="w-full h-full flex items-center justify-center p-4">
                  <img
                    src={selectedImage}
                    alt={selectedTitle}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  />
                </div>
              )}
              
              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-xl font-bold text-white bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                  {selectedTitle}
                </h3>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Planning;