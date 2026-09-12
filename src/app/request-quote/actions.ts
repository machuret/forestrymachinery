"use server";

export interface QuoteState {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
}

const REQUIRED: Array<[string, string]> = [
  ["name", "Tell us who to reply to."],
  ["email", "We need an email address to send the shortlist to."],
  ["carrierWeight", "Operating weight is the first of the three numbers."],
];

export async function submitQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  const values = Object.fromEntries(formData.entries()) as Record<string, string>;

  const fieldErrors: Record<string, string> = {};
  for (const [field, message] of REQUIRED) {
    if (!values[field]?.trim()) fieldErrors[field] = message;
  }
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    fieldErrors.email = "That email address does not look right.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Check the highlighted fields.", fieldErrors };
  }

  // Delivery is intentionally not wired up here. Point this at the CRM, an
  // email service or a webhook and keep the validation above.
  console.info("[quote-request]", {
    name: values.name,
    email: values.email,
    company: values.company,
    carrierMake: values.carrierMake,
    carrierWeight: values.carrierWeight,
    flow: values.flow,
    pressure: values.pressure,
    category: values.category,
    notes: values.notes,
  });

  return {
    status: "success",
    message: "Request received. A specialist will come back with a shortlist, usually within one business day.",
  };
}
