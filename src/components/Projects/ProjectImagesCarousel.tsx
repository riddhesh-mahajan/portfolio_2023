import Image from "next/image";
import React, { useEffect, useState } from "react";
import CloseSVG from "@public/close.svg";

function ProjectImagesCarousel({
  openModal,
  setOpenModal,
  selectedProject,
}: {
  openModal: boolean;
  setOpenModal: Function;
  selectedProject: {
    screenshots: string[];
    projectLink: string;
    title: string;
    company: string;
    description: string;
    skills: string[];
  } | null;
}) {
  const [index, setindex] = useState(0);

  useEffect(() => {
    setindex(0);
  }, [selectedProject]);

  return (
    <div
      className={` ${
        openModal
          ? "relative z-10 duration-200 ease-in opacity-100"
          : "hidden z-10 duration-300 ease-out opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
          <div className="relative overflow-hidden text-left transition-all transform rounded-lg shadow-xl modalBackground sm:my-8 sm:w-full sm:max-w-6xl">
            <div className="w-full mt-3 p-5">
              <div className="w-full flex justify-between">
                <h3 className="mb-2 text-2xl font-semibold text-slate-300">
                  {selectedProject?.title}
                </h3>

                <CloseSVG
                  className="fill-white"
                  onClick={() => {
                    setOpenModal(false);
                  }}
                />
              </div>

              <Image
                src={selectedProject?.screenshots[index] || ""}
                className="rounded-md border border-slate-500/30"
                alt="Project screenshot"
                width={2000}
                height={149}
              />
            </div>
            <div className="w-full px-4 py-8 modalBackground flex justify-center ">
              <div>
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <p
                    onClick={() => {
                      if (selectedProject?.screenshots && index > 0) {
                        setindex(index - 1);
                      }
                    }}
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-indigo-400 hover:text-white focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </p>

                  {selectedProject?.screenshots.map((screenshot, i) => {
                    return (
                      <p
                        onClick={() => {
                          setindex(i);
                        }}
                        aria-current="page"
                        className={
                          i == index
                            ? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            : "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-200 ring-1 ring-inset ring-gray-300 hover:bg-indigo-400 focus:z-20 focus:outline-offset-0"
                        }
                      >
                        {i + 1}
                      </p>
                    );
                  })}

                  <p
                    onClick={() => {
                      if (
                        selectedProject?.screenshots &&
                        index < selectedProject?.screenshots?.length - 1
                      ) {
                        setindex(index + 1);
                      }
                    }}
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-indigo-400 hover:text-white focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </p>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectImagesCarousel;
