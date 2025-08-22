import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Star, Zap, Shield, Users } from "lucide-react";

const tarifs = {
  adulte: [
    {
      discipline: "MMA",
      price: 720,
      priceMonth: 60,
      icon: <Zap className="h-6 w-6" />,
      popular: true,
      features: [
        "Entraînement complet MMA",
        "Sparring et technique",
        "Accès cage professionnelle",
        "Coaching personnalisé",
        "Préparation physique incluse"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      discipline: "JJB",
      price: 480,
      priceMonth: 40,
      icon: <Shield className="h-6 w-6" />,
      features: [
        "Jiu-Jitsu Brésilien",
        "Technique et sparring",
        "Gi et No-Gi",
        "Préparation compétition",
        "Cours tous niveaux"
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      discipline: "Grappling",
      price: 480,
      priceMonth: 40,
      icon: <Users className="h-6 w-6" />,
      features: [
        "Lutte au sol",
        "Techniques de soumission",
        "No-Gi uniquement",
        "Sparring intensif",
        "Préparation physique"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      discipline: "Kick Boxing",
      price: 420,
      priceMonth: 35,
      icon: <Star className="h-6 w-6" />,
      features: [
        "Kickboxing & K1",
        "Technique de frappe",
        "Sacs et pattes d'ours",
        "Préparation physique",
        "Sparring contrôlé"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ],
  ado: [
    {
      discipline: "MMA Ado",
      price: 540,
      priceMonth: 45,
      icon: <Zap className="h-6 w-6" />,
      popular: true,
      features: [
        "MMA adapté aux ados",
        "Technique et discipline",
        "Encadrement renforcé",
        "Développement confiance",
        "Valeurs du sport"
      ],
      color: "from-red-400 to-orange-400"
    },
    {
      discipline: "JJB Ado",
      price: 380,
      priceMonth: 32,
      icon: <Shield className="h-6 w-6" />,
      features: [
        "Jiu-Jitsu pour ados",
        "Apprentissage progressif",
        "Respect et discipline",
        "Technique adaptée",
        "Compétition jeunes"
      ],
      color: "from-blue-400 to-purple-400"
    },
    {
      discipline: "Grappling Ado",
      price: 380,
      priceMonth: 32,
      icon: <Users className="h-6 w-6" />,
      features: [
        "Grappling jeunes",
        "Technique de base",
        "Approche ludique",
        "Développement moteur",
        "Esprit d'équipe"
      ],
      color: "from-green-400 to-teal-400"
    },
    {
      discipline: "Kick Boxing Ado",
      price: 380,
      priceMonth: 32,
      icon: <Star className="h-6 w-6" />,
      features: [
        "Kickboxing jeunes",
        "Technique et cardio",
        "Discipline et respect",
        "Confiance en soi",
        "Préparation physique"
      ],
      color: "from-purple-400 to-pink-400"
    }
  ]
};

const Tarifs = () => {
  const [activeTab, setActiveTab] = useState("adulte");

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Tarifs - Apex Martial Gym Toulon | Prix Cours Arts Martiaux</title>
      <meta
        name="description"
        content="Découvrez nos tarifs compétitifs pour les cours de MMA, JJB, Grappling et Kickboxing à Toulon. Formules adultes et ados disponibles."
      />

      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Tarifs
              <span className="block text-2xl md:text-3xl text-accent font-normal mt-2">
                Choisissez votre discipline
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Des tarifs compétitifs pour un entraînement de qualité professionnelle
            </p>
          </div>
        </section>

        {/* Tarifs Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
                <TabsTrigger value="adulte" className="text-lg font-semibold">
                  Adultes
                </TabsTrigger>
                <TabsTrigger value="ado" className="text-lg font-semibold">
                  Ados
                </TabsTrigger>
              </TabsList>

              <TabsContent value="adulte" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {tarifs.adulte.map((tarif, index) => (
                    <Card
                      key={tarif.discipline}
                      className={`relative overflow-hidden border-2 transform transition-all duration-300 hover:scale-105 hover:shadow-glow animate-scale-in ${
                        tarif.popular ? "border-accent" : "border-border"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tarif.popular && (
                        <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                          Populaire
                        </Badge>
                      )}
                      
                      <CardHeader className="text-center pb-4">
                        <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${tarif.color} flex items-center justify-center text-white mb-4`}>
                          {tarif.icon}
                        </div>
                        <CardTitle className="text-2xl font-bold text-foreground">
                          {tarif.discipline}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          Entraînement professionnel
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-foreground mb-2">
                            {tarif.price}€
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {tarif.priceMonth}€/mois - Année complète
                          </div>
                        </div>

                        <ul className="space-y-3">
                          {tarif.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-3">
                              <Check className="h-4 w-4 text-accent flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Button 
                          variant={tarif.popular ? "hero" : "outline"} 
                          className="w-full"
                          size="lg"
                        >
                          Choisir cette formule
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ado" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {tarifs.ado.map((tarif, index) => (
                    <Card
                      key={tarif.discipline}
                      className={`relative overflow-hidden border-2 transform transition-all duration-300 hover:scale-105 hover:shadow-glow animate-scale-in ${
                        tarif.popular ? "border-accent" : "border-border"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tarif.popular && (
                        <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                          Populaire
                        </Badge>
                      )}
                      
                      <CardHeader className="text-center pb-4">
                        <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${tarif.color} flex items-center justify-center text-white mb-4`}>
                          {tarif.icon}
                        </div>
                        <CardTitle className="text-2xl font-bold text-foreground">
                          {tarif.discipline}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          Adapté aux adolescents
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-foreground mb-2">
                            {tarif.price}€
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {tarif.priceMonth}€/mois - Année complète
                          </div>
                        </div>

                        <ul className="space-y-3">
                          {tarif.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-3">
                              <Check className="h-4 w-4 text-accent flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Button 
                          variant={tarif.popular ? "hero" : "outline"} 
                          className="w-full"
                          size="lg"
                        >
                          Choisir cette formule
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Informations pratiques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-accent">Inscription</h3>
                <p className="text-muted-foreground">
                  Frais d'inscription : 30€
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-accent">Paiement</h3>
                <p className="text-muted-foreground">
                  Mensuel ou annuel
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-accent">Essai</h3>
                <p className="text-muted-foreground">
                  Premier cours gratuit
                </p>
              </div>
            </div>
            <Button variant="hero" size="xl" className="animate-pulse-glow">
              Réserver un essai gratuit
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Tarifs;