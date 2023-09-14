import OpenSVG from "@public/open.svg";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({
  screenshot,
  projectLink,
  title,
  company,
  description,
  skills = [],
}: {
  screenshot: string;
  projectLink: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
}) {
  return (
    <div
      className="flex flex-row hover:bg-slate-800/50 cursor-pointer p-4 rounded-md group group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] 
      group-hover:drop-shadow-lg mb-2"
    >
      <div className="mr-5">
        <Image
          src={screenshot}
          className="rounded-xl border border-slate-500/30"
          alt="Project screenshot"
          width={264}
          height={149}
        />
      </div>

      <div className="basis-2/3">
        {projectLink != "/" ? (
          <Link href={projectLink} target="_blank">
            <p
              className={
                "text-slate-300 font-bold mb-2 group-hover:text-teal-300 focus-visible:text-teal-300 motion-reduce:transition-none"
              }
            >
              {title} - {company}{" "}
              <OpenSVG
                className="inline-block mb-1 ml-1 group-hover:fill-teal-300 fill-white"
                width={14}
                height={14}
                alt="Open link icon"
              />
            </p>
          </Link>
        ) : (
          <p
            className={
              "text-slate-300 font-bold mb-2 group-hover:text-teal-300 focus-visible:text-teal-300 motion-reduce:transition-none"
            }
          >
            {title} - {company}{" "}
          </p>
        )}

        <p className="text-slate-400">{description}</p>

        <ul className="flex flex-wrap mt-2" aria-label="Technologies used">
          {skills.map((skill) => (
            <li className="mr-1.5 mt-2">
              <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                {skill}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
