import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Select a project type"),
  projectDescription: z
    .string()
    .min(20, "Tell us a bit more about the project (at least 20 characters)"),
  budget: z.string().min(1, "Select a budget range"),
  timeline: z.string().min(1, "Select a timeline"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
