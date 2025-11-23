import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    read({ req: { user } }) {
      // Logged in users can see all projects
      if (user) return true;

      // If not logged in, only show published projects
      return {
        _status: {
          equals: "published",
        },
      };
    },
  },
  fields: [
    {
      name: "project_name",
      type: "text",
      required: true,
    },
    {
      name: "project_description",
      type: "richText",
      required: true,
    },
    {
      name: "project_thumbnail",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "project_cta_label",
      type: "text",
    },
    {
      name: "project_cta_link",
      type: "text",
      required: true,
    },
    {
      name: "tags",
      type: "array",
      fields: [
        {
          name: "tag_name",
          type: "text",
        },
      ],
    },
  ],
};
