(() => {
  var e = {};
  (e.id = 176),
    (e.ids = [176]),
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
      6451: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => i.Z,
            __next_app__: () => u,
            originalPathname: () => c,
            pages: () => d,
            routeModule: () => p,
            tree: () => o,
          }),
          r(9072),
          r(3994),
          r(3733),
          r(9198);
        var s = r(170),
          n = r(5002),
          i = r(4512),
          a = r(6299),
          l = {};
        for (let e in a)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (l[e] = () => a[e]);
        r.d(t, l);
        let o = [
            "",
            {
              children: [
                "admin",
                {
                  children: [
                    "block",
                    {
                      children: [
                        "video",
                        {
                          children: [
                            "__PAGE__",
                            {},
                            {
                              page: [
                                () => Promise.resolve().then(r.bind(r, 9072)),
                                "/Users/seungjian/Documents/development/sniper_project/project/src/app/admin/block/video/page.tsx",
                              ],
                            },
                          ],
                        },
                        {},
                      ],
                    },
                    {},
                  ],
                },
                {
                  layout: [
                    () => Promise.resolve().then(r.bind(r, 3994)),
                    "/Users/seungjian/Documents/development/sniper_project/project/src/app/admin/layout.tsx",
                  ],
                },
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
          d = [
            "/Users/seungjian/Documents/development/sniper_project/project/src/app/admin/block/video/page.tsx",
          ],
          c = "/admin/block/video/page",
          u = { require: r, loadChunk: () => Promise.resolve() },
          p = new s.AppPageRouteModule({
            definition: {
              kind: n.x.APP_PAGE,
              page: "/admin/block/video/page",
              pathname: "/admin/block/video",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: o },
          });
      },
      3954: (e, t, r) => {
        Promise.resolve().then(r.t.bind(r, 3642, 23)),
          Promise.resolve().then(r.t.bind(r, 7586, 23)),
          Promise.resolve().then(r.t.bind(r, 7838, 23)),
          Promise.resolve().then(r.t.bind(r, 8057, 23)),
          Promise.resolve().then(r.t.bind(r, 7741, 23)),
          Promise.resolve().then(r.t.bind(r, 3118, 23));
      },
      9036: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 3659));
      },
      3518: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 5908));
      },
      1357: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 5295));
      },
      3991: () => {},
      5303: () => {},
      4597: (e, t, r) => {
        "use strict";
        r.d(t, { default: () => n.a });
        var s = r(1561),
          n = r.n(s);
      },
      1561: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            default: function () {
              return o;
            },
            getImageProps: function () {
              return l;
            },
          });
        let s = r(352),
          n = r(1807),
          i = r(5889),
          a = s._(r(9857));
        function l(e) {
          let { props: t } = (0, n.getImgProps)(e, {
            defaultLoader: a.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !0,
              unoptimized: !1,
            },
          });
          for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
          return { props: t };
        }
        let o = i.Image;
      },
      1001: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => n });
        var s = r(7247);
        r(8964);
        let n = ({ text: e, onClick: t, disabled: r }) => {
          let n = r ? "bg-orange-100" : "bg-orange-600",
            i = r ? "text-orange-300" : "text-slate-200";
          return s.jsx("button", {
            className: `h-12 w-full rounded-lg ${n} ${i} font-bold`,
            onClick: t,
            disabled: r,
            children: e,
          });
        };
      },
      4008: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => n });
        var s = r(7247);
        r(8964);
        let n = ({ children: e }) =>
          s.jsx("div", { className: "flex flex-col gap-2 py-6", children: e });
      },
      9810: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => a });
        var s = r(7247);
        r(8964);
        var n = r(4597),
          i = r(5289);
        let a = ({ title: e, children: t }) => {
          let r = (0, i.useRouter)();
          return (0, s.jsxs)("div", {
            className: "flex w-full flex-col gap-4 px-20 py-4",
            children: [
              s.jsx("button", {
                onClick: () => r.back(),
                children: s.jsx(n.default, {
                  src: "/assets/icons/icon_back.png",
                  alt: "뒤로가기 아이콘",
                  width: 34,
                  height: 34,
                }),
              }),
              s.jsx("h1", { children: e }),
              s.jsx("div", { className: "flex flex-col gap-4", children: t }),
            ],
          });
        };
      },
      7560: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => n });
        var s = r(7247);
        r(8964);
        let n = ({
          title: e,
          placeholder: t,
          text: r,
          setText: n,
          required: i,
          limit: a,
        }) =>
          (0, s.jsxs)("div", {
            className: "flex flex-col gap-1",
            children: [
              (0, s.jsxs)("div", {
                className: "flex justify-between gap-2",
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      e,
                      i &&
                        s.jsx("span", {
                          className: "text-red-500",
                          children: "*",
                        }),
                    ],
                  }),
                  a &&
                    (0, s.jsxs)("div", {
                      className: "text-slate-400",
                      children: [
                        r.length,
                        (0, s.jsxs)("span", {
                          className: "text-[12px] text-slate-600",
                          children: [" / ", a],
                        }),
                      ],
                    }),
                ],
              }),
              s.jsx("input", {
                type: "text",
                placeholder: t,
                value: r,
                onChange: (e) => n(e.currentTarget.value),
                className: "text-slate-600",
                maxLength: a,
              }),
            ],
          });
      },
      3659: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => d });
        var s = r(7247),
          n = r(8964),
          i = r(9810),
          a = r(7560),
          l = r(1001),
          o = r(4008);
        let d = () => {
          let [e, t] = (0, n.useState)(""),
            [r, d] = (0, n.useState)("");
          return (0, s.jsxs)(i.Z, {
            title: "비디오 블록",
            children: [
              s.jsx(a.Z, {
                title: "동영상 URL",
                placeholder: "유튜브, 틱톡 등 좋아하는 동영상을 공유하세요",
                text: e,
                setText: t,
                required: !0,
              }),
              r && s.jsx("iframe", { src: r, className: "rounded-lg" }),
              s.jsx(o.Z, {
                children: s.jsx(l.Z, {
                  text: "추가 완료",
                  onClick: () => {
                    let t = (function (e) {
                      let t = e.match(
                        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
                      );
                      return t && 11 == t[7].length ? t[7] : null;
                    })(e);
                    d(t ? `https://www.youtube.com/embed/${t}` : e);
                  },
                  disabled: !e,
                }),
              }),
            ],
          });
        };
      },
      5908: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => n });
        var s = r(7247);
        function n() {
          return s.jsx("div", {
            children: s.jsx("h1", { children: "GLOBAL ERROR PAGE!!" }),
          });
        }
      },
      5295: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => n });
        var s = r(7247);
        function n() {
          return s.jsx("div", {
            children: s.jsx("h1", { children: "NOT FOUND PAGE" }),
          });
        }
      },
      9072: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => s });
        let s = (0, r(5347).createProxy)(
          String.raw`/Users/seungjian/Documents/development/sniper_project/project/src/app/admin/block/video/page.tsx#default`,
        );
      },
      3994: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => a, metadata: () => i });
        var s = r(2051);
        function n() {
          return s.jsx("div", {
            className:
              "grid min-h-[20px] grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20",
            children: s.jsx("h2", { children: "네비게이션" }),
          });
        }
        let i = { title: "admin" };
        function a({ children: e }) {
          return (0, s.jsxs)("div", { children: [s.jsx(n, {}), e] });
        }
      },
      4512: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => s });
        let s = (0, r(5347).createProxy)(
          String.raw`/Users/seungjian/Documents/development/sniper_project/project/src/app/global-error.tsx#default`,
        );
      },
      3733: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => i, metadata: () => n });
        var s = r(2051);
        r(2155), r(821);
        let n = {
          title: { template: "%s | IN MY LINK", default: "IN MY LINK" },
          description: "BOOMCO co.",
        };
        function i({ children: e }) {
          return s.jsx("html", {
            lang: "en",
            children: s.jsx("body", {
              className: "mx-auto max-w-screen-md",
              children: e,
            }),
          });
        }
      },
      9198: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => s });
        let s = (0, r(5347).createProxy)(
          String.raw`/Users/seungjian/Documents/development/sniper_project/project/src/app/not-found.tsx#default`,
        );
      },
      821: () => {},
      2155: () => {},
    });
  var t = require("../../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [66, 889], () => r(6451));
  module.exports = s;
})();
