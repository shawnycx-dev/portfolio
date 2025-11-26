"use server";

import { payload } from "@/lib/payload";

export const createNewContactMessageAction = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    return payload.create({
      collection: "contact",
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};
