import { useState } from "react";

const useLocalStorage = <T>(key: string, initialValue?: T) => {
  const [storedValue, setStoredValue] = useState<T | undefined>(() => {
    try {
      const item = localStorage.getItem(key);
      const parsed = item ? JSON.parse(item) : initialValue;
      return parsed;
    } catch (e) {
      console.error(e);
      return initialValue;
    }
  });

  const getItem = (): T => {
    try {
      const item = localStorage.getItem(key);
      if (!item) return initialValue as T;
      const parsed = JSON.parse(item);
      setStoredValue(parsed);
      return parsed;
    } catch (e) {
      console.error(e);
      return initialValue as T;
    }
  };

  const setItem = (value: T) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  };

  const removeItem = () => {
    try {
      localStorage.removeItem(key);
      setStoredValue(initialValue as T);
    } catch (e) {
      console.error(e);
    }
  };
  return { storedValue, getItem, setItem, removeItem };
};

export default useLocalStorage;
