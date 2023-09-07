import React from "react";

function ExperienceCard() {
  return (
    <>
      <div
        className="flex flex-row hover:bg-slate-800/50 cursor-pointer p-4 rounded-md group group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] 
      group-hover:drop-shadow-lg"
      >
        <p className="text-slate-400 mb-2 basis-1/4">2019 — Dec 2017</p>

        <div className="basis-2/3">
          <p className="text-slate-300 font-bold mb-2 group-hover:text-teal-300 focus-visible:text-teal-300">
            Senior Software Developer - Flamecloud
          </p>

          <p className="text-slate-400">
            The moonlight danced on the tranquil lake, casting shimmering
            reflections across the water. In the distance, a lone owl hooted its
            mysterious song, while the leaves rustled in the gentle breeze. The
            aroma of freshly baked bread wafted through the air, tempting
            passersby with its warm embrace. Lost in the moment, I gazed at the
            stars overhead, each one a tiny beacon of hope in the vast, cosmic
            expanse
          </p>

          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                React
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                React Native
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                SCSS
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                WordPress
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                JavaScript
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                TypeScript
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                PHP
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ExperienceCard;
