export interface User {
  userId: string;
  name: string;
  email: string | null;
  countryCode?: string;
  dateCreate?: string;
  dateUpdate?: string;
}
