import Header from '../../components/layout/Header';
import Hero from '../../components/sections/Hero';
import Problem from '../../components/sections/Problem';
import Preuve from '../../components/sections/Preuve';
import Demo from '../../components/sections/demo';
import UseCases from '../../components/sections/casdusage';
import Features from '../../components/sections/fonctionnalites';
import Differentiation from '../../components/sections/differenciation';
import Ecosystem from '../../components/sections/ecosysteme';
import Testimonials from '../../components/sections/temoingages';
import FAQ from '../../components/sections/faq';
import FinalCTA from '../../components/sections/cta';
import Footer from '../../components/layout/Footer';
import ChatBot from '../../components/sections/chatbot';

const Accueil = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Preuve />
        <Features />
        <Differentiation />
        <Ecosystem />
        <UseCases />
        <Demo />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
        <ChatBot />
      </main>
    </div>
  );
};

export default Accueil;
