import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="w-full max-w-md shadow-lg border border-gray-200 rounded-lg overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <p className="text-sm text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <Button asChild className="w-full">
          {project.link === "" ? (
            <p className="bg-gray-300 text-gray-500 text-center py-2 rounded cursor-not-allowed">
              Under Maintenance
            </p>
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
            >
              View Project
            </a>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
