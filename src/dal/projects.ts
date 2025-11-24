import { payload } from "@/lib/payload";

export const getProjects = async () => {
  const results = await payload.find( {
    collection: "projects",
    select: {
      project_name: true,
      project_description: true,
      project_thumbnail: true,
      Link: true,
      createdAt: true,
      tags: true,
    }
  });

  return results.docs;
};
