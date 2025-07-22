import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Process from './Process';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default AppLayout;