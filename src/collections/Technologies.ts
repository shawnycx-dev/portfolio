import type { CollectionConfig } from 'payload';

export const Technologies: CollectionConfig = {
  slug: 'technologies',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'technology_name',
  },
  fields: [{
    name: "technology_name",
    type: "text",
    required: true,
  }, {
    name: "technology_color",
    type: "text",
  }],
};