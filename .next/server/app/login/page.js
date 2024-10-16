(() => {
  var e = {};
  (e.id = 626),
    (e.ids = [626]),
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
      1962: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => o.Z,
            __next_app__: () => u,
            originalPathname: () => p,
            pages: () => d,
            routeModule: () => c,
            tree: () => l,
          }),
          r(462),
          r(3733),
          r(9198);
        var s = r(170),
          n = r(5002),
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
                "login",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 462)),
                        "/Users/seungjian/Documents/development/sniper_project/project/src/app/login/page.tsx",
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
            "/Users/seungjian/Documents/development/sniper_project/project/src/app/login/page.tsx",
          ],
          p = "/login/page",
          u = { require: r, loadChunk: () => Promise.resolve() },
          c = new s.AppPageRouteModule({
            definition: {
              kind: n.x.APP_PAGE,
              page: "/login/page",
              pathname: "/login",
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
      313: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 2362));
      },
      1357: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 5295));
      },
      3991: () => {},
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
      2362: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => o });
        var s = r(7247),
          n = r(8964);
        function o() {
          let [e, t] = (0, n.useState)(""),
            [r, o] = (0, n.useState)("");
          async function i(t) {
            t.preventDefault();
            try {
              let t = await fetch("http://43.201.21.97:3002/api/login", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ userId: e, password: r }),
                }),
                s = await t.json();
              t.ok
                ? (alert("성공"), sessionStorage.setItem("token", s.data.token))
                : alert("실패");
            } catch (e) {
              console.log(e);
            }
          }
          return s.jsx("div", {
            children: (0, s.jsxs)("form", {
              onSubmit: i,
              children: [
                (0, s.jsxs)("label", {
                  htmlFor: "id",
                  children: [
                    "id",
                    s.jsx("input", {
                      type: "text",
                      id: "id",
                      value: e,
                      onChange: (e) => t(e.target.value),
                    }),
                  ],
                }),
                (0, s.jsxs)("label", {
                  htmlFor: "password",
                  children: [
                    "password",
                    s.jsx("input", {
                      type: "password",
                      id: "password",
                      value: r,
                      onChange: (e) => o(e.target.value),
                    }),
                  ],
                }),
                s.jsx("button", { type: "submit", children: "로그인" }),
              ],
            }),
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
      4512: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => s });
        let s = (0, r(5347).createProxy)(
          String.raw`/Users/seungjian/Documents/development/sniper_project/project/src/app/global-error.tsx#default`,
        );
      },
      3733: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => o, metadata: () => n });
        var s = r(2051);
        r(2155), r(821);
        let n = {
          title: { template: "%s | IN MY LINK", default: "IN MY LINK" },
          description: "BOOMCO co.",
        };
        function o({ children: e }) {
          return s.jsx("html", {
            lang: "en",
            children: s.jsx("body", {
              className: "mx-auto max-w-screen-md",
              children: e,
            }),
          });
        }
      },
      462: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => s });
        let s = (0, r(5347).createProxy)(
          String.raw`/Users/seungjian/Documents/development/sniper_project/project/src/app/login/page.tsx#default`,
        );
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
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [66], () => r(1962));
  module.exports = s;
})();
