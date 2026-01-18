import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    let timer;
    const resize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 500);
    };
 
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return size;
}
