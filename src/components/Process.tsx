import React from 'react';
import { Card } from '@/components/ui/card';
import { Upload, FileCheck, CreditCard, CheckCircle } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Dokumenter",
      description: "Upload dine dokumenter sikkert gennem vores platform",
      step: "01"
    },
    {
      icon: FileCheck,
      title: "Juridisk Gennemgang",
      description: "Vores jurister gennemgår og forbereder alle dokumenter",
      step: "02"
    },
    {
      icon: CreditCard,
      title: "Betaling & Godkendelse",
      description: "Betal sikkert og godkend den endelige tinglysning",
      step: "03"
    },
    {
      icon: CheckCircle,
      title: "Tinglysning Gennemført",
      description: "Modtag bekræftelse og alle relevante dokumenter",
      step: "04"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sådan Fungerer Det
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            En simpel og sikker proces der gør tinglysning nemt for dig
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-300 transform translate-x-4 -translate-y-1/2 z-0"></div>
                )}
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 relative z-10 bg-white">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-green-800 font-medium">Gennemsnitlig behandlingstid: 2-3 arbejdsdage</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;