import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import FAQ from '../../components/sections/faq';
import FinalCTA from '../../components/sections/cta';

const FAQPage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
            <Header />
            <main className="pt-20">
                <FAQ />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
};

export default FAQPage;
