import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    read() {
      return true;
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
    },
    {
      name: "project_thumbnail",
      type: "upload",
      relationTo: "media",
      required: false
    },
    {
      name: "project_cta_label",
      type: "text",
    },
    {
      name: "project_cta_link",
      type: "text",
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
