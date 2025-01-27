"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Girls", 0.5);

  // Define iframe sources and state for the current iframe
  const iframeSources = [
    "https://giphy.com/embed/PhTBQewUN563kO28b3",
    "https://giphy.com/embed/f1ZxcYbOjLjTG",
    "https://giphy.com/embed/IlXpAOs4VmekAIdlvy",
    "https://giphy.com/embed/jTo1LpDVjZZrCFKXv4",
    "https://giphy.com/embed/UhE1jItlh4DHPOX4vk",
    "https://giphy.com/embed/qcV5H0oMyjMpv48qP4",
    "https://giphy.com/embed/svbEXm7eGdYhEPITfT",
    "https://giphy.com/embed/VnJivg9ZDhem6Y2ZPf",
  ];
  const [currentSrc, setCurrentSrc] = useState(iframeSources[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * iframeSources.length);
      setCurrentSrc(iframeSources[randomIndex]);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [iframeSources]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-2">
      {/* Rotate phone message with embedded Giphy GIF */}
      <div className="flex flex-col items-center justify-center mb-4">
        <span className="text-lg font-semibold text-center mt-2 text-white">
          Trusted by All, Loved 💖 by Many – The Only Honest Ethiopian Agency💯💯
        </span>

        {/* Random iframe with shine animation */}
        <div className="relative flex items-center justify-center mt-4">
          <iframe
            src={currentSrc}
            width="190"
            height="110"
            className="relative z-10 rounded-lg border-none filter grayscale-[30%] brightness-90 contrast-125 shadow-md pointer-events-none"
            frameBorder="0"
            allowFullScreen
          ></iframe>

          <div className="absolute inset-0 rounded-lg border-4 border-transparent animate-shine"></div>
        </div>

        <style jsx>{`
          @layer utilities {
            @keyframes shine {
              0% {
                box-shadow: 0 0 8px rgba(255, 255, 255, 0.3),
                  0 0 15px rgba(173, 216, 230, 0.3),
                  0 0 25px rgba(0, 191, 255, 0.2),
                  0 0 35px rgba(30, 144, 255, 0.15);
                border-color: rgba(255, 255, 255, 0.2);
              }
              50% {
                box-shadow: 0 0 15px rgba(255, 255, 255, 0.7),
                  0 0 30px rgba(173, 216, 230, 0.6),
                  0 0 45px rgba(0, 191, 255, 0.5),
                  0 0 60px rgba(30, 144, 255, 0.4);
                border-color: rgba(30, 144, 255, 0.5);
              }
              100% {
                box-shadow: 0 0 8px rgba(255, 255, 255, 0.3),
                  0 0 15px rgba(173, 216, 230, 0.3),
                  0 0 25px rgba(0, 191, 255, 0.2),
                  0 0 35px rgba(30, 144, 255, 0.15);
                border-color: rgba(255, 255, 255, 0.2);
              }
            }
            .animate-shine {
              animation: shine 4s infinite ease-in-out;
            }
          }
        `}</style>

        <span className="text-lg font-semibold text-center mt-2 text-white">
          በብዙ ደምበኞች የተወደደ የታመነ Service ከእኛ ጋር <b>🫂</b>
        </span>
      </div>

      <div className="mt-8">
        <SectionHeading>Choose girls</SectionHeading>
      </div>

      <div className="flex flex-wrap justify-center gap-1 w-full mx-auto">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
