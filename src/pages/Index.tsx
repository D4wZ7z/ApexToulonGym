import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Trophy, Clock } from "lucide-react";
import heroImage from "@/assets/hero-apex.jpg";
import mmaImage from "@/assets/disciplines/mma-discipline.jpg";
import jjbImage from "@/assets/disciplines/jjb-discipline.jpg";
import grapplingImage from "@/assets/disciplines/grappling-discipline.jpg";

const Index = () => {
  const disciplines = [
    {
      name: "MMA",
      description: "Mixed Martial Arts - L'art du combat complet",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-primary to-primary-glow",
      image: mmaImage,
    },
    {
      name: "JJB",
      description: "Jiu-Jitsu Brésilien - Maîtrise du combat au sol",
      icon: <Target className="w-8 h-8" />,
      color: "from-accent to-primary",
      image: jjbImage,
    },
    {
      name: "Grappling",
      description: "Lutte moderne - Force et technique",
      icon: <Users className="w-8 h-8" />,
      color: "from-primary-glow to-accent",
      image: grapplingImage,
    },
    {
      name: "Kickboxing",
      description: "Sports de combat pieds-poings - Cardio et technique",
      icon: <Clock className="w-8 h-8" />,
      color: "from-accent to-primary-glow",
      image: grapplingImage, // Placeholder until we get the kickboxing image
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-glow" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-white">APEX</span>
              <br />
              <span className="text-gradient">MARTIAL GYM</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Devenez la meilleure version de vous-même dans notre club d'arts martiaux à Toulon
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
              <Button 
                variant="hero" 
                size="xl" 
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Réserver un Essai Gratuit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="xl" 
                className="border-white/30 text-white hover:bg-white/10"
              >
                Découvrir nos Disciplines
              </Button>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 hidden lg:flex space-x-12 animate-float">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">10+</div>
              <div className="text-sm text-gray-300">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">200+</div>
              <div className="text-sm text-gray-300">Membres actifs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">4</div>
              <div className="text-sm text-gray-300">Disciplines</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-gradient">Disciplines</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez nos programmes d'entraînement adaptés à tous les niveaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {disciplines.map((discipline, index) => (
              <div
                key={discipline.name}
                className={`group relative overflow-hidden rounded-xl shadow-card hover:shadow-intense transition-all duration-500 transform hover:-translate-y-2 animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={discipline.image}
                    alt={discipline.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-300" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${discipline.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[320px]">
                  <div>
                    <div className="text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      {discipline.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {discipline.name}
                    </h3>
                    
                    <p className="text-white/90 text-sm leading-relaxed">
                      {discipline.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <Button 
                      variant="ghost_accent" 
                      size="sm" 
                      className="text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
                      asChild
                    >
                      <Link to="/planning">
                        Voir Planning
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Prêt à commencer votre <span className="text-gradient">transformation</span> ?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Rejoignez Apex Martial Gym et découvrez votre potentiel dans un environnement 
              professionnel et motivant au cœur de Toulon.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
              >
                <span className="flex items-center">
                  Réserver mon Essai Gratuit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="xl" 
                asChild
                className="border-accent text-accent hover:bg-accent/10"
              >
                <Link to="/contact">Nous Contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
