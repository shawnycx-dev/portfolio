"use server";

import { Resend, type CreateEmailOptions, type CreateEmailRequestOptions, type CreateEmailResponseSuccess, type ErrorResponse } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
  payload: CreateEmailOptions,
  options?: CreateEmailRequestOptions
): Promise<CreateEmailResponseSuccess | ErrorResponse | null> => {
  const { data, error } = await resend.emails.send(payload, options);

  if (error) {
    console.error(error);
    return error;
  }

  return data;
};