"use server";

import { insertContactForm } from "@/drizzle/queries/contact-form";
import { sendEmail } from "@/lib/resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export async function createNewContactForm(prevState: any, formData: FormData) {
  const isPotentialSpam = formData.get("gysb-credentials") !== "1";

  if (isPotentialSpam) {
    console.warn("Potential spam detected");
    // Mock a successful submission
    return {
      ...prevState,
      zodError: null,
      message: "Message sent successfully!",
      data: {
        name: "",
        email: "",
        message: "",
      },
    };
  }

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
      },
    };
  }

  const { name, email, message } = parse.data;

  try {
    const response = await insertContactForm({ name, email, message });

    if (response.length > 0) {
      await sendEmail({
        from: "contact-me@shawnycx.com",
        to: ["shawnycx.dev@gmail.com"],
        subject: `[Incoming Form Submission] ${name} has sent you a message`,
        text: `${name} <${email}> has sent you a message saying: \n\n${message}`,
      });
    }

    return {
      ...prevState,
      message: "Message sent successfully!",
      zodError: null,
      data: { name: "", email: "", message: "" },
    };
  } catch (error) {
    return {
      ...prevState,
      message: "Failed to send message",
      zodError: null,
      data: { name, email, message },
    };
  }
}
