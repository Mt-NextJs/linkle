(() => {
  var e = {};
  (e.id = 93),
    (e.ids = [93]),
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
      1774: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => a.Z,
            __next_app__: () => u,
            originalPathname: () => c,
            pages: () => d,
            routeModule: () => p,
            tree: () => o,
          }),
          r(9256),
          r(3994),
          r(3733),
          r(9198);
        var s = r(170),
          n = r(5002),
          a = r(4512),
          i = r(6299),
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
                        "image",
                        {
                          children: [
                            "__PAGE__",
                            {},
                            {
                              page: [
                                () => Promise.resolve().then(r.bind(r, 9256)),
                                "/Users/seungjian/Documents/development/sniper_project/project/src/app/admin/block/image/page.tsx",
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
            "/Users/seungjian/Documents/development/sniper_project/project/src/app/admin/block/image/page.tsx",
          ],
          c = "/admin/block/image/page",
          u = { require: r, loadChunk: () => Promise.resolve() },
          p = new s.AppPageRouteModule({
            definition: {
              kind: n.x.APP_PAGE,
              page: "/admin/block/image/page",
              pathname: "/admin/block/image",
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
      8632: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 1160));
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
          a = r(5889),
          i = s._(r(9857));
        function l(e) {
          let { props: t } = (0, n.getImgProps)(e, {
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
          for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
          return { props: t };
        }
        let o = a.Image;
      },
      1001: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => n });
        var s = r(7247);
        r(8964);
        let n = ({ text: e, onClick: t, disabled: r }) => {
          let n = r ? "bg-orange-100" : "bg-orange-600",
            a = r ? "text-orange-300" : "text-slate-200";
          return s.jsx("button", {
            className: `h-12 w-full rounded-lg ${n} ${a} font-bold`,
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
        r.d(t, { Z: () => i });
        var s = r(7247);
        r(8964);
        var n = r(4597),
          a = r(5289);
        let i = ({ title: e, children: t }) => {
          let r = (0, a.useRouter)();
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
          required: a,
          limit: i,
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
                      a &&
                        s.jsx("span", {
                          className: "text-red-500",
                          children: "*",
                        }),
                    ],
                  }),
                  i &&
                    (0, s.jsxs)("div", {
                      className: "text-slate-400",
                      children: [
                        r.length,
                        (0, s.jsxs)("span", {
                          className: "text-[12px] text-slate-600",
                          children: [" / ", i],
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
                maxLength: i,
              }),
            ],
          });
      },
      1160: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => m });
        var s = r(7247),
          n = r(8964),
          a = r.n(n),
          i = r(9810),
          l = r(7560),
          o = r(1001),
          d = r(4008),
          c = r(4597);
        class u extends a().Component {
          constructor(e) {
            super(e), (this.state = { hasError: !1 });
          }
          static getDerivedStateFromError() {
            return { hasError: !0 };
          }
          componentDidCatch(e, t) {
            console.error("Error caught by componentDidCatch:", e, t);
          }
          render() {
            return this.state.hasError
              ? this.props.fallback
              : this.props.children;
          }
        }
        let p = ({ handeInputImageClick: e, selectedImageUrl: t }) =>
            (0, s.jsxs)("div", {
              className: "relative overflow-hidden rounded",
              children: [
                s.jsx("button", {
                  onClick: e,
                  className:
                    "absolute right-2 top-2 rounded-3xl bg-orange-600 p-2",
                  children: s.jsx(c.default, {
                    src: "/assets/icons/icon_pencil.png",
                    alt: "연필 아이콘",
                    width: 24,
                    height: 24,
                  }),
                }),
                s.jsx(u, {
                  fallback: s.jsx(c.default, {
                    src: "/assets/images/image_block_default.png",
                    alt: "기본이미지 혹은 선택한 이미지",
                    width: 610,
                    height: 610,
                  }),
                  children: s.jsx(c.default, {
                    src: t || "/assets/images/image_block_default.png",
                    alt: "기본이미지 혹은 선택한 이미지",
                    width: 610,
                    height: 610,
                  }),
                }),
              ],
            }),
          m = () => {
            let e = (0, n.useRef)(null),
              [t, r] = (0, n.useState)(""),
              [a, c] = (0, n.useState)(""),
              [u, m] = (0, n.useState)(""),
              [x, h] = (0, n.useState)(""),
              [g, f] = (0, n.useState)(""),
              j = (e) => /^http[s]?\:\/\//i.test(e);
            return (0, s.jsxs)(i.Z, {
              title: "이미지 블록",
              children: [
                s.jsx(l.Z, {
                  title: "이미지",
                  text: t,
                  setText: r,
                  placeholder: "원하는 이미지 URL을 입력하세요",
                  required: !0,
                }),
                s.jsx("input", {
                  id: "file",
                  ref: e,
                  type: "file",
                  accept: "image/*",
                  style: { display: "none" },
                  onChange: (e) => {
                    let t = e.target.files?.[0];
                    if (!t) return;
                    let r = new FileReader();
                    (r.onload = (e) => {
                      let t = e.target?.result;
                      "string" == typeof t && c(t);
                    }),
                      r.readAsDataURL(t);
                  },
                }),
                s.jsx(p, {
                  selectedImageUrl: g,
                  handeInputImageClick: () => {
                    e.current?.click();
                  },
                }),
                s.jsx(l.Z, {
                  title: "타이틀",
                  text: u,
                  setText: m,
                  placeholder: "이미지 하단에 함께 보여줄 수 있어요",
                  limit: 30,
                }),
                s.jsx(l.Z, {
                  title: "연결할 주소",
                  text: x,
                  setText: h,
                  placeholder: "이미지를 통해 이동시키고 싶은 링크가 있나요?",
                }),
                s.jsx(d.Z, {
                  children: s.jsx(o.Z, {
                    text: "추가 완료",
                    onClick: () => {
                      if (!j(t)) {
                        alert("이미지 URL을 확인해주세요.");
                        return;
                      }
                      f(t || a);
                    },
                    disabled: !t,
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
      9256: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => s });
        let s = (0, r(5347).createProxy)(
          String.raw`/Users/seungjian/Documents/development/sniper_project/project/src/app/admin/block/image/page.tsx#default`,
        );
      },
      3994: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => i, metadata: () => a });
        var s = r(2051);
        function n() {
          return s.jsx("div", {
            className:
              "grid min-h-[20px] grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20",
            children: s.jsx("h2", { children: "네비게이션" }),
          });
        }
        let a = { title: "admin" };
        function i({ children: e }) {
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
        r.r(t), r.d(t, { default: () => a, metadata: () => n });
        var s = r(2051);
        r(2155), r(821);
        let n = {
          title: { template: "%s | IN MY LINK", default: "IN MY LINK" },
          description: "BOOMCO co.",
        };
        function a({ children: e }) {
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
    s = t.X(0, [66, 889], () => r(1774));
  module.exports = s;
})();
