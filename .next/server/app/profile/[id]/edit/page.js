(() => {
  var e = {};
  (e.id = 355),
    (e.ids = [355]),
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
      5930: (e, r, t) => {
        "use strict";
        t.r(r),
          t.d(r, {
            GlobalError: () => i.Z,
            __next_app__: () => c,
            originalPathname: () => p,
            pages: () => l,
            routeModule: () => u,
            tree: () => d,
          }),
          t(1011),
          t(3733),
          t(9198);
        var s = t(170),
          n = t(5002),
          i = t(4512),
          o = t(6299),
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
        t.d(r, a);
        let d = [
            "",
            {
              children: [
                "profile",
                {
                  children: [
                    "[id]",
                    {
                      children: [
                        "edit",
                        {
                          children: [
                            "__PAGE__",
                            {},
                            {
                              page: [
                                () => Promise.resolve().then(t.bind(t, 1011)),
                                "/Users/seungjian/Documents/development/sniper_project/project/src/app/profile/[id]/edit/page.tsx",
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
                {},
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
          l = [
            "/Users/seungjian/Documents/development/sniper_project/project/src/app/profile/[id]/edit/page.tsx",
          ],
          p = "/profile/[id]/edit/page",
          c = { require: t, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: n.x.APP_PAGE,
              page: "/profile/[id]/edit/page",
              pathname: "/profile/[id]/edit",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      3954: (e, r, t) => {
        Promise.resolve().then(t.t.bind(t, 3642, 23)),
          Promise.resolve().then(t.t.bind(t, 7586, 23)),
          Promise.resolve().then(t.t.bind(t, 7838, 23)),
          Promise.resolve().then(t.t.bind(t, 8057, 23)),
          Promise.resolve().then(t.t.bind(t, 7741, 23)),
          Promise.resolve().then(t.t.bind(t, 3118, 23));
      },
      3518: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 5908));
      },
      1357: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 5295));
      },
      3991: () => {},
      5303: () => {},
      5908: (e, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => n });
        var s = t(7247);
        function n() {
          return s.jsx("div", {
            children: s.jsx("h1", { children: "GLOBAL ERROR PAGE!!" }),
          });
        }
      },
      5295: (e, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => n });
        var s = t(7247);
        function n() {
          return s.jsx("div", {
            children: s.jsx("h1", { children: "NOT FOUND PAGE" }),
          });
        }
      },
      4512: (e, r, t) => {
        "use strict";
        t.d(r, { Z: () => s });
        let s = (0, t(5347).createProxy)(
          String.raw`/Users/seungjian/Documents/development/sniper_project/project/src/app/global-error.tsx#default`,
        );
      },
      3733: (e, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => i, metadata: () => n });
        var s = t(2051);
        t(2155), t(821);
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
      9198: (e, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => s });
        let s = (0, t(5347).createProxy)(
          String.raw`/Users/seungjian/Documents/development/sniper_project/project/src/app/not-found.tsx#default`,
        );
      },
      1011: (e, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => n });
        var s = t(2051);
        function n() {
          return s.jsx("div", {
            children: s.jsx("h1", { children: "유저 수정/삭제" }),
          });
        }
      },
      821: () => {},
      2155: () => {},
    });
  var r = require("../../../../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    s = r.X(0, [66], () => t(5930));
  module.exports = s;
})();
