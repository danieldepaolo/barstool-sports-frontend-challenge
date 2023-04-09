import { useEffect, useRef } from "react";

export default function useInterval(func: Function, intervalSecs: number = 10) {
  const reqInterval = useRef<number>();

  useEffect(() => {
    return () => clearInterval(reqInterval.current);
  }, [])

  const startInterval = () => {
    reqInterval.current = setInterval(func, intervalSecs * 1000);
  };

  return { startInterval };
}
