import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 400);
    });
  }, []);

  return (
    <>
      {show && (
        <button
          className="fixed bottom-6 right-6 bg-[#8b2c4a] text-white w-12 h-12 rounded-full"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollTop;
