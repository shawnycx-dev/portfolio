import { payload } from "@/lib/payload";

export const getResumeFile = async () => {
  const results = await payload.find({
    collection: "resume",
    select: {
      title: true,
      file: true,
    },
    where: {
      _status: {
        equals: "published",
      },
    },
  });

  return results.docs[0];
};
