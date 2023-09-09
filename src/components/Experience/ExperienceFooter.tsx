import Image from "next/image";
import Link from "next/link";

function ExperienceFooter({ resumeLink }: { resumeLink: string }) {
  return (
    <div className="ms-3 group">
      <Link href={resumeLink}>
        <span className="pb-px transition group-hover:border-b group-hover:border-teal-300 motion-reduce:transition-none">
          View Full Resume
        </span>
      </Link>
      <Image
        className="inline-block w-4 h-4 ml-1 transition-transform -translate-y-px shrink-0 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
        src="/rightArrow.svg"
        alt="view full resume"
        width={20}
        height={20}
      />
    </div>
  );
}

export default ExperienceFooter;
