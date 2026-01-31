import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .regex(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
      "Please enter a valid phone number"
    ),
  date: z.string().refine(
    (val) => {
      const selected = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected > today;
    },
    { message: "Please select a future date" }
  ),
  passengers: z.string().min(1, "Please select number of passengers"),
  rideType: z.string().min(1, "Please select a tour package"),
  specialRequests: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
