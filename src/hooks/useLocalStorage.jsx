import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";


export default function useLocalStorage<Jsx>(
  key: string,
  initialValue: Js | (() => Jsx)
) {
  const [value, setValue] = useState<Js>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return (initialValue as () => Jsx)();
    } else {
      return initialValue;
    }
  });
  

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
