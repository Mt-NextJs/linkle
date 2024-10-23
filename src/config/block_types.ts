import { StaticImageData } from "next/image";
import {
  CALENDAR_ICON,
  DIVIDE_ICON,
  EVENT_ICON,
  IMAGE_ICON,
  LINK_ICON,
  TEXT_ICON,
  VIDEO_ICON,
} from "../../public/assets/icons";

interface BlockType {
  title: string;
  text: string;
  icon: StaticImageData;
  path: string;
}
export const blockTypes: BlockType[] = [
  {
    title: "링크",
    text: "연결하고 싶은 url은 무엇이든 추가하세요",
    icon: LINK_ICON,
    path: "/admin/link",
  },
  {
    title: "텍스트",
    text: "공유하고 싶은 글이 있다면 적어보세요",
    icon: TEXT_ICON,

    path: "/admin/(block)/text",
  },
  {
    title: "이미지",
    text: "보여주고 싶은 이미지로 표현하세요",
    icon: IMAGE_ICON,
    path: "/admin/image",
  },
  {
    title: "구분선",
    text: "블록과 블록 사이를 구분할 수 있어요",
    icon: DIVIDE_ICON,
    path: "/admin/divider",
  },
  {
    title: "동영상",
    text: "유튜브, 틱톡 등 동영상을 공유하세요",
    icon: VIDEO_ICON,
    path: "/admin/video",
  },
  {
    title: "캘린더",
    text: "다가오는 중요한 이벤트의 일정을 알리세요",
    icon: CALENDAR_ICON,
    path: "/admin/calendar",
  },
  {
    title: "이벤트",
    text: "이벤트 응모부터, 추첨까지 진행해보세요",
    icon: EVENT_ICON,
    path: "/admin/event",
  },
];
