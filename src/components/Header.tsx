import React from 'react';
import { Instagram, Search, Heart, PlusSquare, MessageCircle, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Instagram className="h-8 w-8" />
          <span className="ml-2 text-xl font-semibold hidden sm:inline">Instagram</span>
        </div>
        
        <div className="hidden sm:flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <Search className="h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none focus:ring-0 outline-none ml-2"
          />
        </div>

        <div className="flex items-center space-x-4">
          <PlusSquare className="h-6 w-6 cursor-pointer" />
          <Heart className="h-6 w-6 cursor-pointer" />
          <MessageCircle className="h-6 w-6 cursor-pointer" />
          <Menu className="h-6 w-6 cursor-pointer" />
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            alt="Profile"
            className="h-8 w-8 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}