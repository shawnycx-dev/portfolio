import Anchor from "@/components/link";
import Image from "next/image";
import Tag from "../tag";

import projects from "./data.json";

const renderDesription = (description: string | string[]) => {
  return typeof description === "string" ? (
    <p className="font-light text-lg text-gray-300">{description}</p>
  ) : (
    <>
      {description.map((desc, index) => (
        <p key={index} className="font-light text-lg text-gray-300">
          {desc}
        </p>
      ))}
    </>
  );
};

export default function ProjectsList() {
  return (
    <section id="projects" className="py-28 space-y-16">
      <div className="space-y-4">
        <h2 className="text-4xl text-balance font-bold">Projects</h2>
        <p className="text-xl font-light">Here are some of my recent work</p>
      </div>
      <div className="space-y-20">
        {projects?.map((project, index) => {
          return (
            <div
              key={`project-item-${project.project_link}--${index}`}
              className="flex flex-col md:flex-row gap-16 py-8"
            >
              <div className="relative basis-1/2 min-w-[50%] overflow-visible">
                <div className="border-2 border-dashed p-1 rounded-lg sticky top-4 overflow-hidden">
                  <div className="max-h-[400px] overflow-auto">
                    <Image
                      className="object-cover w-full h-full rounded-md transition-all"
                      src={project.project_thumbnail.src}
                      width={600}
                      height={400}
                      alt={project.project_thumbnail.alt}
                      priority={false}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-2">
                  {project.tags?.map((tag, index) => (
                    <Tag key={`project-itemTag__${tag}--${index}`}>{tag}</Tag>
                  ))}
                </div>
                <h3 className="text-5xl font-bold">{project.project_name}</h3>
                {renderDesription(project.project_description)}
                <Anchor
                  href={project.project_link.href}
                  className="inline-block py-1 border-b-2 border-dashed  hover:border-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.project_link.label}
                </Anchor>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
