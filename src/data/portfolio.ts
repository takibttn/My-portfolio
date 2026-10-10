import rawProfile from "../../content/profile.json";
import rawSocial from "../../content/social.json";
import rawProjects from "../../content/projects.json";
import rawEducation from "../../content/education.json";
import rawExperience from "../../content/experience.json";
import rawInternships from "../../content/internships.json";
import rawSkills from "../../content/skills.json";
import type {
  EducationItem,
  ExperienceItem,
  Profile,
  Project,
  ProjectTheme,
  RawProject,
  SkillGroup,
  SocialLink,
} from "./types";

// ---------------------------------------------------------------------------
// This file is the only bridge between the editable JSON in `content/` and the
// React components. To add or change what shows on the site, edit the JSON
// files — you should not need to touch this file or any component.
//
//   content/profile.json     -> name, contact, availability
//   content/social.json      -> social links
//   content/projects.json    -> project cards (number is generated for you)
//   content/experience.json  -> work experience entries
//   content/education.json   -> education entries
//   content/skills.json      -> skill groups
// ---------------------------------------------------------------------------

const themeCycle: ProjectTheme[] = ["moss", "sand"];

function isTheme(value: string | undefined): value is ProjectTheme {
  return value === "moss" || value === "sand";
}

export const profile: Profile = rawProfile as Profile;

export const socialLinks: SocialLink[] = (rawSocial as SocialLink[])
  .filter((link) => Boolean(link?.label && link?.href))
  .map((link) => ({ label: link.label, href: link.href }));

export const projects: Project[] = (rawProjects as RawProject[])
  .filter((project) => Boolean(project?.slug && project?.title))
  .map((project, index) => ({
    slug: project.slug,
    // Numbering is derived from order, so you never have to manage it yourself.
    number: String(index + 1).padStart(2, "0"),
    category: project.category ?? "",
    title: project.title,
    description: project.description ?? "",
    stack: project.stack ?? [],
    href: project.href ?? "",
    theme: isTheme(project.theme)
      ? project.theme
      : themeCycle[index % themeCycle.length],
  }));

export const education: EducationItem[] = (rawEducation as EducationItem[])
  .filter((item) => Boolean(item?.degree))
  .map((item) => ({
    period: item.period ?? "",
    degree: item.degree,
    institution: item.institution ?? "",
  }));

export const experience: ExperienceItem[] = (rawExperience as ExperienceItem[])
  .filter((item) => Boolean(item?.role))
  .map((item) => ({
    period: item.period ?? "",
    role: item.role,
    organization: item.organization ?? "",
    description: item.description,
    href: item.href,
  }));

export const internships: ExperienceItem[] = (rawInternships as ExperienceItem[])
  .filter((item) => Boolean(item?.role))
  .map((item) => ({
    period: item.period ?? "",
    role: item.role,
    organization: item.organization ?? "",
    description: item.description,
    href: item.href,
  }));

export const skillGroups: SkillGroup[] = (rawSkills as SkillGroup[])
  .filter((group) => Boolean(group?.title))
  .map((group) => ({ title: group.title, skills: group.skills ?? [] }));
