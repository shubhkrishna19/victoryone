import { businesses } from "@/content/businesses";
import { projects } from "@/content/projects";

export function getBusinessBySlug(slug: string) {
  return businesses.find((business) => business.slug === slug);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const currentProjects = projects.filter((project) => project.status === "ongoing");
export const pastProjects = projects.filter((project) => project.status === "completed");
