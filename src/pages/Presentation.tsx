import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Presentation = () => {
  return (
    <div className="min-h-screen bg-gradient-dark pt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Présentation</span> du Club
            </h1>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Content Sections */}
          <div className="grid gap-12 md:gap-16">
            {/* Notre Ambiance */}
            <section className="animate-slide-up">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 shadow-card border border-border/20">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
                  REJOIGNEZ-NOUS ! 
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                 Votre centre d’entrainement de combat sur Toulon vous accueille du Lundi au Samedi toute l’année pour vous faire progresser dans la discipline de votre choix. Entraînez vous avec des professeurs diplômés et expérimentés afin de progresser en toute sécurité. Entre MMA, Boxe Anglaise, Grappling, Jiu Jitsu Brésilien & Préparation Physique petits et grands apprennent dans le respect et la bienveillance.
                </p>
              </div>
            </section>

            {/* Nos Valeurs */}
            <section className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 shadow-card border border-border/20">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
                  Nos Valeurs
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Respect</h3>
                        <p className="text-muted-foreground">
                          Respect de soi, des autres et des disciplines enseignées
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Progression</h3>
                        <p className="text-muted-foreground">
                          Accompagnement personnalisé pour chaque niveau
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Excellence</h3>
                        <p className="text-muted-foreground">
                          Formation de qualité avec des coachs expérimentés
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Communauté</h3>
                        <p className="text-muted-foreground">
                          Un esprit d'équipe et d'entraide permanent
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Notre Histoire */}
            <section className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 shadow-card border border-border/20">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
                  Notre Histoire
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Implanté au cœur de Toulon, Apex Martial Gym est né de la passion de pratiquants expérimentés 
                  désireux de partager leur expertise dans les disciplines de combat. Depuis notre création, 
                  nous nous sommes imposés comme une référence dans l'enseignement du MMA, du JJB, du Grappling 
                  et du Kickboxing.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Notre club forme des athlètes de tous horizons, des enfants aux adultes, dans un cadre 
                  sécurisé et professionnel. Nous sommes fiers d'accompagner chacun dans sa progression, 
                  que l'objectif soit la remise en forme, la compétition ou simplement le plaisir de 
                  pratiquer.
                </p>
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Prêt à rejoindre l'aventure ?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Réserver un Essai</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/planning">Voir le Planning</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;