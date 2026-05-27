import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search74.p.rapidapi.com';

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (url) => {
  try {
    setLoading(true);

    const response = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'google-search74.p.rapidapi.com',
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    setResults(data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

  return (
    <StateContext.Provider
      value={{
        getResults,
        results,
        searchTerm,
        setSearchTerm,
        loading
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);