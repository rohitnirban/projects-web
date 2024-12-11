"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { SearchInput } from "@/components/search-input";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)));

  const filteredProjects = projects.filter(
    (project) =>
      (project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedTags.length === 0 || selectedTags.every((tag) => project.tags.includes(tag)))
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">My Project Showcase</h1>
        <p className="text-lg text-gray-600 mb-6">
          Explore my latest projects and creations
        </p>
        <div className="max-w-lg mx-auto">
          <SearchInput onSearch={setSearchQuery} />
        </div>
      </section>

      {/* Tag Filters */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Filter by Tags</h2>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className={`cursor-pointer transition-colors ${
                selectedTags.includes(tag)
                  ? "bg-blue-100 text-blue-800 border-blue-300"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </section>

      {/* Project Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No projects found. Try adjusting your search or filters.
          </p>
        )}
      </section>
    </main>
  );
}
