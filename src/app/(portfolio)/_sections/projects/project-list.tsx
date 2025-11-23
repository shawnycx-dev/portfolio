import Image from "next/image";

import Anchor from "@/components/link";
import Tag from "@/components/tag";
import { RichText } from "@/components/rich-text";

import { getProjects } from "@/dal/projects";

export default async function ProjectsList() {
  const _projects = await getProjects();

  return (
    <section id="projects" className="py-28 space-y-16">
      <div className="space-y-4">
        <h2 className="text-4xl text-balance font-bold">Projects</h2>
        <p className="text-xl font-light">Here are some of my recent work</p>
      </div>
      <div className="space-y-20">
        {_projects?.map( ( project, index ) => {
          console.log( project );
          return (
            <div
              key={`project-item-${project.id}--${index}`}
              className="flex flex-col md:flex-row gap-16 py-8"
            >
              <div className="relative basis-1/2 min-w-[50%] overflow-visible">
                <div className="border-2 border-dashed p-1 rounded-lg sticky top-4 overflow-hidden">
                  <div className="max-h-[400px] overflow-auto">
                    {project?.project_thumbnail && typeof project.project_thumbnail !== "number" && (
                      <Image
                        className="object-cover w-full h-full rounded-md transition-all"
                        src={project.project_thumbnail.url!}
                        width={600}
                        height={400}
                        alt={project.project_thumbnail.alt!}
                        priority={false}
                      />
                    )}
                    {/* Demo image - Local Use Only */}
                    {/* <Image
                      className="object-cover w-full h-full rounded-md transition-all"
                      src={"/images/demo-sites/behivecreators_thumbnail.webp"}
                      width={600}
                      height={400}
                      alt=""
                      priority={false}
                    /> */}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-2">
                  {project.tags?.map( ( tag, index ) => (
                    <Tag key={`project-itemTag__${tag.id}--${index}`}>{tag.tag_name}</Tag>
                  ) )}
                </div>
                <h3 className="text-5xl font-bold">{project.project_name}</h3>
                {project.project_description && <RichText data={project.project_description} />}
                {project?.project_cta_link && ( <Anchor
                  href={project.project_cta_link}
                  className="inline-block py-1 border-b-2 border-dashed  hover:border-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.project_cta_label}
                </Anchor> )}
              </div>
            </div>
          );
        } )}
      </div>
    </section>
  );
}
