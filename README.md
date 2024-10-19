This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started[DEV]

개발 서버에서 시작을 위해선 아래 단계를 따라주세요.

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)

## Structure

```bash
/project
├── README.md
├── build.sh
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── postcss.config.mjs
├── public
|  └── assets
|     ├── icons
|     |  ├── icon_arrow.png
|     |  ├── icon_arrow_up.png
|     |  ├── icon_back.png
|     |  ├── icon_bell.png
|     |  ├── icon_calendar.png
|     |  ├── icon_close.png
|     |  ├── icon_divide.png
|     |  ├── icon_empty.png
|     |  ├── icon_gift.png
|     |  ├── icon_grabber.png
|     |  ├── icon_image.png
|     |  ├── icon_link.png
|     |  ├── icon_menu.png
|     |  ├── icon_menu_dot.png
|     |  ├── icon_pencil.png
|     |  ├── icon_profile.png
|     |  ├── icon_question.png
|     |  ├── icon_share.png
|     |  ├── icon_text.png
|     |  ├── icon_video.png
|     |  ├── item_card_001.png
|     |  ├── item_card_002.png
|     |  ├── item_card_003.png
|     |  ├── item_card_004.png
|     |  └── item_zigzag.png
|     └── images
|        └── image_block_default.png
├── src
|  ├── app
|  |  ├── (intro)
|  |  |  ├── components
|  |  |  |  ├── UI
|  |  |  |  |  └── toggle-button.tsx
|  |  |  |  ├── basicblock.tsx
|  |  |  |  ├── error-boundary.tsx
|  |  |  |  └── navigation.tsx
|  |  |  └── page.tsx
|  |  ├── admin
|  |  |  ├── block
|  |  |  |  ├── components
|  |  |  |  |  ├── buttons
|  |  |  |  |  |  ├── add-button.tsx
|  |  |  |  |  |  └── button-box.tsx
|  |  |  |  |  ├── layout.tsx
|  |  |  |  |  └── text-input-box.tsx
|  |  |  |  ├── image
|  |  |  |  |  ├── components
|  |  |  |  |  |  └── image-box.tsx
|  |  |  |  |  └── page.tsx
|  |  |  |  ├── page.tsx
|  |  |  |  └── video
|  |  |  |     └── page.tsx
|  |  |  ├── layout.tsx
|  |  |  └── page.tsx
|  |  ├── global-error.tsx
|  |  ├── join
|  |  |  └── page.tsx
|  |  ├── layout.tsx
|  |  ├── link
|  |  |  └── page.tsx
|  |  ├── login
|  |  |  └── page.tsx
|  |  ├── not-found.tsx
|  |  └── profile
|  |     └── [id]
|  |        ├── detail
|  |        |  └── page.tsx
|  |        └── edit
|  |           └── page.tsx
|  ├── config
|  |  ├── route.tsx
|  |  └── types.tsx
|  └── styles
|     ├── common.css
|     └── global.css
├── tailwind.config.ts
└── tsconfig.json

directory: 1939 file: 18812

ignored: directory (29)
```

for test
