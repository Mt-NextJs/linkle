import { z } from "zod";

const UserSchema = z.object({
  userId: z.string(),
  name: z.string(),
  email: z.string().nullable(),
  countryCode: z.string().optional(),
  dateCreate: z.string().optional(),
  dateUpdate: z.string().optional(),
});
export type User = z.infer<typeof UserSchema>;

const ScheduleSchema = z.object({
  id: z.number().optional(),
  title: z.string(),
  url: z.string().optional(),
  dateStart: z.string(),
  dateEnd: z.string(),
});

const ScheduleFormPropsSchema = z.object({
  mode: z.enum(["add", "edit"]),
  initialData: ScheduleSchema.nullable().optional(),
  calendarBlockId: z.number().nullable().optional(),
  "aria-label": z.string().optional(),
});

export type Schedule = z.infer<typeof ScheduleSchema>;
export type ScheduleFormProps = z.infer<typeof ScheduleFormPropsSchema>;
