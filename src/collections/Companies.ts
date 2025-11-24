import type { CollectionConfig } from 'payload';

export const Companies: CollectionConfig = {
  slug: 'companies',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "company_name",
      type: "text",
      required: true,
    },
    {
      name: "company_logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "company_website",
      type: "text",
    }
  ],
};