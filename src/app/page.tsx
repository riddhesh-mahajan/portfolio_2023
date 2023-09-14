"use client";

import ContactHeader from "@/components/Contact/ContactHeader";
import ContactMe from "@/components/Contact/ContactMe";
import ExperienceCard from "@/components/Experience/ExperienceCard";
import ExperienceFooter from "@/components/Experience/ExperienceFooter";
import ExperienceHeader from "@/components/Experience/ExperienceHeader";
import ProjectCard from "@/components/Projects/ProjectCard";
import ProjectHeader from "@/components/Projects/ProjectHeader";
import ExperienceData from "@/data/Experience.json";
import ProjectsData from "@/data/Projects.json";
import SocialsData from "@/data/Socials.json";
import { useState } from "react";
import TimeSVG from "@public/time.svg";
import BoltSVG from "@public/bolt.svg";
import LinkedinSVG from "@public/socials/linkedin.svg";
import TwitterSVG from "@public/socials/twitter.svg";
import GithubSVG from "@public/socials/github.svg";
import Link from "next/link";

export default function Home() {
  const [activeMenu, setactiveMenu] = useState("About");

  return (
    <div className="container mx-auto max-w-8xl">
      <div className="grid grid-cols-2 gap-4">
        <div className="sticky top-0 flex flex-col justify-between max-h-screen py-12">
          <div>
            <p className="mb-2 text-5xl font-bold text-slate-300">
              Riddhesh Mahajan
            </p>
            <p className="mb-4 text-2xl text-slate-300">
              Senior Software Developer
            </p>
            <ul className="flex flex-wrap mt-2" aria-label="Technologies used">
              <li className="mr-1.5 mt-2">
                <div className="flex items-center px-4 py-2 text-base font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                  <BoltSVG
                    className="inline-block mr-1 fill-teal-300"
                    width={18}
                    height={18}
                    alt="hello icon"
                  />
                  <div className="mb-0.5">Available</div>
                </div>
              </li>

              <li className="mr-1.5 mt-2">
                <div className="flex items-center px-4 py-2 text-base font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                  <TimeSVG
                    className="inline-block mr-1 fill-teal-300"
                    width={18}
                    height={18}
                    alt="hello icon"
                  />
                  <div className="mb-0.5">Any Timezone</div>
                </div>
              </li>
            </ul>

            <nav className="hidden nav lg:block">
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
                <li
                  onClick={() => {
                    setactiveMenu("contact");
                  }}
                >
                  <a
                    className={`group flex items-center py-3 ${
                      activeMenu == "contact" ? "active" : ""
                    }`}
                    href="#contact"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-[.active]:w-16 group-hover:bg-slate-200 group-[.active]:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-[.active]:text-slate-200 group-focus-visible:text-slate-200">
                      Contact
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <Link
              href={SocialsData.Socials.github}
              target="_blank"
              aria-label="Github"
            >
              <GithubSVG
                className="inline-block mr-4 fill-slate-400 cursor-pointer"
                width={32}
                height={32}
                alt="Github icon"
              />
            </Link>

            <Link
              href={SocialsData.Socials.linkedin}
              target="_blank"
              aria-label="Linkedin"
            >
              <LinkedinSVG
                className="inline-block mr-4 fill-slate-400 cursor-pointer"
                width={28}
                height={28}
                alt="Linkedin icon"
              />
            </Link>

            <Link
              href={SocialsData.Socials.twitter}
              target="_blank"
              aria-label="Twitter"
            >
              <TwitterSVG
                className="inline-block mr-4 fill-slate-400 cursor-pointer"
                width={28}
                height={28}
                alt="Twitter icon"
              />
            </Link>
          </div>
        </div>

        <div className="py-12">
          <div
            className="px-4 mb-16 text-slate-400 scroll-mt-10 snap-start"
            id="about"
          >
            <p className="mb-3">
              Back in 2018, I decided to try my hand at various technologies
              like React, Android, Django, Node etc. Fast-forward to today, and
              I’ve had the privilege of building mvps for multiple startups, and
              complex products for well established companies.
            </p>

            <p>
              My main focus these days is building products and leading
              projects. In my free time I am learning new technologies like
              nextjs, tailwindcss, typescript etc.
            </p>
          </div>

          <div id="experience" className="mb-16 scroll-mt-10 snap-start">
            <ExperienceHeader
              experienceStartDate={ExperienceData.experienceStartDate}
            />

            {ExperienceData.technicalExperience.map((experience, index) => {
              return <ExperienceCard {...experience} key={index} />;
            })}

            <ExperienceFooter resumeLink={ExperienceData.resumeLink} />
          </div>

          <div id="projects" className="mb-16 scroll-mt-10 snap-start">
            <ProjectHeader />

            {ProjectsData.projects.map((project, index) => {
              return <ProjectCard {...project} key={index} />;
            })}
          </div>

          <div id="contact" className="mb-16 scroll-mt-10 snap-start">
            <ContactHeader />
            <ContactMe />
          </div>
        </div>
      </div>
    </div>
  );
}
