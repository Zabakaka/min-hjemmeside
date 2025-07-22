import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="px-6 py-4 bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">TinglysningPro</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Tjenester</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Priser</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Om os</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Kontakt</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">Log ind</Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Moderne <span className="text-blue-600">Tinglysning</span><br />
              Gjort Enkelt
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Få professionel hjælp til tinglysning af ejendomme med vores moderne platform. 
              Hurtig, sikker og pålidelig service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                Kom i gang <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Se priser
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border-0 bg-white/60 backdrop-blur-sm">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Hurtig Behandling</h3>
              <p className="text-gray-600">Få behandlet din sag på rekordtid med vores effektive processer</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border-0 bg-white/60 backdrop-blur-sm">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">100% Sikkerhed</h3>
              <p className="text-gray-600">Alle dokumenter behandles med højeste sikkerhedsstandarder</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border-0 bg-white/60 backdrop-blur-sm">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Ekspert Support</h3>
              <p className="text-gray-600">Få hjælp fra vores erfarne jurister og rådgivere</p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;