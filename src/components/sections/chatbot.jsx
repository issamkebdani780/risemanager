import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, Loader2, Trash2, X, MessageCircle, Sparkles } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const context = `
    RISEMANAGER PROJECT SPECIFICATIONS:
    - Target: African e-commerce businesses scaling up, managing volume, variants (shoes/clothes), and COD teams.
    - Core Value: "Pilote ton e-commerce avec un vrai système, pas des fichiers dispersés."
    
    MODULES & ECOSYSTEM:
    1. RiseManager (The OS):
       - Order Management: Status tracking, mass actions, history, and advanced filters.
       - Stock 2.0: Deep variant support (size/color), tracking 'Available', 'Reserved', and 'In-Return' stock. 
       - Logistics: Scan-based control (preparation, return scan, warehouse reception).
       - Team Tracking: Real performance metrics (Confirmation rate, Delivery rate, individual productivty).
       - Blacklist/Risk: Score de risque client, shared incident database to block bad buyers.
       - Finance/Profit: Automated net profit calculation (Price - Product Cost - Ads - Shipping - Fees).
       - Shipping Audit: Tracking every dinar lost in deliveries and returns.
    
    2. The Ecosystem:
       - RiseCart: Local Shopify-alternative optimized for African COD.
       - RiseConfirm: Professional call center outsourcing for e-merchants.
       - FBR (Fulfillment By Rise): Logistics, warehousing, and delivery network.
       - RiseAcademy: Training for e-commerce entrepreneurs in Africa.
       - RisePay: Financial infrastructure and cash flow management.

    BUSINESS GOALS:
    - Conversion items: 14-day Free Trial (No credit card), Demo Reservation.
    - Trust signals: Support based in Africa, Native integrations, Secure data.
  `;

  useEffect(() => {
    const savedHistory = localStorage.getItem('rise_chat_history');
    if (savedHistory) {
      setMessages(JSON.parse(savedHistory));
    } else {
      setMessages([
        {
          role: "assistant",
          content: "Salam ! 👋 Je suis l'assistant RiseManager. Je peux vous aider à structurer votre business e-commerce ou vous expliquer comment notre écosystème peut automatiser votre croissance en Afrique. Que souhaitez-vous savoir ?"
        }
      ]);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('rise_chat_history', JSON.stringify(messages));
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input.trim() };
    setInput("");
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const systemPrompt = `Tu es l'assistant concierge intelligent de RiseManager (Afrique).
      
      TON RÔLE :
      - Tu es un expert en e-commerce COD spécialisé sur le marché africain.
      - Tu aides les entrepreneurs à comprendre comment RiseManager remplace leurs fichiers Excel.
      - Tu expliques les bénéfices de l'écosystème (RiseCart, RiseConfirm, FBR).
      - Tu es proactif, professionnel et tu utilises un ton "Executive" mais chaleureux.

      DONNÉES DE RÉFÉRENCE :
      ${context}

      CONSIGNES :
      1. Si l'utilisateur a des problèmes de retours, explique la gestion des retours de RiseManager.
      2. Toujours encourager l'essai gratuit de 14 jours.
      3. Réponds en Français par défaut, mais si l'utilisateur parle en Arabe (Darja ou Classique), réponds en Arabe.
      4. Ne pas inventer de prix, dire que c'est sur mesure ou demander de voir la section tarifs.
      `;

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "HTTP-Referer": window.location.origin,
          "X-Title": "RiseManager AI Concierge",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          messages: [
            { role: "system", content: systemPrompt },
            ...messages.map((msg) => ({ role: msg.role, content: msg.content })),
            { role: "user", content: userMessage.content },
          ],
        }),
      });

      if (!response.ok) throw new Error(`API Error: ${response.status}`);

      const data = await response.json();
      const assistantMessage = {
        role: "assistant",
        content: data.choices[0].message.content,
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error calling AI:", error);
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Désolé, je rencontre une petite difficulté technique. Vous pouvez me contacter via WhatsApp ou réessayer dans quelques instants."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    if (window.confirm("Voulez-vous réinitialiser la discussion ?")) {
      setMessages([{
        role: "assistant",
        content: "Salam ! 👋 Je suis l'assistant RiseManager. Comment puis-je aider votre business aujourd'hui ?"
      }]);
      localStorage.removeItem('rise_chat_history');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans flex flex-col items-end">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="size-16 rounded-2xl bg-blue-600 text-white shadow-[0_20px_40px_-10px_rgba(0,162,255,0.5)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all group overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <MessageCircle className="size-8 relative z-10" />
          <div className="absolute top-3 right-3 size-2.5 bg-emerald-400 border-2 border-blue-600 rounded-full animate-pulse"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[calc(100vw-3rem)] sm:w-[440px] max-w-[440px] h-[640px] max-h-[85vh] bg-white rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
          {/* Header */}
          <div className="p-6 sm:p-8 bg-white border-b border-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                <Sparkles className="size-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-sm uppercase tracking-wider">Rise Concierge</h3>
                <div className="flex items-center gap-1.5">
                  <div className="size-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">AI Expert Online</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={handleClearHistory} className="p-2.5 text-slate-300 hover:text-red-500 transition-colors" title="Réinitialiser">
                <Trash2 className="size-4" />
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2.5 text-slate-300 hover:text-slate-900 bg-slate-50 rounded-xl transition-all"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-6 bg-white custom-scrollbar">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <div className="size-8 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-600/20">
                    <Bot className="size-4" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-[24px] px-5 py-4 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/10"
                      : "bg-slate-50 text-slate-700 font-medium border border-slate-100/50"
                  } ${message.role === 'user' ? 'rounded-tr-none' : 'rounded-tl-none'}`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4 justify-start">
                <div className="size-8 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                  <Bot className="size-4" />
                </div>
                <div className="bg-slate-50 border border-slate-100/50 rounded-[24px] rounded-tl-none px-6 py-4">
                  <div className="flex gap-1.5">
                    <div className="size-1.5 bg-blue-600/40 rounded-full animate-bounce"></div>
                    <div className="size-1.5 bg-blue-600/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="size-1.5 bg-blue-600/40 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-6 sm:px-8  bg-white flex gap-2 overflow-x-auto no-scrollbar">
            {[
              "Comment automatiser mon COD ?",
              "RiseCart vs Shopify",
              "Remplacer mes fichiers Excel",
              "Calculer mon profit"
            ].map((action, i) => (
              <button
                key={i}
                onClick={() => setInput(action)}
                className="whitespace-nowrap px-5 py-2.5 rounded-full bg-slate-50 text-slate-600 text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all border border-slate-100"
              >
                {action}
              </button>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-6 sm:p-8  bg-white">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question à Rise..."
                disabled={isLoading}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600/50 transition-all pr-14"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 size-11 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all disabled:opacity-50 active:scale-95"
              >
                {isLoading ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-5" />}
              </button>
            </div>
            <p className="text-[9px] text-center text-slate-300 font-bold uppercase tracking-[0.2em] mt-4">
              Intelligence Artificielle Rise v1.0
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
