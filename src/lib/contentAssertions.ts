import { businesses } from "@/content/businesses";
import { projects } from "@/content/projects";

export function validateContentIntegrity() {
  const businessIds = new Set(businesses.map((business) => business.id));
  const projectIds = new Set(projects.map((project) => project.id));

  for (const project of projects) {
    if (!businessIds.has(project.businessId)) {
      throw new Error(`Project ${project.id} references missing business ${project.businessId}.`);
    }
  }

  for (const business of businesses) {
    for (const featuredProject of business.featuredProjects) {
      if (!projectIds.has(featuredProject)) {
        throw new Error(`Business ${business.id} references missing featured project ${featuredProject}.`);
      }
    }
  }
}
