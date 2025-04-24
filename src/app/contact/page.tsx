"use client";

import { useActionState } from "react";
import { createNewContactForm } from "./actions";
import { useFormStatus } from "react-dom";
import { cn } from "@/utils/cn";

const initialState = {
  message: "",
  data: {
    name: "",
    email: "",
    message: "",
  },
  zodError: null,
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className="bg-yellow-400 hover:bg-yellow-300 transition-colors text-gray-950 px-4 py-2 rounded-md cursor-pointer">
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

export default function Page() {
  const [formState, formAction] = useActionState(createNewContactForm, initialState);

  const { name, email, message } = formState.data || {};

  return (
    <div className="py-20 space-y-4">
      <div className="space-y-2">
        <h2 className="text-4xl text-balance font-bold">Let&apos;s get in touch!</h2>
        <p className="max-w-[80ch] font-montserrat font-light tracking-wide text-muted">
          Whether you have a question about my work, want to collaborate, or
          just want to say hi, I&apos;d love to hear from you! Fill out the form
          below and I&apos;ll try my very best to get back to you within 3 business
          days
        </p>
      </div>

      <div className="flex flex-row">
        <form action={formAction} className="basis-1/2">
          <div className="space-y-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="name-field">Name</label>
              <input
                id="name-field"
                type="text"
                className={cn("border-2 border-dashed border-yellow-400/70 focus:border-yellow-400 focus:border-solid focus:outline-0 p-2 bg-gray-950", formState?.zodError?.name && "border-red-400/70 focus:border-red-400")}
                placeholder="Name"
                name="name"
                defaultValue={name}
              />
              {formState?.zodError?.name && <p className="text-red-400/70">{formState?.zodError?.name}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email-field">Email</label>
              <input
                id="email-field"
                type="email"
                className={cn("border-2 border-dashed border-yellow-400/70 focus:border-yellow-400 focus:border-solid focus:outline-0 p-2 bg-gray-950", formState?.zodError?.email && "border-red-400/70 focus:border-red-400")}
                placeholder="Email"
                name="email"
                defaultValue={email}
              />
              {formState?.zodError?.email && <p className="text-red-400/70">{formState?.zodError?.email}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message-field">Message</label>
              <textarea
                id="message-field"
                className={cn("border-2 border-dashed border-yellow-400/70 focus:border-yellow-400 focus:border-solid focus:outline-0 p-2 bg-gray-950", formState?.zodError?.message && "border-red-400/70 focus:border-red-400")}
                placeholder="Message"
                name="message"
                rows={5}
                defaultValue={message}
              />
              {formState?.zodError?.message && <p className="text-red-400/70">{formState?.zodError?.message}</p>}
            </div>
            <SubmitButton />
            <p aria-live="polite">{formState?.message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
