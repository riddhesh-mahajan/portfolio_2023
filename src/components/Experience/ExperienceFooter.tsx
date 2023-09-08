import React from "react";
import Link from "next/link";
import Image from "next/image";

function ExperienceFooter({ resumeLink }: { resumeLink: string }) {
  return (
    <div className="ms-3 group">
      <Link href={resumeLink}>
        <span className="group-hover:border-b pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
          View Full Resume
        </span>
      </Link>
      <Image
        className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
        src="/rightArrow.svg"
        alt="view full resume"
        width={20}
        height={20}
      />
    </div>
  );
}

export default ExperienceFooter;
