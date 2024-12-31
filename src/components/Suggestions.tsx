import React from 'react';

const suggestions = [
  { id: 1, username: 'travel_pics', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop' },
  { id: 2, username: 'food_lover', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop' },
  { id: 3, username: 'nature_photo', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop' },
];

export function Suggestions() {
  return (
    <div className="mt-4">
      <div className="flex justify-between mb-4">
        <span className="text-gray-500 font-semibold">Suggestions For You</span>
        <button className="text-sm font-semibold">See All</button>
      </div>
      
      {suggestions.map((suggestion) => (
        <div key={suggestion.id} className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <img
              src={suggestion.image}
              alt={suggestion.username}
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <div className="text-sm font-semibold">{suggestion.username}</div>
              <div className="text-xs text-gray-500">Suggested for you</div>
            </div>
          </div>
          <button className="text-xs font-semibold text-blue-500">Follow</button>
        </div>
      ))}
    </div>
  );
}