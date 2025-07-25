"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquareIcon } from "../icons";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSend = () => {
    if (message.trim()) {
      // Create email subject and body
      const subject = encodeURIComponent("Inquiry from Website");
      const body = encodeURIComponent(message);
      const mailtoLink = `mailto:info@artisanlawllp.com?subject=${subject}&body=${body}`;

      // Open user's default email client
      window.location.href = mailtoLink;

      // Reset and close modal
      setMessage("");
      onClose();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-end p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 animate-fadeIn"
        style={{
          animation: isOpen
            ? "fadeIn 0.2s ease-out forwards"
            : "fadeOut 0.2s ease-out forwards",
        }}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl w-80 mb-16 mr-4 overflow-hidden transform translate-y-4 opacity-0 animate-slideUp"
        style={{
          animation: isOpen
            ? "slideUp 0.3s ease-out forwards"
            : "slideDown 0.2s ease-out forwards",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-700">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <h3 className="text-white font-medium">
              This chat is not Legal Advice
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="space-y-3 mb-4">
            <div className="bg-zinc-800 rounded-lg p-3">
              <p className="text-gray-300 text-sm">
                Hello! How can we help you today? Please describe your legal
                inquiry and we&apos;ll get back to you.
              </p>
            </div>
          </div>

          {/* Input */}
          <div className="flex space-x-2">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="What services do you provide?"
              className="flex-1 bg-zinc-800 border border-zinc-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              rows={1}
              style={{ minHeight: "38px" }}
            />
            <button
              onClick={handleSend}
              disabled={!message.trim()}
              className="bg-purple-600 hover:bg-purple-700 disabled:bg-zinc-700 disabled:text-gray-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(16px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(16px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export const FloatingActionButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-zinc-700 bg-opacity-55 p-3 rounded-full border border-white text-white shadow-lg hover:scale-105 transition-transform"
        >
          <MessageSquareIcon />
        </button>
      </div>

      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};
