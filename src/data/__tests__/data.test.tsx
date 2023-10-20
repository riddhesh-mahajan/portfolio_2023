import { test, expect, describe } from "vitest";
import { render, within } from "@testing-library/react";
import ExperienceData from "../Experience.json";
import ProjectsData from "../Projects.json";
import SocialsData from "../Socials.json";

describe.concurrent("Validate data", () => {
  // Experience data tests
  test("Is experience data a valid object", () => {
    expect(typeof ExperienceData).toBe("object");
  });

  test("Is experience data has all valid keys", () => {
    [
      "resumeLink",
      "totalExperience",
      "experienceStartDate",
      "technicalExperience",
    ].forEach((key) => {
      expect(Object.keys(ExperienceData).includes(key)).toBe(true);
    });
  });

  // Project data tests
  test("Is project data a valid object", () => {
    expect(typeof ProjectsData).toBe("object");
  });

  test("Is project data has all valid keys", () => {
    ["projects"].forEach((key) => {
      expect(Object.keys(ProjectsData).includes(key)).toBe(true);
    });
  });

  // Socials data tests
  test("Is social data a valid object", () => {
    expect(typeof SocialsData).toBe("object");
  });

  test("Is social data has all valid keys", () => {
    ["Socials"].forEach((key) => {
      expect(Object.keys(SocialsData).includes(key)).toBe(true);
    });
  });
});
