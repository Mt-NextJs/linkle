export type DividerType = "공백" | "점선" | "실선" | "포인트" | "지그재그";

export interface Divider {
  name: DividerType;
  icon: string | JSX.Element;
}
