"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { Button } from "./ui/moving-border";
import { PinContainer } from "../components/ui/3d-pin";
import "../css/Hero.css";

export const Contact = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async () => {
    if (!email || !message) return;

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      title: "Instagram",
      username: "___jaythakur___",
      href: "https://instagram.com/___jaythakur___",
      gradient: "from-pink-500 via-purple-500 to-orange-500",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      title: "LinkedIn",
      username: "mritunjay-thakur-jay",
      href: "https://www.linkedin.com/in/mritunjay-thakur-jay/",
      gradient: "from-blue-600 via-blue-500 to-cyan-400",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      title: "GitHub",
      username: "mritunjay-thakur",
      href: "https://github.com/mritunjay-thakur/mritunjay-thakur",
      gradient: "from-gray-700 via-gray-600 to-gray-500",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      title: "Email",
      username: "mritunjaythakur903@gmail.com",
      href: "mailto:mritunjaythakur903@gmail.com",
      gradient: "from-red-500 via-pink-500 to-yellow-500",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Hey, I'm Mritunjay Thakur
            </span>
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
            Your friendly neighbourhood{" "}
            <strong className="text-white">Full Stack Web Developer</strong>
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white max-w-3xl mx-auto px-4 leading-relaxed">
            Reach out for collaborations, freelance opportunities, or just to
            say hi. I'd love to connect!
          </h2>
        </div>

        <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="space-y-4 sm:space-y-6">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
              />
            </div>
            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                rows={5}
                className="w-full p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none resize-none"
              ></textarea>
            </div>

            {status === "success" && (
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/50">
                <p className="text-green-400 text-center font-medium">
                  ✓ Message sent successfully!
                </p>
              </div>
            )}
            {status === "error" && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/50">
                <p className="text-red-400 text-center font-medium">
                  ✗ Failed to send message. Please try again.
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => router.push("/")}
                disabled={loading}
                className="font-extralight text-sm landing-button flex items-center justify-center"
              >
                <span className="text-md">Back</span>
                <div className="button-arrow-circle ml-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#ffffff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 4L6 8L10 12"
                      stroke="#4c1d95"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              <button
                onClick={handleSubmit}
                disabled={loading || !email || !message}
                className="font-extralight text-sm landing-button flex items-center justify-center"
              >
                <span className="text-md">
                  {loading ? "Sending..." : "Send Message"}
                </span>
                <div className="button-arrow-circle ml-2">
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
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center gap-2 py-6">
          {socialLinks.map((link) => (
            <div key={link.title} className="cursor-pointer">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <PinContainer title={link.title}>
                  <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[14rem] h-[14rem]">
                    <h3 className="font-bold text-base text-slate-100">
                      {link.title}
                    </h3>
                    <span className="text-slate-500 text-xs mt-1">
                      {link.username}
                    </span>
                    <div
                      className={`flex-1 rounded-lg mt-4 bg-gradient-to-br ${link.gradient}`}
                    />
                  </div>
                </PinContainer>
              </a>
            </div>
          ))}
        </div>
        <div className="lg:hidden grid grid-cols-2 gap-3 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-gray-700 transition-all p-4 hover:scale-[1.02] active:scale-[0.98] shadow-lg flex flex-col items-center justify-center min-h-[180px]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${link.gradient} flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300`}
              >
                <div className="text-white w-8 h-8 flex items-center justify-center">
                  {link.icon}
                </div>
              </div>

              <div className="text-center flex flex-col items-center justify-center flex-grow">
                <h3 className="font-bold text-base text-white mb-1">
                  {link.title}
                </h3>
                <p className="text-gray-300 text-xs text-center leading-tight px-1">
                  {link.username}
                </p>
              </div>

              <div className="mt-2 text-gray-400 group-hover:text-white transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <footer className="text-center py-8 border-t border-gray-800">
          <p className="text-base sm:text-lg text-neutral-500">
            Built with <span className="text-red-500 animate-pulse">❤️</span> by{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text font-semibold">
              Mritunjay Thakur
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
};
