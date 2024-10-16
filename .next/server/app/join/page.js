(() => {
  var e = {};
  (e.id = 532),
    (e.ids = [532]),
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
      498: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => o.Z,
            __next_app__: () => c,
            originalPathname: () => p,
            pages: () => d,
            routeModule: () => u,
            tree: () => l,
          }),
          r(4643),
          r(3733),
          r(9198);
        var n = r(170),
          s = r(5002),
          o = r(4512),
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
        r.d(t, a);
        let l = [
            "",
            {
              children: [
                "join",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 4643)),
                        "/Users/seungjian/Documents/development/sniper_project/project/src/app/join/page.tsx",
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
          d = [
            "/Users/seungjian/Documents/development/sniper_project/project/src/app/join/page.tsx",
          ],
          p = "/join/page",
          c = { require: r, loadChunk: () => Promise.resolve() },
          u = new n.AppPageRouteModule({
            definition: {
              kind: s.x.APP_PAGE,
              page: "/join/page",
              pathname: "/join",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: l },
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
        r.r(t), r.d(t, { default: () => s });
        var n = r(7247);
        function s() {
          return n.jsx("div", {
            children: n.jsx("h1", { children: "GLOBAL ERROR PAGE!!" }),
          });
        }
      },
      5295: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => s });
        var n = r(7247);
        function s() {
          return n.jsx("div", {
            children: n.jsx("h1", { children: "NOT FOUND PAGE" }),
          });
        }
      },
      4512: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => n });
        let n = (0, r(5347).createProxy)(
          String.raw`/Users/seungjian/Documents/development/sniper_project/project/src/app/global-error.tsx#default`,
        );
      },
      4643: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => o, metadata: () => s });
        var n = r(2051);
        let s = { title: "Join" };
        function o() {
          return n.jsx("div", {
            children: n.jsx("h1", { children: "회원가입 페이지" }),
          });
        }
      },
      3733: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => o, metadata: () => s });
        var n = r(2051);
        r(2155), r(821);
        let s = {
          title: { template: "%s | IN MY LINK", default: "IN MY LINK" },
          description: "BOOMCO co.",
        };
        function o({ children: e }) {
          return n.jsx("html", {
            lang: "en",
            children: n.jsx("body", {
              className: "mx-auto max-w-screen-md",
              children: e,
            }),
          });
        }
      },
      9198: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => n });
        let n = (0, r(5347).createProxy)(
          String.raw`/Users/seungjian/Documents/development/sniper_project/project/src/app/not-found.tsx#default`,
        );
      },
      821: () => {},
      2155: () => {},
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [66], () => r(498));
  module.exports = n;
})();
