import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, X, CornerDownRight } from 'lucide-react';

interface Message {
  sender: "user" | "bot";
  content: string;
}

const LoadingIndicator = () => (
  <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="flex items-start gap-3 my-3 justify-start">
    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0"><Bot className="w-5 h-5" /></div>
    <div className="px-4 py-2 rounded-2xl bg-gray-200 flex items-center space-x-1">
      <motion.div className="w-2 h-2 bg-blue-500 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="w-2 h-2 bg-blue-500 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }} />
      <motion.div className="w-2 h-2 bg-blue-500 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }} />
    </div>
  </motion.div>
);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
        const conversationHistory = [...messages, userMessage].map(msg => ({
            role: msg.sender,
            content: msg.content
        }));

      const res = await axios.post("http://localhost:5000/chat", { 
          messages: [
            { role: "system", content: "You are a helpful assistant for Wellbe, a beauty platform in Morocco. Be concise and friendly." },
            ...conversationHistory
        ]
        });
      const botReply: Message = { sender: "bot", content: res.data.reply };
      setMessages(prev => [...prev, botReply]);
    } catch (err) {
      const errorReply: Message = { sender: "bot", content: "Désolé, une erreur s'est produite. Veuillez réessayer." };
      setMessages(prev => [...prev, errorReply]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
  };

  return (
    <>
      <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? <X className="w-6 h-6 sm:w-8 sm:h-8" /> : <Bot className="w-6 h-6 sm:w-8 sm:h-8" />}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-20 sm:bottom-28 right-2 sm:right-8 w-[calc(100vw-1rem)] sm:w-[360px] h-[400px] sm:h-[500px] bg-white rounded-xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 z-50 max-w-sm sm:max-w-none"
          >
            {/* Header */}
            <header className="bg-blue-900 text-white p-3 sm:p-4 flex items-center shadow-md">
              <Bot className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
              <h3 className="font-bold text-base sm:text-lg">Assistant Wellbe</h3>
            </header>

            {/* Chat Area */}
            <div className="flex-1 p-3 sm:p-4 overflow-y-auto bg-gray-50">
                <AnimatePresence>
              {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2 sm:gap-3 my-2 sm:my-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.sender === 'bot' && <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0"><Bot className="w-4 h-4 sm:w-5 sm:h-5" /></div>}
                    <div className={`px-3 sm:px-4 py-2 rounded-2xl max-w-[80%] text-sm sm:text-base ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                        {msg.content}
                    </div>
                    {msg.sender === 'user' && <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center flex-shrink-0"><User className="w-4 h-4 sm:w-5 sm:h-5" /></div>}
                  </motion.div>
              ))}
              </AnimatePresence>

              {isLoading && <LoadingIndicator />}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 sm:p-4 border-t border-gray-200 bg-white">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Posez votre question..."
                  className="w-full bg-gray-100 border-2 border-transparent rounded-lg py-2 sm:py-3 pl-3 sm:pl-4 pr-10 sm:pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm sm:text-base"
                  disabled={isLoading}
                />
                <button 
                    onClick={sendMessage} 
                    disabled={isLoading || !input.trim()}
                    className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-opacity hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot; 