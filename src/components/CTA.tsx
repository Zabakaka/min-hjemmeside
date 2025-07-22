import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Klar til at Komme i Gang?
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Få professionel hjælp til din tinglysning i dag. Kontakt os for en uforpligtende samtale.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Phone className="h-12 w-12 mx-auto mb-4 text-blue-200" />
            <h3 className="text-xl font-semibold mb-2">Ring til os</h3>
            <p className="text-blue-100 mb-4">Få svar på dine spørgsmål med det samme</p>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              +45 70 20 30 40
            </Button>
          </Card>
          
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Mail className="h-12 w-12 mx-auto mb-4 text-blue-200" />
            <h3 className="text-xl font-semibold mb-2">Send en mail</h3>
            <p className="text-blue-100 mb-4">Vi svarer inden for 24 timer</p>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              kontakt@tinglysningpro.dk
            </Button>
          </Card>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
            Start din sag nu <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
            Book gratis konsultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;