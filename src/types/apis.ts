import { z } from "zod";

export const BlockSchema = z.object({
  id: z.number(),
  type: z.number(),
  sequence: z.number(),
  style: z.number().nullable(),
  title: z.string().nullable(),
  subText01: z.string().nullable(),
  subText02: z.string().nullable(),
  url: z.string(),
  imgUrl: z.string().nullable(),
  dateStart: z.string().nullable(),
  dateEnd: z.string().nullable(),
  openYn: z.enum(["Y", "N"]),
  keepYn: z.enum(["Y", "N"]),
  dateCreate: z.string(),
  dateUpdate: z.string().nullable(),
});
export type Block = z.infer<typeof BlockSchema>;

export type ApisResponse<T> = { response: Response; data: T };
