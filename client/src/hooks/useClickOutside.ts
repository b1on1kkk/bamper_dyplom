import { useEffect } from "react";
const useClickOutside = <T>(
  ref: React.RefObject<HTMLElement>,
  dependency: T,
  callback: () => void
) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, dependency]);
};

export default useClickOutside;
