import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Pricing from '../../components/sections/pricing';
import Preuve from '../../components/sections/Preuve';
import FinalCTA from '../../components/sections/cta';

const Tarifs = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
            <Header />
            <main className="pt-20">
                <Pricing />
                <Preuve />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
};

export default Tarifs;
