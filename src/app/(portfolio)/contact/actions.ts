"use server";

import { createNewContactMessageAction } from "@/dal/contact";

export async function createNewContactForm(prevState: any, formData: FormData) {
  const isPotentialSpam = formData.get("gysb-credentials") !== "1";
  if (isPotentialSpam) console.warn("Potential spam detected");

  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  if (!data.name) {
    return {
      ...prevState,
      zodError: {
        name: "Name is required",
      },
      data,
    };
  }

  if (!data.email) {
    return {
      ...prevState,
      zodError: {
        email: "Email is required",
      },
      data,
    };
  }

  if (!data.message) {
    return {
      ...prevState,
      zodError: {
        message: "Message is required",
      },
      data,
    };
  }

  const result = await createNewContactMessageAction(data);

  if (!result) {
    return {
      ...prevState,
      message: "Failed to send message",
      zodError: null,
      data,
    };
  }

  return {
    ...prevState,
    message: "Message sent successfully!",
    zodError: null,
    data: { name: "", email: "", message: "" },
  };
}
