"use client";

import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { Button } from "./ui/moving-border";
import LightRays from "./ui/LightRays";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

function Project() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "Clothify AI",
      description: "AI fashion assistant using OpenRouter, and MERN.",
      image: "https://iili.io/KC79G94.md.png",
      link: "https://aiclothify.vercel.app",
    },
    {
      title: "DeepChat",
      description: "A real-time chat application built with React, Node.js.",
      image: "https://i.postimg.cc/rmWy3C52/Screenshot-2025-12-31-190857.png",
      link: "https://deepchat-92vb.onrender.com",
    },
    {
      title: "Nosum Investment",
      description:
        "Stock price prediction and analysis web app built with Next.js.",
      image: "https://i.postimg.cc/F1Xrhfg0/Screenshot-2025-12-31-190640.png",
      link: "https://nosum-ruby.vercel.app/",
    },

    {
      title: "Love & Learn Music",
      description: "Music school app built with Next.js and Gmail API.",
      image: "https://iili.io/KC7qbOg.md.png",
      link: "https://musicbyjay.vercel.app",
    },
    {
      title: "Thakur Events",
      description: "Event Planning website using HTML, CSS, JS and Bootstrap",
      image: "https://iili.io/KCaKV71.md.png",
      link: "https://eventsbyjay.vercel.app/",
    },
    {
      title: "Viadhyashree",
      description: "Heathcare & medicine website.",
      image: "https://iili.io/fXr01pe.md.png",
      link: "https://healthcare-by-jay.vercel.app/",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative min-h-screen bg-black px-4 sm:px-8 md:px-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#7851A9"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={20}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="w-full h-full"
        />
      </div>

      <h2 className="text-center z-10 mt-16 text-2xl sm:text-3xl md:text-4xl font-bold text-white relative">
        Selected Projects
        <p className="text-base font-normal mt-2">
          <span className="md:hidden">Swipe to explore</span>
          <span className="hidden md:inline">Click to open</span>
        </p>
      </h2>

      <div className="md:hidden relative z-10 mt-12 mb-20">
        <div className="relative max-w-sm mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>

                    <div className="p-6 space-y-4">
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95"
                      >
                        View Project
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-transparent text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 z-20"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-transparent text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 z-20"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-purple-500"
                    : "w-2 bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center mb-6">
          {projects.slice(0, 3).map((project, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] md:w-[24rem] h-auto rounded-xl p-5 border flex flex-col">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-3 mb-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer block"
                  >
                    <img
                      src={project.image}
                      className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer"
                      alt="thumbnail"
                    />
                  </a>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center -mt-32">
          {projects.slice(3, 6).map((project, index) => (
            <CardContainer key={index + 3} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] md:w-[24rem] h-auto rounded-xl p-5 border flex flex-col">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-3 mb-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer block"
                  >
                    <img
                      src={project.image}
                      className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer"
                      alt="thumbnail"
                    />
                  </a>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-10 mb-10 flex justify-center py-5">
        <Link href="https://github.com/mritunjay-thakur">
          <Button
            borderRadius="4rem"
            className="bg-white text-xl font-semibold dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Checkout GitHub
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Project;
