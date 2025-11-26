import { CollectionConfig } from "payload";

export const Contact: CollectionConfig = {
  slug: "contact",
  access: {
    read: ({ req: { user } }) => {
      if (user) return true;
      return false;
    },
    create: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "message",
      type: "text",
    },
  ],
  // hooks: {
  //   afterChange: [
  //     async ({ data, operation, req }) => {
  //       if (operation !== "create") return;

  //       await req.payload.sendEmail({
  //         to: process.env.SMTP_USER!,
  //         subject: `[${process.env.NEXT_PUBLIC_HOSTNAME}] New message received!`,
  //         text: `A new message has been received from ${data.name} <${data.email}>. The message is as follows: ${data.message}`,
  //       });
  //     },
  //   ],
  // },
};
