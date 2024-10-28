export type DividerType = "Space" | "Dashed" | "Solid" | "Point" | "Zigzag";

export interface Divider {
  name: DividerType;
  icon: string | JSX.Element;
}
