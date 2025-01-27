"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const router = useRouter();

  const handlePaymentClick = () => {
    router.push("/#checkout"); // Navigate to the Payment page
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden relative  hover:bg-gray-200 transition  dark:text-white dark:bg-white/10 dark:hover:bg-white/20 w-full sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-5xl font-semibold">{title}</h3>
          <p className="mt-7 ml-0 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-21 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* Proceed to Payment Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <button
              onClick={handlePaymentClick}
              className="mt-5 px-4 py-2 bg-color-#9c27b0 text-white rounded-md"
              style={{
                backgroundColor: "#9c27b0",
                padding: "12px",
                borderRadius: "12px",
                color: "white",
                fontWeight: "bold",
                fontSize: "16px",
                boxShadow: "0 6px 20px rgba(156, 39, 176, 0.5)",
                transition: "all 0.3s ease",
                width: "100%", // Full width to wrap the content
              }}
            >
              Proceed to Payment
            </button>
          </motion.div>
        </div>

        <div className=" w-full sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] ">
          <Image
            src={imageUrl}
            alt="project image"
            quality={95}
            className="object-cover rounded-t-lg shadow-2xl transition 
              group-hover:scale-[1.04] 
              group-hover:-translate-x-3 
              group-hover:translate-y-3 
              group-hover:-rotate-2
              group-even:group-hover:translate-x-3
              group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-2 "
          />
        </div>
      </section>
    </motion.div>
  );
}
