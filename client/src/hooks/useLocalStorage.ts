import { useState, useCallback } from "react";

const useLocalStorage = <U>(key: string, initialValue: U) => {
  const [storedValues, setStoredValue] = useState<U>(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = useCallback(
    (value: U) => {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [key]
  );

  return { storedValues, setValue };
};

export default useLocalStorage;
