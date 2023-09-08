"use client";

import Image from "next/image";
import ExperienceCard from "@/components/Experience/ExperienceCard";
import { useState } from "react";
import ExperienceHeader from "@/components/Experience/ExperienceHeader";
import ExperienceData from "@/data/Experience.json";
import ExperienceFooter from "@/components/Experience/ExperienceFooter";

export default function Home() {
  const [activeMenu, setactiveMenu] = useState("About");

  return (
    <div className="container mx-auto max-w-8xl">
      <div className="grid grid-cols-2 gap-4">
        <div className="sticky top-0 flex max-h-screen flex-col justify-between py-12">
          <div>
            <p className="text-5xl font-bold text-slate-300 mb-2">
              Riddhesh Mahajan
            </p>
            <p className="text-2xl text-slate-300 mb-4">
              Senior Software Developer
            </p>
            <p className="text-slate-400">
              I build accessible, inclusive products and digital experiences for
              the web.
            </p>

            <nav className="nav hidden lg:block">
              <ul className="mt-16 w-max">
                <li
                  onClick={() => {
                    setactiveMenu("About");
                  }}
                >
                  <a
                    className={`group flex items-center py-3 ${
                      activeMenu == "About" ? "active" : ""
                    }`}
                    href="#about"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-[.active]:w-16 group-hover:bg-slate-200 group-[.active]:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-[.active]:text-slate-200 group-focus-visible:text-slate-200">
                      About
                    </span>
                  </a>
                </li>
                <li
                  onClick={() => {
                    setactiveMenu("Experience");
                  }}
                >
                  <a
                    className={`group flex items-center py-3 ${
                      activeMenu == "Experience" ? "active" : ""
                    }`}
                    href="#experience"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-[.active]:w-16 group-hover:bg-slate-200 group-[.active]:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-[.active]:text-slate-200 group-focus-visible:text-slate-200">
                      Experience
                    </span>
                  </a>
                </li>
                <li
                  onClick={() => {
                    setactiveMenu("Projects");
                  }}
                >
                  <a
                    className={`group flex items-center py-3 ${
                      activeMenu == "Projects" ? "active" : ""
                    }`}
                    href="#projects"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-[.active]:w-16 group-hover:bg-slate-200 group-[.active]:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-[.active]:text-slate-200 group-focus-visible:text-slate-200">
                      Projects
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>Add Socials here</div>
        </div>

        <div className="py-12">
          <p className="text-slate-400 px-4 mb-16" id="about">
            "The moonlight danced on the tranquil lake, casting shimmering
            reflections across the water. In the distance, a lone owl hooted its
            mysterious song, while the leaves rustled in the gentle breeze. The
            aroma of freshly baked bread wafted through the air, tempting
            passersby with its warm embrace. Lost in the moment, I gazed at the
            stars overhead, each one a tiny beacon of hope in the vast, cosmic
            expanse
          </p>

          <div id="experience" className="mb-16">
            <ExperienceHeader
              totalExperience={ExperienceData.totalExperience}
            />

            {ExperienceData.technicalExperience.map((experience) => {
              return <ExperienceCard {...experience} />;
            })}

            <ExperienceFooter resumeLink={ExperienceData.resumeLink} />
          </div>

          <div id="projects">
            {/* <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
