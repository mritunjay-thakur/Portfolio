<<<<<<< HEAD
"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

type DisplayHeaderProps = {
  activeItem?: string;
};

const Header: React.FC<DisplayHeaderProps> = ({ activeItem }) => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsScrolling(true);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => setIsScrolling(false), 1000);
  };

  useEffect(() => {
    if (isScrolling) return;

    const handleScroll = () => {};

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  return (
    <header
      className="z-[9999]
        fixed top-0 left-1/2 -translate-x-1/2
        flex items-center justify-between
        w-screen max-w-[1200px] px-4 sm:px-8 md:px-16 h-24 md:h-40
      "
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4 md:gap-6 w-full justify-between">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-full mt-2.5 bg-white/5 backdrop-blur-lg border border-white/10"
            aria-label="Toggle menu"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>

          <nav
            ref={navRef}
            className="
              hidden md:flex items-center justify-between gap-8
              text-white h-[60px] px-10
              rounded-full border border-white/10
              bg-white/5 backdrop-blur-lg shadow-lg
            "
          >
            <button
              onClick={() => scrollToSection("hero")}
              className={`relative opacity-60 hover:opacity-100 transition ${
                activeItem === "home"
                  ? "opacity-100 before:content-[''] before:absolute before:w-1.5 before:h-1.5 before:bg-white before:rounded-full before:-left-3 before:top-1/2 before:-translate-y-1/2"
                  : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="opacity-60 hover:opacity-100 transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("project")}
              className="opacity-60 hover:opacity-100 transition"
            >
              Project
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="opacity-60 hover:opacity-100 transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className="opacity-60 hover:opacity-100 transition"
            >
              Contact
            </button>
          </nav>

          <Link
            href="https://github.com/mritunjay-thakur/"
            className="font-extralight text-xs sm:text-sm landing-button mt-4 md:mt-6"
          >
            <span className="text-sm md:text-md">GitHub</span>
            <div className="button-arrow-circle">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="#4c1d95"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav
          className="
            md:hidden fixed top-24 left-1/2 -translate-x-1/2
            w-[calc(100%-2rem)] max-w-md
            flex flex-col gap-2
            text-white p-6
            rounded-2xl border border-white/10
            bg-white/5 backdrop-blur-lg shadow-lg
          "
        >
          <button
            onClick={() => scrollToSection("hero")}
            className={`text-left py-3 px-4 rounded-lg opacity-60 hover:opacity-100 hover:bg-white/5 transition ${
              activeItem === "home" ? "opacity-100 bg-white/5" : ""
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-left py-3 px-4 rounded-lg opacity-60 hover:opacity-100 hover:bg-white/5 transition"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("project")}
            className="text-left py-3 px-4 rounded-lg opacity-60 hover:opacity-100 hover:bg-white/5 transition"
          >
            Project
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-left py-3 px-4 rounded-lg opacity-60 hover:opacity-100 hover:bg-white/5 transition"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("footer")}
            className="text-left py-3 px-4 rounded-lg opacity-60 hover:opacity-100 hover:bg-white/5 transition"
          >
            Contact
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
=======
"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

type DisplayHeaderProps = {
  activeItem?: string;
};

const Header: React.FC<DisplayHeaderProps> = ({ activeItem }) => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsScrolling(true);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => setIsScrolling(false), 1000);
  };

  useEffect(() => {
    if (isScrolling) return;

    const handleScroll = () => {};

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  return (
    <header
      className="
        fixed top-0 left-1/2 -translate-x-1/2 z-[100]
        flex items-center justify-between
        w-screen max-w-[1200px] px-16 h-40
      "
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-6 w-full justify-between">
          <nav
            ref={navRef}
            className="
              hidden md:flex items-center justify-between gap-8
              text-white h-[60px] px-10
              rounded-full border border-white/10
              bg-white/5 backdrop-blur-lg shadow-lg
            "
          >
            <button
              onClick={() => scrollToSection("hero")}
              className={`relative opacity-60 hover:opacity-100 transition ${
                activeItem === "home"
                  ? "opacity-100 before:content-[''] before:absolute before:w-1.5 before:h-1.5 before:bg-white before:rounded-full before:-left-3 before:top-1/2 before:-translate-y-1/2"
                  : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="opacity-60 hover:opacity-100 transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("project")}
              className="opacity-60 hover:opacity-100 transition"
            >
              Project
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="opacity-60 hover:opacity-100 transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className="opacity-60 hover:opacity-100 transition"
            >
              Contact
            </button>
          </nav>
          <Link
            href="/nini"
            className=" font-extralight text-sm landing-button mt-6"
          >
            <span className="text-md ">Nini Ai</span>
            <div className="button-arrow-circle">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="#4c1d95"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
>>>>>>> 98787902183e7baab9b60890be3491a506a5035c
