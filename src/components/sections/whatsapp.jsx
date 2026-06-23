import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const WhatsAppAI = () => {
    const { t } = useTranslation();
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userMsg = { role: 'user', content: inputValue.trim() };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": window.location.origin,
                    "X-Title": "RiseManager Marketing"
                },
                body: JSON.stringify({
                    "model": "openai/gpt-4o-mini",
                    "messages": [
                        {
                            "role": "system",
                            "content": "Tu es l'IA Assistante de RiseManager sur WhatsApp. Ton but est de gérer les commandes des clients de manière professionnelle et efficace. \n\nDirectives :\n1. Si le client veut commander, confirme que le produit est disponible.\n2. Demande poliment son Nom complet et son Adresse de livraison.\n3. Sois concis et utilise un ton amical (style WhatsApp).\n4. Une fois les infos reçues, confirme la commande et dis qu'un agent humain l'appellera bientôt. Sois très bref."
                        },
                        ...messages,
                        userMsg
                    ]
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error("OpenRouter Error Response:", errorText);
                throw new Error("Response not OK");
            }

            const data = await response.json();
            const aiContent = data.choices[0].message.content;
            setMessages(prev => [...prev, { role: 'assistant', content: aiContent }]);
        } catch (error) {
            console.error("Chat Error Detail:", error);
            setMessages(prev => [...prev, { role: 'assistant', content: "Désolé, j'ai une petite perturbation technique. Vérifiez votre connexion ou la configuration de la clé API." }]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') document.documentElement.classList.add('dark');
    }, []);

    return (
        <section className="py-24 lg:py-40 bg-white dark:bg-slate-950 overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 dark:bg-blue-400/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* 1. Visual Side: The Dynamic Chat */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">
                        {/* Live Interaction Badge */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 z-30 flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2 rounded-full shadow-xl border border-slate-50 dark:border-slate-800 animate-bounce-subtle">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-black text-heading dark:text-white uppercase tracking-widest">Chat Interactif Live</span>
                        </div>

                        <div className="absolute -top-6 -left-6 z-20 w-16 h-16 bg-[#25D366] rounded-2xl shadow-2xl shadow-emerald-200/50 flex items-center justify-center animate-bounce-subtle">
                            <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </div>

                        <div className="bg-white dark:bg-slate-900 rounded-[40px] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden relative group">
                            {/* Chat Header */}
                            <div className="bg-slate-950 p-4 sm:p-6 flex items-center justify-between">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 dark:bg-white/5 rounded-full flex items-center justify-center backdrop-blur-md relative">
                                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse absolute bottom-0.5 right-0.5 border-2 border-slate-950" />
                                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-sm sm:text-base">AI Assistant Rise</div>
                                        <div className="text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-widest">{isLoading ? 'En train d\'écrire...' : 'En ligne'}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Chat Content */}
                            <div 
                                className="bg-[#f0f2f5] dark:bg-slate-800 p-5 sm:p-8 space-y-4 h-[450px] overflow-y-auto relative custom-scrollbar scroll-smooth"
                                ref={scrollRef}
                            >
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }} />

                                {messages.map((msg, i) => (
                                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}>
                                        <div className={`${msg.role === 'user' ? 'bg-[#dcf8c6] dark:bg-emerald-900/40 rounded-tr-none border border-emerald-100 dark:border-emerald-800 shadow-sm' : 'bg-white dark:bg-slate-700 rounded-tl-none border border-slate-100 dark:border-slate-600 shadow-sm'} p-3 sm:p-4 rounded-2xl max-w-[85%] relative z-10`}>
                                            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                                            <span className={`text-[9px] ${msg.role === 'user' ? 'text-emerald-600/60 dark:text-emerald-400/60' : 'text-slate-400 dark:text-slate-500'} mt-1 block text-right font-bold uppercase tracking-tight`}>
                                                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                    </div>
                                ))}

                                {isLoading && (
                                    <div className="flex justify-start animate-pulse">
                                        <div className="bg-white dark:bg-slate-700 p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                                            <div className="w-1.5 h-1.5 bg-slate-200 dark:bg-slate-600 rounded-full animate-bounce" />
                                            <div className="w-1.5 h-1.5 bg-slate-200 dark:bg-slate-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                                            <div className="w-1.5 h-1.5 bg-slate-200 dark:bg-slate-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Chat Input Bar */}
                            <div className="bg-white dark:bg-slate-900 p-4 flex items-center gap-3 border-t border-slate-100 dark:border-slate-800">
                                <input 
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder={t("whatsapp_input_placeholder")}
                                    className="flex-1 bg-slate-50 dark:bg-slate-800 rounded-xl py-3 px-6 text-xs text-slate-700 dark:text-slate-200 font-bold border border-slate-100 dark:border-slate-700 focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all"
                                />
                                <button 
                                    onClick={handleSend}
                                    disabled={isLoading}
                                    className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                                </button>
                            </div>
                        </div>

                        {/* Floating Tech Badge */}
                        <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-[24px] shadow-2xl border border-slate-50 dark:border-slate-800 animate-float max-w-[200px] z-20">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none">{t("whatsapp_badge_status")}</span>
                            </div>
                            <div className="text-xs font-extrabold text-heading dark:text-white">{t("whatsapp_badge_count")}</div>
                        </div>
                    </div>

                    {/* 2. Content Side */}
                    <div className="w-full lg:w-1/2 space-y-10 lg:space-y-14 order-1 lg:order-2">
                        <div className="space-y-6 text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-800">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest leading-none">Nouveauté Automne 2026</span>
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-black text-heading dark:text-white leading-[1.1] tracking-tight">
                                {t('Votre boutique ne')}
                            </h2>
                            <p className="text-lg lg:text-xl text-body dark:text-slate-400 leading-relaxed font-medium">
                                {t('Testez l\'intelligence')}
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-4 group">
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-primary border border-blue-100 dark:border-blue-800 transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold text-heading dark:text-white">{t('Service 24h/7j')}</h4>
                                <p className="text-sm text-body dark:text-slate-400 leading-relaxed font-medium">
                                    {t('Répondez aux messages')}
                                </p>
                            </div>
                            <div className="space-y-4 group">
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-primary border border-blue-100 dark:border-blue-800 transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold text-heading dark:text-white">{t('Sync CRM Native')}</h4>
                                <p className="text-sm text-body dark:text-slate-400 leading-relaxed font-medium">
                                    {t('Chaque commande prise')}
                                </p>
                            </div>
                        </div>

                        <div className="pt-10 border-t border-slate-100 dark:border-slate-800">
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 overflow-hidden shadow-sm">
                                            <img src={`https://i.pravatar.cc/100?u=${i + 20}`} alt="user" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center sm:text-left">
                                    <div className="text-sm font-black text-heading dark:text-white uppercase tracking-wider">{t("whatsapp_merchants_count")}</div>
                                    <div className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-tight">{t("whatsapp_merchants_desc")}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhatsAppAI;

