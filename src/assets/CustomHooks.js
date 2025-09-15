import { useEffect, useState } from "react";
export default function CustomHooks() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handScroll);
    handScroll();
    return () => {
      window.removeEventListener("scroll", handScroll);
    };
  }, []);
  return scrollY;
}
