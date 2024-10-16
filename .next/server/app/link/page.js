(() => {
  var e = {};
  (e.id = 830),
    (e.ids = [830]),
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
      4647: (e, s, r) => {
        "use strict";
        r.r(s),
          r.d(s, {
            GlobalError: () => l.Z,
            __next_app__: () => m,
            originalPathname: () => o,
            pages: () => c,
            routeModule: () => x,
            tree: () => d,
          }),
          r(5856),
          r(3733),
          r(9198);
        var t = r(170),
          n = r(5002),
          l = r(4512),
          i = r(6299),
          a = {};
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
            ].indexOf(e) && (a[e] = () => i[e]);
        r.d(s, a);
        let d = [
            "",
            {
              children: [
                "link",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 5856)),
                        "/Users/seungjian/Documents/development/sniper_project/project/src/app/link/page.tsx",
                      ],
                    },
                  ],
                },
                {},
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(r.bind(r, 3733)),
                "/Users/seungjian/Documents/development/sniper_project/project/src/app/layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(r.bind(r, 9198)),
                "/Users/seungjian/Documents/development/sniper_project/project/src/app/not-found.tsx",
              ],
            },
          ],
          c = [
            "/Users/seungjian/Documents/development/sniper_project/project/src/app/link/page.tsx",
          ],
          o = "/link/page",
          m = { require: r, loadChunk: () => Promise.resolve() },
          x = new t.AppPageRouteModule({
            definition: {
              kind: n.x.APP_PAGE,
              page: "/link/page",
              pathname: "/link",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      3954: (e, s, r) => {
        Promise.resolve().then(r.t.bind(r, 3642, 23)),
          Promise.resolve().then(r.t.bind(r, 7586, 23)),
          Promise.resolve().then(r.t.bind(r, 7838, 23)),
          Promise.resolve().then(r.t.bind(r, 8057, 23)),
          Promise.resolve().then(r.t.bind(r, 7741, 23)),
          Promise.resolve().then(r.t.bind(r, 3118, 23));
      },
      3518: (e, s, r) => {
        Promise.resolve().then(r.bind(r, 5908));
      },
      1357: (e, s, r) => {
        Promise.resolve().then(r.bind(r, 5295));
      },
      3991: () => {},
      5303: () => {},
      5908: (e, s, r) => {
        "use strict";
        r.r(s), r.d(s, { default: () => n });
        var t = r(7247);
        function n() {
          return t.jsx("div", {
            children: t.jsx("h1", { children: "GLOBAL ERROR PAGE!!" }),
          });
        }
      },
      5295: (e, s, r) => {
        "use strict";
        r.r(s), r.d(s, { default: () => n });
        var t = r(7247);
        function n() {
          return t.jsx("div", {
            children: t.jsx("h1", { children: "NOT FOUND PAGE" }),
          });
        }
      },
      4512: (e, s, r) => {
        "use strict";
        r.d(s, { Z: () => t });
        let t = (0, r(5347).createProxy)(
          String.raw`/Users/seungjian/Documents/development/sniper_project/project/src/app/global-error.tsx#default`,
        );
      },
      3733: (e, s, r) => {
        "use strict";
        r.r(s), r.d(s, { default: () => l, metadata: () => n });
        var t = r(2051);
        r(2155), r(821);
        let n = {
          title: { template: "%s | IN MY LINK", default: "IN MY LINK" },
          description: "BOOMCO co.",
        };
        function l({ children: e }) {
          return t.jsx("html", {
            lang: "en",
            children: t.jsx("body", {
              className: "mx-auto max-w-screen-md",
              children: e,
            }),
          });
        }
      },
      5856: (e, s, r) => {
        "use strict";
        r.r(s), r.d(s, { default: () => n });
        var t = r(2051);
        function n() {
          return t.jsx(t.Fragment, {
            children: (0, t.jsxs)("article", {
              className: "mx-auto my-14 w-[800px]",
              children: [
                t.jsx("header", {
                  children: t.jsx("h1", {
                    className: "pageName",
                    children: "블록 링크",
                  }),
                }),
                (0, t.jsxs)("section", {
                  className:
                    "mt-8 flex flex-col items-center justify-center gap-9",
                  children: [
                    t.jsx("div", {
                      className:
                        "flex h-32 w-full items-center justify-center rounded-sm bg-[#F6F6F6]",
                      children: t.jsx("div", {
                        className:
                          "flex h-[86px] w-[600px] items-center rounded-lg bg-white",
                        children: (0, t.jsxs)("div", {
                          className: "flex w-full items-center",
                          children: [
                            t.jsx("div", {
                              className: "ml-[6px] flex w-1/5 justify-start",
                              children: t.jsx("img", {
                                src: "#",
                                alt: "link-icon",
                                className:
                                  "h-[75px] w-[75px] rounded-lg bg-gray-300",
                              }),
                            }),
                            t.jsx("div", {
                              className:
                                "mr-[37px] flex w-4/5 items-center justify-center",
                              children: t.jsx("p", {
                                children: "타이틀을 입력해주세요",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      className: "w-full",
                      children: [
                        (0, t.jsxs)("h3", {
                          className: "title",
                          children: [
                            "스타일 ",
                            t.jsx("span", {
                              className: "text-red-500",
                              children: "*",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            t.jsx("div", {
                              className: "boarder rounded border-[#F6F6F6]",
                            }),
                            t.jsx("p", {
                              className: "mt-2",
                              children: "썸네일",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                t.jsx("div", { className: "my-6 border-t-2 border-[#F6F6F6]" }),
                t.jsx("section", {
                  children: (0, t.jsxs)("form", {
                    action: "",
                    className: "flex flex-col gap-6",
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsxs)("label", {
                            className: "title",
                            htmlFor: "linked-url",
                            children: [
                              "연결할 주소 ",
                              t.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          t.jsx("input", { type: "text", id: "linked-url" }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "mt-2",
                        children: [
                          (0, t.jsxs)("label", {
                            className: "title mb-1 block",
                            children: [
                              "이미지 ",
                              t.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex items-center justify-start",
                            children: [
                              t.jsx("input", {
                                type: "file",
                                id: "file-upload",
                                className: "hidden",
                              }),
                              t.jsx("label", {
                                htmlFor: "file-upload",
                                className:
                                  "flex h-[94px] w-[94px] cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-gray-200 hover:bg-gray-300",
                                children: t.jsx("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-8 w-8 text-gray-400",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor",
                                  children: t.jsx("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M12 4v16m8-8H4",
                                  }),
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className: "ml-3 text-sm text-gray-500",
                                children: [
                                  t.jsx("p", {
                                    children: "이미지를 직접 끌어오거나",
                                  }),
                                  t.jsx("p", {
                                    children: "파일을 선택하여 업로드해주세요",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      t.jsx("div", {
                        className: "my-2 h-3 w-full bg-gray-200",
                      }),
                      t.jsx("button", {
                        type: "submit",
                        className:
                          "h-11 w-full rounded bg-primary-100 text-primary-200",
                        children: "추가 완료",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
      },
      9198: (e, s, r) => {
        "use strict";
        r.r(s), r.d(s, { default: () => t });
        let t = (0, r(5347).createProxy)(
          String.raw`/Users/seungjian/Documents/development/sniper_project/project/src/app/not-found.tsx#default`,
        );
      },
      821: () => {},
      2155: () => {},
    });
  var s = require("../../webpack-runtime.js");
  s.C(e);
  var r = (e) => s((s.s = e)),
    t = s.X(0, [66], () => r(4647));
  module.exports = t;
})();
