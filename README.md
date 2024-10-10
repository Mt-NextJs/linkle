This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started[DEV]

개발 서버에서 시작을 위해선 아래 단계를 따라주세요.

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)

## Structure

```
/project
├── README.md
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── postcss.config.mjs
├── public
|  └── assets
|     └── icons
|        ├── icon_arrow.png
|        ├── icon_back.png
|        ├── icon_bell.png
|        ├── icon_calendar.png
|        ├── icon_close.png
|        ├── icon_divide.png
|        ├── icon_empty.png
|        ├── icon_gift.png
|        ├── icon_grabber.png
|        ├── icon_image.png
|        ├── icon_link.png
|        ├── icon_menu.png
|        ├── icon_profile.png
|        ├── icon_share.png
|        ├── icon_text.png
|        ├── icon_video.png
|        ├── item_card_001.png
|        ├── item_card_002.png
|        ├── item_card_003.png
|        ├── item_card_004.png
|        └── item_zigzag.png
├── src
|  ├── app
|  |  ├── (intro)
|  |  |  ├── components
|  |  |  |  └── navigation.tsx
|  |  |  └── image-block.tsx
|  |  ├── admin
|  |  |  ├── layout.tsx
|  |  |  └── image-block.tsx
|  |  ├── global-error.tsx
|  |  ├── join
|  |  |  └── image-block.tsx
|  |  ├── layout.tsx
|  |  ├── login
|  |  |  └── image-block.tsx
|  |  ├── not-found.tsx
|  |  └── profile
|  |     └── [id]
|  |        ├── detail
|  |        |  └── image-block.tsx
|  |        └── edit
|  |           └── image-block.tsx
|  ├── config
|  |  ├── route.tsx
|  |  └── types.tsx
|  └── styles
|     ├── common.css
|     └── global.css
├── tailwind.config.ts
└── tsconfig.json

directory: 1844 file: 18362

ignored: directory (21)
```
