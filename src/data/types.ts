// Content types. The raw types describe what you write in the JSON files under
// `content/`; the resolved types add fields that are derived at load time.

export type ProjectTheme = "moss" | "sand";

export interface Profile {
  name: string;
  initials: string;
  role: string;
  focus: string;
  location: string;
  email: string;
  availability: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

/** What you write in `content/projects.json`. `number` is generated for you. */
export interface RawProject {
  slug: string;
  category?: string;
  title: string;
  description?: string;
  stack?: string[];
  href?: string;
  /** Optional. Defaults to an alternating moss/sand scheme when omitted. */
  theme?: string;
}

/** A project after the loader has filled in derived fields. */
export interface Project {
  slug: string;
  number: string;
  category: string;
  title: string;
  description: string;
  stack: string[];
  href: string;
  theme: ProjectTheme;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
}

/** What you write in `content/experience.json` for a work-experience entry. */
export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description?: string;
  href?: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}
