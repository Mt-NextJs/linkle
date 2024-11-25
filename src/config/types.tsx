import { z } from "zod";
const ClientRouteTypeSchema = z.object({
  MAIN: z.string(),
  INTRO: z.string(),
  LOGIN: z.string(),
  JOIN: z.string(),
  ADMIN: z.string(),
  MY: z.string(),
  PROFILE: z.object({
    DETAIL: z.string(),
    EDIT: z.string(),
  }),
});
export type ClientRouteType = z.infer<typeof ClientRouteTypeSchema>;
