import React from "react";

function ExperienceHeader({ totalExperience }: { totalExperience: string }) {
  return (
    <p className="text-3xl text-slate-300 mb-4 ms-4">
      Experience - {totalExperience}
    </p>
  );
}

export default ExperienceHeader;
