"use server";

import { insertContactForm } from "@/drizzle/queries/contact-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export async function createNewContactForm(prevState: any, formData: FormData) {
  const formObjectData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const parse = schema.safeParse(formObjectData);

  if (!parse.success) {
    return {
      ...prevState,
      zodError: parse.error.flatten().fieldErrors,
      message: "Invalid form data",
      data: {
        ...prevState.data,
        ...formObjectData,
      }
    };
  }

  const { name, email, message } = parse.data;

  try {
    await insertContactForm({ name, email, message });
    return { ...prevState, message: "Message sent successfully!", zodError: null };
  } catch (error) {
    return { ...prevState, message: "Failed to send message", zodError: null, data: { name, email, message } };
  }
}