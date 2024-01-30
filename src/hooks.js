import { useState, useEffect } from "react";
import axios from "axios";

const useLazyFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (term) => {
    setLoading(true);
    const params = {
      term,
      media: "musicVideo",
    };
    const url = new URL("https://itunes.apple.com/search");
    try {
      url.search = new URLSearchParams(params);
      const response = await fetch(url);
      const result = await response.json();
      setData(result.results);
      return data;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, loading, data, error };
};

export default useLazyFetch;
