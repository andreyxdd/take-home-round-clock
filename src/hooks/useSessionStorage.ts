/* eslint-disable no-console */
import React from 'react';

function useSessionStorage<T>(key: string, initialValue: T) {
  const [sessionValue, setSessionValue] = React.useState<T>(() => {
    if (!window) {
      return initialValue;
    }
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      console.error(e);
      return initialValue;
    }
  });

  const setter = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(sessionValue) : value;
      setSessionValue(valueToStore);
      if (window) {
        window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const clearStorage = () => {
    if (window) {
      window.sessionStorage.clear();
    }
  };

  return [sessionValue, setter, clearStorage] as const;
}

export default useSessionStorage;
