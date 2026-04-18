import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const Contact = () => {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
            <Header />
            <main className="pt-32 pb-24 lg:pt-48 relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] -z-10" />
                
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Info Section */}
                        <div className="space-y-12 animate-slide-up">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">{t('contact_support_247')}</span>
                                </div>
                                <h1 className="text-5xl lg:text-7xl font-black text-heading dark:text-white leading-[1.1]">
                                    {t('contact_title_part1')} <br />
                                    <span className="text-primary italic">{t('contact_title_part2')}</span>
                                </h1>
                                <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-lg leading-relaxed">
                                    {t('contact_subtitle')}
                                </p>
                            </div>

                            <div className="space-y-8">
                                {[
                                    { icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, title: t("contact_info_hq"), detail: t("contact_info_hq_detail"), color: "text-primary" },
                                    { icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" /></svg>, title: t("contact_info_email"), detail: "contact@risemanager.com", color: "text-primary" },
                                    { icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>, title: t("contact_info_whatsapp"), detail: "0665584456", color: "text-emerald-500" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 group">
                                        <div className={`w-16 h-16 rounded-[24px] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center ${item.color} shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{item.title}</div>
                                            <div className="text-lg font-bold text-heading dark:text-white group-hover:text-primary transition-colors">{item.detail}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="animate-slide-up [animation-delay:0.2s]">
                            <div className="bg-white dark:bg-slate-900 p-8 lg:p-12 rounded-[48px] border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none">
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-4">{t('contact_form_name')}</label>
                                            <input type="text" placeholder={t('contact_form_name_placeholder')} className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold dark:text-white" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-4">{t('contact_form_email')}</label>
                                            <input type="email" placeholder={t('contact_form_email_placeholder')} className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold dark:text-white" />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-4">{t('contact_form_subject')}</label>
                                        <input type="text" placeholder={t('contact_form_subject_placeholder')} className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold dark:text-white"/>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-4">{t('contact_form_message')}</label>
                                        <textarea rows={4} placeholder={t('contact_form_message_placeholder')} className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold dark:text-white resize-none" />
                                    </div>

                                    <button className="w-full py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                        {t('contact_form_send')}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
