import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, FileText, Calculator, Users, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: "Ejendomshandel",
      description: "Komplet tinglysning ved køb og salg af fast ejendom",
      price: "Fra 2.500 kr.",
      popular: true,
      features: ["Skødeoprettelse", "Tinglysning", "Juridisk rådgivning"]
    },
    {
      icon: FileText,
      title: "Pantebrev",
      description: "Oprettelse og tinglysning af pantebrev i fast ejendom",
      price: "Fra 1.800 kr.",
      popular: false,
      features: ["Pantebrevoprettelse", "Tinglysning", "Prioritetsberegning"]
    },
    {
      icon: Calculator,
      title: "Servitutter",
      description: "Etablering af servitutter og andre byrder på ejendomme",
      price: "Fra 2.200 kr.",
      popular: false,
      features: ["Servitutoprettelse", "Tinglysning", "Juridisk gennemgang"]
    },
    {
      icon: Users,
      title: "Ejerforhold",
      description: "Ændring af ejerforhold og sameje af fast ejendom",
      price: "Fra 1.500 kr.",
      popular: false,
      features: ["Ejerændring", "Tinglysning", "Dokumentation"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Vores Tjenester
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vi tilbyder professionelle tinglysningsydelser til private og erhverv
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className={`p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${service.popular ? 'ring-2 ring-blue-500 bg-blue-50/50' : 'bg-white'}`}>
                {service.popular && (
                  <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">
                    Mest populær
                  </Badge>
                )}
                <IconComponent className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Vælg tjeneste <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;