(() => {
  var e = {};
  (e.id = 62),
    (e.ids = [62]),
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
      3267: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => i.Z,
            __next_app__: () => p,
            originalPathname: () => c,
            pages: () => l,
            routeModule: () => u,
            tree: () => d,
          }),
          r(4240),
          r(3994),
          r(3733),
          r(9198);
        var s = r(170),
          n = r(5002),
          i = r(4512),
          o = r(6299),
          a = {};
        for (let e in o)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (a[e] = () => o[e]);
        r.d(t, a);
        let d = [
            "",
            {
              children: [
                "admin",
                {
                  children: [
                    "block",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(r.bind(r, 4240)),
                            "/Users/seungjian/Documents/development/sniper_project/project/src/app/admin/block/page.tsx",
                          ],
                        },
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
          l = [
            "/Users/seungjian/Documents/development/sniper_project/project/src/app/admin/block/page.tsx",
          ],
          c = "/admin/block/page",
          p = { require: r, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: n.x.APP_PAGE,
              page: "/admin/block/page",
              pathname: "/admin/block",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
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
      3518: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 5908));
      },
      1357: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 5295));
      },
      3991: () => {},
      5303: () => {},
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
      4240: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => n });
        var s = r(2051);
        r(6269);
        let n = () => s.jsx("div", { children: "block page" });
      },
      3994: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => o, metadata: () => i });
        var s = r(2051);
        function n() {
          return s.jsx("div", {
            className:
              "grid min-h-[20px] grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20",
            children: s.jsx("h2", { children: "네비게이션" }),
          });
        }
        let i = { title: "admin" };
        function o({ children: e }) {
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
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [66], () => r(3267));
  module.exports = s;
})();
