import React from 'react';

const stories = [
  { id: 1, username: 'user_one', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
  { id: 2, username: 'travel_lover', image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop' },
  { id: 3, username: 'foodie', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
  { id: 4, username: 'photographer', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop' },
  { id: 5, username: 'artist', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
];

export function Stories() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
      <div className="flex space-x-4 overflow-x-auto">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center space-y-1 flex-shrink-0">
            <div className="w-16 h-16 rounded-full ring-2 ring-pink-500 p-1">
              <img
                src={story.image}
                alt={story.username}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="text-xs">{story.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
}