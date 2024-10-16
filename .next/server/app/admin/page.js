(() => {
  var e = {};
  (e.id = 3),
    (e.ids = [3]),
    (e.modules = {
      2934: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/action-async-storage.external.js");
      },
      4580: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external.js");
      },
      5869: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external.js");
      },
      399: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      604: (e, s, t) => {
        "use strict";
        t.r(s),
          t.d(s, {
            GlobalError: () => a.Z,
            __next_app__: () => u,
            originalPathname: () => d,
            pages: () => c,
            routeModule: () => m,
            tree: () => o,
          }),
          t(1852),
          t(3994),
          t(3733),
          t(9198);
        var r = t(170),
          n = t(5002),
          a = t(4512),
          i = t(6299),
          l = {};
        for (let e in i)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (l[e] = () => i[e]);
        t.d(s, l);
        let o = [
            "",
            {
              children: [
                "admin",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(t.bind(t, 1852)),
                        "/Users/seungjian/Documents/development/sniper_project/project/src/app/admin/page.tsx",
                      ],
                    },
                  ],
                },
                {
                  layout: [
                    () => Promise.resolve().then(t.bind(t, 3994)),
                    "/Users/seungjian/Documents/development/sniper_project/project/src/app/admin/layout.tsx",
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(t.bind(t, 3733)),
                "/Users/seungjian/Documents/development/sniper_project/project/src/app/layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(t.bind(t, 9198)),
                "/Users/seungjian/Documents/development/sniper_project/project/src/app/not-found.tsx",
              ],
            },
          ],
          c = [
            "/Users/seungjian/Documents/development/sniper_project/project/src/app/admin/page.tsx",
          ],
          d = "/admin/page",
          u = { require: t, loadChunk: () => Promise.resolve() },
          m = new r.AppPageRouteModule({
            definition: {
              kind: n.x.APP_PAGE,
              page: "/admin/page",
              pathname: "/admin",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: o },
          });
      },
      3954: (e, s, t) => {
        Promise.resolve().then(t.t.bind(t, 3642, 23)),
          Promise.resolve().then(t.t.bind(t, 7586, 23)),
          Promise.resolve().then(t.t.bind(t, 7838, 23)),
          Promise.resolve().then(t.t.bind(t, 8057, 23)),
          Promise.resolve().then(t.t.bind(t, 7741, 23)),
          Promise.resolve().then(t.t.bind(t, 3118, 23));
      },
      4456: (e, s, t) => {
        Promise.resolve().then(t.bind(t, 2558));
      },
      3518: (e, s, t) => {
        Promise.resolve().then(t.bind(t, 5908));
      },
      1357: (e, s, t) => {
        Promise.resolve().then(t.bind(t, 5295));
      },
      3991: () => {},
      5303: () => {},
      4597: (e, s, t) => {
        "use strict";
        t.d(s, { default: () => n.a });
        var r = t(1561),
          n = t.n(r);
      },
      1561: (e, s, t) => {
        "use strict";
        Object.defineProperty(s, "__esModule", { value: !0 }),
          (function (e, s) {
            for (var t in s)
              Object.defineProperty(e, t, { enumerable: !0, get: s[t] });
          })(s, {
            default: function () {
              return o;
            },
            getImageProps: function () {
              return l;
            },
          });
        let r = t(352),
          n = t(1807),
          a = t(5889),
          i = r._(t(9857));
        function l(e) {
          let { props: s } = (0, n.getImgProps)(e, {
            defaultLoader: i.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !0,
              unoptimized: !1,
            },
          });
          for (let [e, t] of Object.entries(s)) void 0 === t && delete s[e];
          return { props: s };
        }
        let o = a.Image;
      },
      2558: (e, s, t) => {
        "use strict";
        t.r(s), t.d(s, { default: () => u });
        var r = t(7247),
          n = t(4597),
          a = t(8964);
        function i() {
          let [e, s] = (0, a.useState)(!1);
          return r.jsx("button", {
            onClick: () => s(!e),
            className: `flex h-6 w-12 items-center rounded-full p-1 transition duration-300 ease-in-out ${e ? "bg-indigo-400" : "bg-gray-300"}`,
            children: r.jsx("div", {
              className: `h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${e ? "translate-x-6" : "translate-x-0"}`,
            }),
          });
        }
        function l({ title: e, index: s, setTop: t, setBottom: l }) {
          let [o, c] = (0, a.useState)(!1);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)("div", {
                className: "flex h-36 w-full rounded border",
                children: [
                  (0, r.jsxs)("div", {
                    className: "relative w-[5%]",
                    children: [
                      r.jsx("div", {
                        className:
                          "h-10 border bg-slate-100 hover:bg-slate-200",
                        children: r.jsx("button", {
                          onClick: () => t(s),
                          children: r.jsx(n.default, {
                            className: "ml-[8px] mt-[7px]",
                            src: "/assets/icons/icon_arrow_up.png",
                            alt: "arrow_up",
                            width: 20,
                            height: 30,
                          }),
                        }),
                      }),
                      r.jsx("div", {
                        className:
                          "h-16 cursor-pointer border bg-slate-100 hover:bg-slate-200",
                        children: r.jsx(n.default, {
                          className: "ml-[6.5px] mt-[17px]",
                          src: "/assets/icons/icon_grabber.png",
                          alt: "grabber",
                          width: 25,
                          height: 40,
                        }),
                      }),
                      r.jsx("div", {
                        className:
                          "h-10 border bg-slate-100 hover:bg-slate-200",
                        children: r.jsx("button", {
                          onClick: () => l(s),
                          children: r.jsx(n.default, {
                            className: "ml-[8px] mt-[7px]",
                            src: "/assets/icons/icon_arrow.png",
                            alt: "arrow_down",
                            width: 20,
                            height: 30,
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "grid h-full w-full",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex h-[32px] items-center justify-between",
                        children: [
                          (0, r.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                              r.jsx(n.default, {
                                className: "ml-2",
                                src: (function (e) {
                                  switch (e) {
                                    case "이벤트":
                                    default:
                                      return "/assets/icons/icon_gift.png";
                                    case "캘린더":
                                      return "/assets/icons/icon_calendar.png";
                                    case "동영상":
                                      return "/assets/icons/icon_video.png";
                                    case "구분선":
                                      return "/assets/icons/icon_divide.png";
                                    case "이미지":
                                      return "/assets/icons/icon_image.png";
                                    case "텍스트":
                                      return "/assets/icons/icon_text.png";
                                    case "링크":
                                      return "/assets/icons/icon_link.png";
                                  }
                                })(e),
                                alt: "title_icon",
                                width: 30,
                                height: 20,
                              }),
                              r.jsx("div", {
                                className: "ml-[4px] font-bold text-orange-600",
                                children: e,
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "ml-auto flex items-center space-x-2",
                            children: [
                              r.jsx(i, {}),
                              (0, r.jsxs)("button", {
                                onClick: function () {
                                  c(!o);
                                },
                                className: "hover:bg-slate-200",
                                children: [
                                  r.jsx(n.default, {
                                    src: "/assets/icons/icon_menu_dot.png",
                                    alt: "menu_dot",
                                    width: 20,
                                    height: 20,
                                    className: "ml-1 mt-[6px]",
                                  }),
                                  o &&
                                    r.jsx("div", {
                                      className:
                                        "absolute mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg",
                                      children: (0, r.jsxs)("ul", {
                                        className: "py-1",
                                        children: [
                                          r.jsx("li", {
                                            className:
                                              "border-b px-4 py-2 font-bold hover:bg-slate-200",
                                            children: "상단에 고정",
                                          }),
                                          r.jsx("li", {
                                            className:
                                              "border-b px-4 py-2 font-bold hover:bg-slate-200",
                                            children: "보관",
                                          }),
                                          r.jsx("li", {
                                            className:
                                              "px-4 py-2 font-bold hover:bg-slate-200",
                                            children: "삭제",
                                          }),
                                        ],
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      r.jsx("div", { className: "h-[80px]" }),
                      r.jsx("div", { className: "h-[32px]" }),
                    ],
                  }),
                ],
              }),
              r.jsx("br", {}),
            ],
          });
        }
        var o = t(4080),
          c = t.n(o);
        let d = { MAIN: "/" };
        function u() {
          let [e, s] = (0, a.useState)("0"),
            [t, i] = (0, a.useState)("0"),
            [o, u] = (0, a.useState)("0"),
            [m, p] = (0, a.useState)([
              "이벤트",
              "캘린더",
              "동영상",
              "구분선",
              "이미지",
              "텍스트",
              "링크",
            ]);
          function x(e) {
            p((s) => {
              let t = [...s],
                [r] = t.splice(e, 1);
              return t.unshift(r), t;
            });
          }
          function h(e) {
            p((s) => {
              let t = [...s],
                [r] = t.splice(e, 1);
              return t.push(r), t;
            });
          }
          return (0, r.jsxs)("div", {
            children: [
              r.jsx("div", {
                className: "h-36 items-center border",
                children: (0, r.jsxs)("div", {
                  className: "items-center border text-center",
                  children: [
                    r.jsx(n.default, {
                      src: "/assets/icons/icon_profile.png",
                      alt: "profile",
                      className: "ml-[44%] cursor-pointer",
                      width: 80,
                      height: 20,
                    }),
                    r.jsx(c(), {
                      href: d.MAIN,
                      className: "mr-5",
                      children: "momomoc",
                    }),
                  ],
                }),
              }),
              r.jsx("br", {}),
              (0, r.jsxs)("div", {
                className: "flex w-full rounded border",
                children: [
                  (0, r.jsxs)("div", {
                    className: "grid w-8/12 rounded-l border",
                    children: [
                      r.jsx("h3", {
                        className: "ml-2 font-bold",
                        children: "방문자",
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex",
                        children: [
                          (0, r.jsxs)("p", {
                            className: "ml-2",
                            children: ["전체 ", e],
                          }),
                          (0, r.jsxs)("p", {
                            className: "ml-2",
                            children: ["오늘 ", t],
                          }),
                          (0, r.jsxs)("p", {
                            className: "ml-2",
                            children: ["실시간 ", o],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "w-4/12 rounded-r border",
                    children: [
                      r.jsx("h3", {
                        className: "ml-2 font-bold",
                        children: "소식받기",
                      }),
                      r.jsx("p", { className: "ml-2", children: "전체" }),
                    ],
                  }),
                ],
              }),
              r.jsx("br", {}),
              (0, r.jsxs)("div", {
                className: "flex gap-1",
                children: [
                  r.jsx("h1", {
                    className: "font-bold",
                    children: "블록 리스트",
                  }),
                  (0, r.jsxs)("div", {
                    className: "group relative inline-block",
                    children: [
                      r.jsx(n.default, {
                        src: "/assets/icons/icon_question.png",
                        alt: "question",
                        width: 20,
                        height: 20,
                      }),
                      r.jsx("div", {
                        className:
                          "absolute left-full top-1/2 w-max -translate-y-1/2 translate-x-2 transform rounded bg-slate-400 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                        children:
                          "블록을 편집하거나 배치 순서를 변경할 수 있습니다",
                      }),
                    ],
                  }),
                ],
              }),
              r.jsx("br", {}),
              (0, r.jsxs)("div", {
                className:
                  "h-64 items-center rounded border bg-slate-100 text-center align-middle",
                children: [
                  r.jsx(n.default, {
                    className: "mb-[10px] ml-[44%] mt-[17px]",
                    src: "/assets/icons/icon_empty.png",
                    alt: "arrow_down",
                    width: 80,
                    height: 40,
                  }),
                  r.jsx("p", { children: "지금 공개된 링크가 없다..." }),
                  (0, r.jsxs)("p", {
                    children: [
                      r.jsx("strong", {
                        className: "cursor-pointer",
                        children: "소식받기",
                      }),
                      " 버튼을 눌러다오",
                    ],
                  }),
                  r.jsx("p", { children: "새로운 링크가 생기면 알려줌.,.." }),
                ],
              }),
              r.jsx("br", {}),
              m.map((e, s) =>
                r.jsx(l, { title: e, index: s, setTop: x, setBottom: h }, s),
              ),
            ],
          });
        }
      },
      5908: (e, s, t) => {
        "use strict";
        t.r(s), t.d(s, { default: () => n });
        var r = t(7247);
        function n() {
          return r.jsx("div", {
            children: r.jsx("h1", { children: "GLOBAL ERROR PAGE!!" }),
          });
        }
      },
      5295: (e, s, t) => {
        "use strict";
        t.r(s), t.d(s, { default: () => n });
        var r = t(7247);
        function n() {
          return r.jsx("div", {
            children: r.jsx("h1", { children: "NOT FOUND PAGE" }),
          });
        }
      },
      3994: (e, s, t) => {
        "use strict";
        t.r(s), t.d(s, { default: () => i, metadata: () => a });
        var r = t(2051);
        function n() {
          return r.jsx("div", {
            className:
              "grid min-h-[20px] grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20",
            children: r.jsx("h2", { children: "네비게이션" }),
          });
        }
        let a = { title: "admin" };
        function i({ children: e }) {
          return (0, r.jsxs)("div", { children: [r.jsx(n, {}), e] });
        }
      },
      1852: (e, s, t) => {
        "use strict";
        t.r(s), t.d(s, { default: () => r });
        let r = (0, t(5347).createProxy)(
          String.raw`/Users/seungjian/Documents/development/sniper_project/project/src/app/admin/page.tsx#default`,
        );
      },
      4512: (e, s, t) => {
        "use strict";
        t.d(s, { Z: () => r });
        let r = (0, t(5347).createProxy)(
          String.raw`/Users/seungjian/Documents/development/sniper_project/project/src/app/global-error.tsx#default`,
        );
      },
      3733: (e, s, t) => {
        "use strict";
        t.r(s), t.d(s, { default: () => a, metadata: () => n });
        var r = t(2051);
        t(2155), t(821);
        let n = {
          title: { template: "%s | IN MY LINK", default: "IN MY LINK" },
          description: "BOOMCO co.",
        };
        function a({ children: e }) {
          return r.jsx("html", {
            lang: "en",
            children: r.jsx("body", {
              className: "mx-auto max-w-screen-md",
              children: e,
            }),
          });
        }
      },
      9198: (e, s, t) => {
        "use strict";
        t.r(s), t.d(s, { default: () => r });
        let r = (0, t(5347).createProxy)(
          String.raw`/Users/seungjian/Documents/development/sniper_project/project/src/app/not-found.tsx#default`,
        );
      },
      821: () => {},
      2155: () => {},
    });
  var s = require("../../webpack-runtime.js");
  s.C(e);
  var t = (e) => s((s.s = e)),
    r = s.X(0, [66, 889, 80], () => t(604));
  module.exports = r;
})();
