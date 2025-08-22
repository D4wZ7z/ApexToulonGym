import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Instagram, 
  Facebook,
  MessageCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      content: "125 Rue Félix Mayol",
      subtitle: "83200 Toulon",
      color: "from-primary to-primary-glow"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      content: "06 XX XX XX XX",
      subtitle: "Lundi - Samedi",
      color: "from-accent to-primary"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "contact@apexmartialgym.fr",
      subtitle: "Réponse sous 24h",
      color: "from-primary-glow to-accent"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horaires d'ouverture",
      content: "Lun - Ven: 17h - 22h",
      subtitle: "Sam: 10h - 17h",
      color: "from-accent to-primary-glow"
    }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://instagram.com/apexmartialgym",
      color: "from-pink-500 to-purple-500"
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      url: "https://facebook.com/apexmartialgym",
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Contact - Apex Martial Gym Toulon | Nous Contacter</title>
      <meta
        name="description"
        content="Contactez Apex Martial Gym Toulon. Adresse, téléphone, horaires et formulaire de contact. 125 Rue Félix Mayol, 83200 Toulon."
      />

      <div className="min-h-screen bg-background pt-20">
        {/* Header Section */}
        <section className="py-16 bg-gradient-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-20" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <MessageCircle className="w-12 h-12 text-accent mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Nous <span className="text-gradient">Contacter</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                Une question ? Envie de nous rencontrer ? N'hésitez pas à nous contacter !
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-background border-b border-border/50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="group overflow-hidden bg-card border-border/50 hover:border-primary/50 transition-all duration-500 animate-fade-in hover:shadow-intense"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${info.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white">
                        {info.icon}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-foreground font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {info.subtitle}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Contact Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Envoyez-nous un <span className="text-gradient">Message</span>
                  </h2>
                  <p className="text-muted-foreground">
                    Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
                  </p>
                </div>

                <Card className="border-border/50">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-foreground">
                            Nom complet *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Votre nom"
                            required
                            className="border-border/50 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-foreground">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="votre@email.com"
                            required
                            className="border-border/50 focus:border-primary"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-foreground">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Votre message..."
                          required
                          rows={6}
                          className="border-border/50 focus:border-primary resize-none"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        variant="hero" 
                        size="lg" 
                        className="w-full group"
                        disabled={isSubmitting}
                      >
                        <span className="flex items-center justify-center">
                          {isSubmitting ? "Envoi en cours..." : "Envoyer le Message"}
                          {!isSubmitting && <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                        </span>
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Suivez-nous sur les <span className="text-gradient">Réseaux</span>
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${social.color} hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl`}>
                          <span className="text-white">
                            {social.icon}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Notre <span className="text-gradient">Localisation</span>
                  </h2>
                  <p className="text-muted-foreground">
                    Venez nous rendre visite dans notre club au cœur de Toulon.
                  </p>
                </div>

                <Card className="border-border/50 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative w-full h-96">
                      <iframe
                        src="https://maps.google.com/maps?q=125%20Rue%20Félix%20Mayol%2C%2083200%20Toulon&t=m&z=17&output=embed&iwloc=near"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localisation Apex Martial Gym Toulon"
                        className="rounded-lg"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Location Details */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-accent" />
                      Adresse Complète
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-semibold text-foreground">Apex Martial Gym</p>
                      <p className="text-muted-foreground">125 Rue Félix Mayol</p>
                      <p className="text-muted-foreground">83200 Toulon</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-accent border-accent/30">
                        <MapPin className="w-3 h-3 mr-1" />
                        Centre-ville Toulon
                      </Badge>
                      <Badge variant="outline" className="text-accent border-accent/30">
                        <Clock className="w-3 h-3 mr-1" />
                        Proche transports
                      </Badge>
                    </div>

                    <div className="pt-4 border-t border-border/50">
                      <p className="text-sm text-muted-foreground">
                        Facilement accessible en transport en commun ou en voiture. 
                        Parking disponible à proximité.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-30" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Prêt à commencer votre <span className="text-gradient">aventure</span> ?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Rejoignez-nous dès aujourd'hui et découvrez votre potentiel dans les arts martiaux
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl">
                  Réserver un Essai Gratuit
                </Button>
                <Button variant="outline" size="xl" className="border-accent text-accent hover:bg-accent/10">
                  Voir les Tarifs
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;