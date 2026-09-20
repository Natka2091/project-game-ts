import { z } from 'zod';

export const bookingSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required'),

  phone: z
    .string()
    .min(1, 'Phone is required')
    .regex(
      /^(?:\+44|0)(?:[\s-]?\d){9,10}$/,
      'Please enter a valid UK phone number'
    ),

  participants: z
    .number()
    .min(1, 'Number of participants must be at least 1'),

  agreement: z
    .boolean()
    .refine((value) => value === true, {
      message: 'You must agree to the terms',
    }),
});

export type BookingFormData = z.infer<typeof bookingSchema>;