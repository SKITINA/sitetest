import React from 'react';
import { Headphones } from 'lucide-react';

const ChatWidget = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors">
        <Headphones className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ChatWidget;