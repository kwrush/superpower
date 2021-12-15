import { useState, useEffect } from 'react';
import AbortController from 'abort-controller';

const useAbortSignal = () => {
  const [abortController] = useState(new AbortController());
  useEffect(() => {
    return () => abortController.abort();
  }, [abortController]);

  return abortController.signal;
};

export default useAbortSignal;
