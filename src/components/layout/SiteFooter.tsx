import Image from "next/image";
import Link from "next/link";

import { businesses } from "@/content/businesses";
import { globalSettings } from "@/content/settings";
import { projects } from "@/content/projects";

export function SiteFooter() {
  const featuredProjects = projects.filter((project) => project.isFeatured).slice(0, 4);

  return (
    <footer className="border-t border-border bg-secondary py-14 text-white">
      <div className="site-container grid gap-10 md:grid-cols-2 xl:grid-cols-5">
        <div className="xl:col-span-2">
          <Image
            src="/legacy/theme-images/logo.png"
            alt="VictoryOne"
            width={186}
            height={48}
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
            VictoryOne brings together furnished homes, commercial opportunities, and direct access to project and contact information.
          </p>
          <p className="mt-4 text-sm text-white/64">
            In-house construction, furnished living, and confidence in delivery remain at the center of the VictoryOne story.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/72">Business</h3>
          <ul className="mt-4 grid gap-3 text-sm text-white/72">
            {businesses.map((business) => (
              <li key={business.id}>
                <Link href={`/businesses/${business.slug}`} className="hover:text-white">
                  {business.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/72">Projects</h3>
          <ul className="mt-4 grid gap-3 text-sm text-white/72">
            {featuredProjects.map((project) => (
              <li key={project.id}>
                <Link href={`/projects/${project.slug}`} className="hover:text-white">
                  {project.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/72">Contact</h3>
          <ul className="mt-4 grid gap-3 text-sm text-white/72">
            <li>{globalSettings.email}</li>
            {globalSettings.phones.map((phone) => (
              <li key={phone}>{phone}</li>
            ))}
            {globalSettings.offices.slice(0, 2).map((office) => (
              <li key={office.id}>{office.address}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="site-container mt-10 flex flex-col gap-4 border-t border-white/12 pt-6 text-sm text-white/64 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-4">
          {globalSettings.legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
        <p>Browse projects, compare options, and connect with the team directly.</p>
      </div>
    </footer>
  );
}
