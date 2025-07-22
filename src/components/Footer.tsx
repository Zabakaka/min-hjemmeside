import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">TinglysningPro</span>
            </div>
            <p className="text-gray-400 mb-6">
              Din pålidelige partner for professionel tinglysning af fast ejendom.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                LinkedIn
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                Facebook
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tjenester</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Ejendomshandel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pantebrev</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Servitutter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ejerforhold</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Virksomhed</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Om os</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vores team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privatlivspolitik</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>+45 70 20 30 40</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>kontakt@tinglysningpro.dk</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span>København, Danmark</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 TinglysningPro. Alle rettigheder forbeholdes.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Handelsbetingelser</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookiepolitik</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;