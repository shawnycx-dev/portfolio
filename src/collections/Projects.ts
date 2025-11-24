import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    read( { req: { user } } ) {
      // Logged in users can see all projects
      if ( user ) return true;

      // If not logged in, only show published projects
      return {
        _status: {
          equals: "published",
        },
      };
    },
  },
  admin:{
    useAsTitle: "project_name",
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
    },
    {
      name: "Link",
      type: "group",
      fields: [{
        name: "label",
        type: "text",
        required: true,
      }, {
        name: "href",
        type: "text",
        required: true,
        validate: ( value: any ) => {
          return ( value.startsWith( 'http://' ) || value.startsWith( 'https://' ) ) || 'Link must start with http:// or https://';
        },
      }],
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "technologies",
      hasMany: true,
    }
  ],
};
