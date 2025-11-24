import { CollectionConfig } from "payload";

export const Resume: CollectionConfig = {
  slug: "resume",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [{
    name: "title",
    type: "text",
    required: true,
  },
  {
    name: "file",
    type: "upload",
    relationTo: "media",
    required: true,
  }],
  versions: {
    drafts: true,
  }
};