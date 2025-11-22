"use server";

export async function createNewContactForm(prevState: any, formData: FormData) {
  const isPotentialSpam = formData.get("gysb-credentials") !== "1";
  if (isPotentialSpam) console.warn("Potential spam detected");
  return {
    ...prevState,
    message: "Message sent successfully!",
    zodError: null,
    data: { name: "", email: "", message: "" },
  };
}
