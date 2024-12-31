import React from 'react';
import { Header } from './components/Header';
import { Stories } from './components/Stories';
import { Post } from './components/Post';
import { Suggestions } from './components/Suggestions';

const posts = [
  {
    id: 1,
    username: 'traveler',
    userImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?w=1000&h=1000&fit=crop',
    caption: 'Beautiful sunset at the beach! 🌅 #travel #sunset #beach',
    likes: 1234,
  },
  {
    id: 2,
    username: 'foodie',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1000&h=1000&fit=crop',
    caption: 'Homemade pizza for dinner! 🍕 #food #homemade #pizza',
    likes: 856,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto pt-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Stories />
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
        
        <div className="hidden md:block">
          <div className="fixed w-80">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                alt="Your profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-semibold">your_username</div>
                <div className="text-gray-500 text-sm">Your Name</div>
              </div>
            </div>
            <Suggestions />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;