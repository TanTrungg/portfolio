import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

interface navItem {
  id: number;
  name: string;
}

const navItems: navItem[] = [
  {
    id: 0,
    name: "home",
  },
  {
    id: 1,
    name: "resume",
  },
  {
    id: 2,
    name: "skills",
  },
  {
    id: 3,
    name: "works",
  },
  {
    id: 4,
    name: "contact",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const toggleRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleOpenCloseToggle = (event: MouseEvent) => {
      if (
        toggleRef.current &&
        !toggleRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOpenCloseToggle);
    return () => {
      document.removeEventListener("mousedown", handleOpenCloseToggle);
    };
  }, [isOpen]);

  const toggleNav = (name: string) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? "" : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full mx-auto  fixed top-0 py-5 sm:py-4 z-30 ${
        scrollPosition > 0 ? `bg-gray-50 shadow-md` : "bg-transparent"
      } `}
    >
      <nav className="container m-auto flex items-center justify-between">
        <div data-aos="fade-down" className="logo">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="text-3xl font-bold sm:text-3xl"
          >
            Tan Trung.
          </Link>
        </div>
        <div
          data-aos="fade-down"
          className="nav-items flex items-center space-x-11"
        >
          <button
            onClick={() => toggleNav("")}
            className="cursor-pointer text-2xl hidden md:block"
          >
            <HiMenu size={25} />
          </button>

          <ul
            ref={toggleRef}
            className={`flex items-center justify-center space-x-11 ${
              !isOpen ? "md:flex" : "md:right-[0%]"
            } md:flex-col md:absolute m-auto md:top-0 md:right-[-100%] md:w-[70%] md:h-[55vh] md:bg-slate-100 md:rounded-2xl md:mx-auto`}
          >
            {/* Use a button tag for better accessibility */}
            <button
              onClick={() => toggleNav("")}
              className={`text-3xl hidden md:block relative top-8 container mx-auto`}
            >
              <RxCross2 size={25} />
            </button>
            {navItems.map((item) => (
              <li
                key={item.id}
                className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center"
              >
                <a
                  onClick={() => toggleNav(item.name)}
                  href={`#${item.name}`}
                  className={`uppercase cursor-pointer text-black hover:text-yellow-600 font-bold ${
                    item.name === activeIndex ? "text-yellow-600" : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <a
              href="mailto:nguyentantrung1801@gmail.com"
              className="uppercase bg-black text-[1rem] text-white px-8 py-2 rounded-lg font-bold hover:text-yellow-400 md:m-5 md:block md:mx-auto md:w-fit lg:px-3"
            >
              Work with Me
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
