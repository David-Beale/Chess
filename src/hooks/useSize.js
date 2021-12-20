import { useState, useEffect } from "react";

export const useSize = () => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      setSize(Math.min(window.innerHeight - 50, window.innerWidth - 50));
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return size;
};
