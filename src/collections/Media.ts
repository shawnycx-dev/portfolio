import type { CollectionConfig } from "payload";
import sharp from "sharp";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  upload: {
    formatOptions: {
      format: sharp.format.webp,
      options: {
        quality: 80,
      },
    },
  },
};
