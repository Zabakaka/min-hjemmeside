import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Maria Hansen",
      role: "Ejendomsmægler",
      content: "TinglysningPro har gjort vores arbejde så meget nemmere. Hurtig service og professionel håndtering.",
      rating: 5,
      avatar: "MH"
    },
    {
      name: "Lars Nielsen",
      role: "Privatkunde",
      content: "Fantastisk service! Hele processen var smidig og jeg blev holdt opdateret hele vejen.",
      rating: 5,
      avatar: "LN"
    },
    {
      name: "Anna Sørensen",
      role: "Advokat",
      content: "Pålidelig partner med høj faglig standard. Kan varmt anbefales til alle typer tinglysning.",
      rating: 5,
      avatar: "AS"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hvad Siger Vores Kunder
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Over 1000+ tilfredse kunder har valgt vores tjenester
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;