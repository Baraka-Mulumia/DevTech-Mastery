import React, { useState } from 'react';

export default function useAPI(apiFunc) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const request = async (...args) => {
    setIsLoading(true);

    const response = await apiFunc(...args);
    setIsLoading(false);

    setError(!response.ok);
    setData(response.data);

    return response;
  };

  return { data, error, loading, request };
}
