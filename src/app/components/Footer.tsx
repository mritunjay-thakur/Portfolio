"use client";

import React from "react";
import Iridescence from "./ui/Iridescence";
import Link from "next/link";

function Footer() {
  return (
    <div
      id="footer"
      className="relative min-h-screen bg-black text-white overflow-hidden pointer-events-none"
    >
      <div className="absolute inset-4 sm:inset-6 md:inset-8 z-0 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden">
        <Iridescence
          color={[0.4, 0.6, 1]}
          mouseReact={true}
          amplitude={0.1}
          speed={1.0}
        />
      </div>

      <div className="absolute inset-4 sm:inset-6 md:inset-8 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] pointer-events-none z-5"></div>

      <div className="absolute inset-4 sm:inset-6 md:inset-8 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] border-2 sm:border-3 md:border-4 border-black pointer-events-none z-10"></div>

      <div className="relative z-20 min-h-screen flex flex-col p-6 sm:p-8 md:p-10 lg:p-12 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 pl-4 sm:pl-6 md:pl-8 lg:pl-12">
          <p className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-['arial'] max-w-5xl leading-tight">
            Wanna create something <span className="font-bold">awesome</span>{" "}
            together?
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-auto mb-4 sm:mb-6 md:mb-4">
          <div className="flex-1"></div>

          <div className="relative pointer-events-auto flex flex-col items-center md:items-end w-full md:w-auto mt-8 md:mt-0">
            <div className="relative mb-4 sm:mb-6 md:mb-4">
              <Link href="/contact">
                <div className="relative inline-flex hover:text-blue-400 hover:bg-white items-center justify-center h-14 sm:h-16 md:h-18 w-48 sm:w-52 md:w-56 lg:w-60 md:mr-16 bg-transparent border-2 border-white text-white text-lg sm:text-xl md:text-2xl lg:text-3xl py-3 sm:py-3.5 md:py-4 px-6 sm:px-7 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105 font-inter overflow-hidden">
                  <span className="animate-sparkle-left">✦</span>
                  <span className=" mx-2">Let'sTalk</span>
                  <span className="animate-sparkle-right">✦</span>
                </div>
              </Link>
            </div>

            <div className="relative pointer-events-auto">
              <p className=" text-xs sm:text-sm md:text-base lg:text-xl font-light font-['Inter'] md:mr-16 text-center md:text-right px-4 md:px-0 break-words max-w-xs sm:max-w-sm md:max-w-none">
                Reach out at mritunjaythakur903@gmail.com
              </p>
              <div className="absolute bottom-0 left-0 right-0 border-b-2 border-dotted border-white md:mr-16"></div>
            </div>
          </div>
          <div className=" pointer-events-auto  flex-1 flex flex-col justify-center items-center px-6 py-8 md:hidden space-y-8">
            <div className="flex flex-wrap justify-center gap-4 w-full max-w-sm">
              <a
                href="https://github.com/mritunjay-thakur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mritunjay-thakur-jay/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com/___jaythakur___"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
