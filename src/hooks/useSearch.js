import { useEffect, useState } from "react";
import _ from "lodash";

export default function useSearch(query, pageNumber) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pins, setPins] = useState([]);

  const accessKey = process.env.REACT_APP_ACCESSKEY;

  useEffect(() => {
    setPins([]);
  }, [query]);

  const debouncedFetch = _.debounce((query, pageNumber) => {
    setIsLoading(true);
    setError(false);

    let fullQuery = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=30`;

    if (query) {
      fullQuery = `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=${pageNumber}&per_page=30&query=${query}`;
    }

    fetch(fullQuery)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Rate Limit Exceeded or other error");
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setPins((prevPins) => [...prevPins, ...(query ? data.results : data)]);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        setIsLoading(false);
      });
  }, 500); // 500ms debounce delay to avoid frequent requests

  useEffect(() => {
    if (accessKey) {
      debouncedFetch(query, pageNumber);
    } else {
      console.error(
        "Access key for Unsplash is missing. Please set it in the environment variables."
      );
    }
  }, [query, pageNumber, accessKey]);

  return { isLoading, error, pins };
}
