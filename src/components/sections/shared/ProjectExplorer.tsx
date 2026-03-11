"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { Badge } from "@/components/core/Badge";
import { trackEvent } from "@/lib/analytics";
import type { Project } from "@/types/content";

interface ProjectExplorerProps {
  projects: Project[];
}

type SortMode = "featured" | "name" | "status";

export function ProjectExplorer({ projects }: ProjectExplorerProps) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"all" | "ongoing" | "completed">("all");
  const [segment, setSegment] = useState("all");
  const [sort, setSort] = useState<SortMode>("featured");

  const filtered = useMemo(() => {
    const next = projects.filter((project) => {
      const matchesSearch =
        !search ||
        `${project.name} ${project.location} ${project.overview}`.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = status === "all" || project.status === status;
      const matchesSegment = segment === "all" || project.segment === segment;
      return matchesSearch && matchesStatus && matchesSegment;
    });

    return next.sort((left, right) => {
      if (sort === "name") {
        return left.name.localeCompare(right.name);
      }

      if (sort === "status") {
        return left.status.localeCompare(right.status);
      }

      return Number(right.isFeatured) - Number(left.isFeatured);
    });
  }, [projects, search, segment, sort, status]);

  const segments = Array.from(new Set(projects.map((project) => project.segment))).sort();

  return (
    <div className="space-y-8">
      <div className="panel grid gap-4 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <label className="field-wrap">
          <span className="field-label">Search projects</span>
          <input
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              trackEvent("project_filter_used", {
                route: "/projects",
                sectionId: "project-explorer",
              });
            }}
            className="field-input"
            placeholder="Search by project, location, or type"
          />
        </label>
        <label className="field-wrap">
          <span className="field-label">Status</span>
          <select
            value={status}
            onChange={(event) => {
              setStatus(event.target.value as typeof status);
              trackEvent("project_filter_used", {
                route: "/projects",
                sectionId: "project-explorer",
              });
            }}
            className="field-input"
          >
            <option value="all">All status</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        </label>
        <label className="field-wrap">
          <span className="field-label">Segment</span>
          <select
            value={segment}
            onChange={(event) => {
              setSegment(event.target.value);
              trackEvent("project_filter_used", {
                route: "/projects",
                sectionId: "project-explorer",
              });
            }}
            className="field-input"
          >
            <option value="all">All segments</option>
            {segments.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label className="field-wrap">
          <span className="field-label">Sort</span>
          <select
            value={sort}
            onChange={(event) => {
              setSort(event.target.value as SortMode);
              trackEvent("project_filter_used", {
                route: "/projects",
                sectionId: "project-explorer",
              });
            }}
            className="field-input"
          >
            <option value="featured">Featured first</option>
            <option value="name">Name</option>
            <option value="status">Status</option>
          </select>
        </label>
      </div>

      {filtered.length ? (
        <div className="grid gap-6 lg:grid-cols-2">
          {filtered.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="panel block overflow-hidden transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[28px]">
                <Image src={project.thumbnail} alt={project.name} fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Badge>{project.status}</Badge>
                <Badge>{project.segment}</Badge>
                {project.rera ? <Badge>{project.rera}</Badge> : null}
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">{project.name}</h3>
              <p className="mt-2 text-sm text-foreground-muted">{project.location}</p>
              <p className="mt-3 text-sm leading-7 text-foreground-muted">{project.overview}</p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="panel text-center">
          <p className="text-lg font-semibold text-foreground">No projects matched the current filters.</p>
          <p className="mt-3 text-sm text-foreground-muted">
            Reset the filters or move directly to the contact route if you already know the team should respond.
          </p>
          <Link href="/contact" className="btn-base btn-primary mt-5 inline-flex px-5 py-3 text-sm">
            Contact VictoryOne
          </Link>
        </div>
      )}
    </div>
  );
}
