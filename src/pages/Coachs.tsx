import { useState } from "react";

const Coachs = () => {
  const [hoveredCoach, setHoveredCoach] = useState<string | null>(null);

  const coaches = [
    {
      id: "mma",
      name: "Coach MMA",
      discipline: "Mixed Martial Arts",
      image: "https://apexmartialgym.onrender.com/image-apex2/coach-mma.jpg",
      description: "Expert en MMA avec plus de 10 ans d'expérience en compétition et enseignement.",
      specialties: ["Striking", "Grappling", "Combat au sol", "Préparation mentale"],
    },
    {
      id: "jjb",
      name: "DORIAN GEORGEN",
      discipline: "Jiu-Jitsu Brésilien",
      image: "https://apexmartialgym.onrender.com/image-apex2/grappling-jjb/2COACH-JJB.jpg",
      description: "  Pratiquant de Jiu Jitsu Brésilien et Grappling depuis 15 ans et professeur depuis 6 ans, il enseigne le JJB avec passion et pédagogie. Compétiteur actif sur le circuit national et international, il saura vous donnez goût à la compétition.  Champion de France & en équipe de France Newaza 2022. ",
      specialties: ["Garde", "Passages de garde", "Soumissions", "Self-défense"],
    },
    {
      id: "grappling",
      name: "Amir",
      discipline: "Grappling",
      image: "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/483768572_656509273404099_4631233119260318699_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4CW1aorfE2wQ7kNvwEWCNju&_nc_oc=AdltpDkDmm0yIvLkf7uH-aF60J7ABo2JN7JqPQd7zygqImRf2iVI-Gg9DYoHeLqeQPE&_nc_zt=23&_nc_ht=scontent-cdg4-2.xx&_nc_gid=C8yeHw4Puj984tyaTRRJqA&oh=00_AfXOaO3Lfn7zOfuyFnbC81ia1vLmRPoYI5t4FzWyVJFyyg&oe=68AD6FA6",
      description: "Coach de grappling ados, compte à son actif plus de 80 combats et de nombreuses médailles remportées lors d'Open prestigieux. Combattant expérimenté et passionné, il transmet son savoir avec dévouement.",
      specialties: ["Takedowns", "Wrestling", "No-Gi", "Positions dominantes"],
    },
    {
      id: "kickboxing",
      name: "Samuel Anastase",
      discipline: "Kick Boxing",
      image: "https://www.apexmartialgym.fr/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-09-a-13.05.42_5ab06d29.jpg",
      description: "Samuel Anastase combattant professionnel au palmarès impressionnant 21 victoires (dont 9 par KO) pour seulement 4 défaites, Samuel est aussi un entraîneur passionné de Kick-Boxing, K-1 et Muay Thaï depuis de nombreuses années.Formé dans les plus grandes écoles du monde, il met son expertise et son expérience au service de tous : débutants motivés comme compétiteurs confirmés.Il a foulé le ring des plus prestigieuses organisations internationales, telles que TK2, Rajadamnern Series, Kick Night ou encore La Nuit des Champions.Avec lui, chaque séance est une occasion de progresser, de repousser vos limites et d’atteindre vos objectifs… tout en vivant l’intensité et l’adrénaline du haut niveau.",
      specialties: ["Techniques de frappe", "Jeu de jambes", "Cardio", "Préparation physique"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark pt-24">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nos <span className="text-gradient">Coachs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une équipe de professionnels passionnés, prêts à vous accompagner dans votre progression
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Coaches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {coaches.map((coach, index) => (
            <div
              key={coach.id}
              className={`group relative overflow-hidden rounded-xl shadow-card hover:shadow-intense transition-all duration-500 transform hover:-translate-y-2 animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCoach(coach.id)}
              onMouseLeave={() => setHoveredCoach(null)}
            >
              {/* Background Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {coach.name}
                    </h3>
                    <p className="text-accent font-semibold mb-3 text-lg">
                      {coach.discipline}
                    </p>
                    
                    {/* Description - appears on hover */}
                    <div className={`transition-all duration-500 ${
                      hoveredCoach === coach.id 
                        ? "opacity-100 transform translate-y-0" 
                        : "opacity-0 transform translate-y-4"
                    }`}>
                      <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                        {coach.description}
                      </p>
                      
                      {/* Specialties */}
                      <div className="flex flex-wrap gap-2">
                        {coach.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 border-2 transition-all duration-300 ${
                  hoveredCoach === coach.id
                    ? "border-accent shadow-glow"
                    : "border-transparent"
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Envie de vous entraîner avec nos coachs ?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-lg shadow-intense hover:shadow-glow hover:scale-105 transition-all duration-300">
              Réserver un Cours d'Essai
            </button>
            <button className="px-8 py-4 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300">
              Voir les Horaires
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coachs;