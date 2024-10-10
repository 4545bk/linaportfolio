"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import styles from './Styles/Projects.module.css';

 
export default function Projects() {
  const { ref } = useSectionInView("Girls", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-2">
      {/* Rotate phone message with embedded Giphy GIF */}
      <div className="flex flex-col items-center justify-center mb-4">
        <span className="text-lg font-semibold text-center mt-2 text-white">
          Rotate Your phone for better Experience  
        </span>

        <div className="relative flex items-center justify-center">
          <iframe
            src="https://giphy.com/embed/ORjDoknEwfqpHPUHRt"
            width="100"
            height="100"
            style={{
              border: 'none',
              filter: 'grayscale(50%) brightness(0.8) contrast(120%)',
            }}
            frameBorder="0"
            className="giphy-embed relative z-10"
            allowFullScreen
          ></iframe>

          <div className={`${styles.animateShine} absolute inset-0 border-4 border-transparent rounded-full`}></div>
        </div>

        <span className="text-lg font-semibold text-center mt-2 text-white">
          ፎቶ ለማየት ስልኮትን አግድም ይያዙ
        </span>
      </div>

      <div className="mt-8">
        <SectionHeading>Choose girls</SectionHeading>
      </div>

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
