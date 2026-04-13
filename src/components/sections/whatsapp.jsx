import React, { useState, useRef, useEffect } from 'react';

const WhatsAppAI = () => {
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
                            "content": "Tu es l'IA Assistante de RiseManager sur WhatsApp. Ton but est de gérer les commandes des clients de manière professionnelle et efficace. \n\nDirectives :\n1. Si le client veut commander, confirme que le produit est disponible.\n2. Demande poliment son Nom complet et son Adresse de livraison.\n3. Sois concis et utilise un ton amical (style WhatsApp).\n4. Utilise quelques emojis (🚀, ✅, 📦).\n5. Une fois les infos reçues, confirme la commande et dis qu'un agent humain l'appellera bientôt. Sois très bref."
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

    return (
        <section className="py-24 lg:py-40 bg-slate-50/30 overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* 1. Visual Side: The Dynamic Chat */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">
                        <div className="absolute -top-6 -left-6 z-20 w-16 h-16 bg-[#25D366] rounded-2xl shadow-2xl shadow-emerald-200 flex items-center justify-center animate-bounce-subtle">
                            <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </div>

                        <div className="bg-white rounded-[32px] sm:rounded-[48px] shadow-2xl border border-slate-100 overflow-hidden relative group">
                            {/* Chat Header */}
                            <div className="bg-[#075e54] p-4 sm:p-6 flex items-center justify-between">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse absolute bottom-0.5 right-0.5 border-2 border-[#075e54]" />
                                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-sm sm:text-base">AI Assistant Rise</div>
                                        <div className="text-white/60 text-[10px] sm:text-xs font-medium">{isLoading ? 'En train d\'écrire...' : 'En ligne'}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Chat Content */}
                            <div
                                className="bg-[#e5ddd5] p-5 sm:p-8 space-y-4 h-[450px] overflow-y-auto relative custom-scrollbar scroll-smooth"
                                ref={scrollRef}
                            >
                                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }} />

                                {messages.map((msg, i) => (
                                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}>
                                        <div className={`${msg.role === 'user' ? 'bg-[#dcf8c6] rounded-tr-none border border-emerald-100' : 'bg-white rounded-tl-none'} p-3 sm:p-4 rounded-2xl shadow-sm max-w-[85%] relative z-10`}>
                                            <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                                            <span className={`text-[9px] ${msg.role === 'user' ? 'text-emerald-600/60' : 'text-slate-400'} mt-1 block text-right`}>
                                                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                    </div>
                                ))}

                                {isLoading && (
                                    <div className="flex justify-start animate-pulse">
                                        <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                                            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" />
                                            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                                            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Chat Input Bar */}
                            <div className="bg-slate-50 p-4 flex items-center gap-3">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Écrire un message..."
                                    className="flex-1 bg-white rounded-full py-3 px-6 text-xs text-slate-700 font-medium shadow-sm border border-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={isLoading}
                                    className="w-12 h-12 bg-[#075e54] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#128c7e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                                </button>
                            </div>
                        </div>

                        {/* Floating Tech Badge */}
                        <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white p-4 sm:p-5 rounded-[24px] shadow-2xl border border-slate-100 animate-float max-w-[200px] z-20">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Status IA</span>
                            </div>
                            <div className="text-xs sm:text-sm font-bold text-heading">142 Commandes traitées cette nuit</div>
                        </div>
                    </div>

                    {/* 2. Content Side */}
                    <div className="w-full lg:w-1/2 space-y-10 lg:space-y-14 order-1 lg:order-2">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest leading-none">Nouveauté : Assistant IA</span>
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-extrabold text-heading leading-[1.1]">
                                Votre boutique ne <br />
                                <span className="text-emerald-500">dort jamais.</span>
                            </h2>
                            <p className="text-lg sm:text-xl text-body leading-relaxed font-medium">
                                Testez notre IA en live ! Dites-lui que vous voulez commander un produit et voyez comment elle gère la confirmation. <span className="text-heading font-bold font-outfit">Essayez maintenant.</span>
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-4 group">
                                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 border border-emerald-100 transition-transform group-hover:scale-110">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold text-heading">Service 24h/7j</h4>
                                <p className="text-sm text-body leading-relaxed">
                                    Répondez aux messages à 3h du matin sans lever le petit doigt. Vos clients n'attendent plus.
                                </p>
                            </div>
                            <div className="space-y-4 group">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 border border-blue-100 transition-transform group-hover:scale-110">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold text-heading">Sync CRM Native</h4>
                                <p className="text-sm text-body leading-relaxed">
                                    Chaque commande prise par l'IA apparaît instantanément dans votre tableau de bord Gestion des Commandes.
                                </p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-slate-200/60">
                            <div className="flex items-center gap-6">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?u=${i + 20}`} alt="user" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-heading">+450 marchands</div>
                                    <div className="text-xs text-slate-400 font-medium whitespace-nowrap">utilisent déjà l'automatisation IA</div>
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

