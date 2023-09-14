import moment from "moment";

function ExperienceHeader({
  experienceStartDate,
}: {
  experienceStartDate: string;
}) {
  return (
    <p className="mb-4 text-3xl text-slate-300 ms-4">
      Experience -{" "}
      {Math.floor(moment().diff(experienceStartDate, "years", true))} Years
    </p>
  );
}

export default ExperienceHeader;
