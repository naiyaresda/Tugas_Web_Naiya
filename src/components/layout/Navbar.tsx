import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 50);
    });
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}>
      
      <div className="max-w-screen-xl mx-auto px-8 flex justify-between items-center">

        <img src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png" className="w-40" />

        <ul className="flex gap-8 font-medium">
          <li className="cursor-pointer hover:text-[#8b2c4a]">Beranda</li>
          <li className="cursor-pointer hover:text-[#8b2c4a]">Competition</li>
          <li className="cursor-pointer hover:text-[#8b2c4a]">Seminar</li>
          <li className="cursor-pointer hover:text-[#8b2c4a]">Workshop</li>
          <li className="cursor-pointer hover:text-[#8b2c4a]">Talkshow</li>
        </ul>

      </div>

    </nav>
  );
};

export default Navbar;
