import { useState, useCallback } from "react";
import axios from "axios";

const useHttpRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback(async (method, url, data = {}) => {
    setIsLoading(true);
    try {
      const response = await axios({
        method,
        url,
        data,
      });
      setIsLoading(false);
      return response;
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  }, []);

  return { sendRequest, error, isLoading };
};

export default useHttpRequest;
