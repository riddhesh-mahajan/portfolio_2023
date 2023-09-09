function ExperienceCard({
  joining,
  leaving,
  role,
  company,
  description,
  skills = [],
}: {
  joining: string;
  leaving: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
}) {
  return (
    <div
      className="flex flex-row hover:bg-slate-800/50 cursor-pointer p-4 rounded-md group group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] 
      group-hover:drop-shadow-lg mb-2"
    >
      <p className="mb-2 text-slate-400 basis-1/4">
        {joining} — {leaving}
      </p>

      <div className="basis-2/3">
        <p className="mb-2 font-bold text-slate-300 group-hover:text-teal-300 focus-visible:text-teal-300">
          {role} - {company}
        </p>

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

export default ExperienceCard;
