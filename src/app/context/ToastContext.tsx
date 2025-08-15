'use client';
import { createContext, useState, useContext } from 'react';

interface ToastContextType {
  showToast: (message: string, type?: "success" | "error" | "info") => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 3000); // Auto close after 3 sec
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {message && (
  <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] sm:w-auto">
  <div className="bg-white/90 backdrop-blur-md text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg flex items-center gap-2 sm:gap-3 animate-slideDown border border-gray-200">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414L9 13.414l4.707-4.707z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-xs sm:text-sm font-medium">{message}</span>
  </div>
</div>


      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
