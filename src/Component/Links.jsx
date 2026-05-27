import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/images', text: '📸 Images' },
  { url: '/videos', text: '📺 Videos' },
];

 function Links() {
  return (
    <div className="flex space-x-4 mt-4">
      {links.map((link) => (
        <NavLink
          key={link.url}
          to={link.url}
          className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  );
}
export default Links;
