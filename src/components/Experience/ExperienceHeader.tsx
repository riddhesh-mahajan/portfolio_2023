function ExperienceHeader({ totalExperience }: { totalExperience: string }) {
  return (
    <p className="mb-4 text-3xl text-slate-300 ms-4">
      Experience - {totalExperience}
    </p>
  );
}

export default ExperienceHeader;
