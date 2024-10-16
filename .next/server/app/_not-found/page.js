(() => {
  var e = {};
  (e.id = 409),
    (e.ids = [409]),
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
      8621: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => s.Z,
            __next_app__: () => c,
            originalPathname: () => u,
            pages: () => a,
            routeModule: () => p,
            tree: () => d,
          }),
          r(996),
          r(9198),
          r(3733);
        var n = r(170),
          o = r(5002),
          s = r(4512),
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
        let d = [
            "",
            {
              children: [
                "/_not-found",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 9198)),
                        "/Users/seungjian/Documents/development/sniper_project/project/src/app/not-found.tsx",
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
          a = [],
          u = "/_not-found/page",
          c = { require: r, loadChunk: () => Promise.resolve() },
          p = new n.AppPageRouteModule({
            definition: {
              kind: o.x.APP_PAGE,
              page: "/_not-found/page",
              pathname: "/_not-found",
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
        r.r(t), r.d(t, { default: () => o });
        var n = r(7247);
        function o() {
          return n.jsx("div", {
            children: n.jsx("h1", { children: "GLOBAL ERROR PAGE!!" }),
          });
        }
      },
      5295: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => o });
        var n = r(7247);
        function o() {
          return n.jsx("div", {
            children: n.jsx("h1", { children: "NOT FOUND PAGE" }),
          });
        }
      },
      996: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return s;
            },
          }),
          r(6484);
        let n = r(2051);
        r(6269);
        let o = {
          error: {
            fontFamily:
              'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
            height: "100vh",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
          desc: { display: "inline-block" },
          h1: {
            display: "inline-block",
            margin: "0 20px 0 0",
            padding: "0 23px 0 0",
            fontSize: 24,
            fontWeight: 500,
            verticalAlign: "top",
            lineHeight: "49px",
          },
          h2: { fontSize: 14, fontWeight: 400, lineHeight: "49px", margin: 0 },
        };
        function s() {
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("title", {
                children: "404: This page could not be found.",
              }),
              (0, n.jsx)("div", {
                style: o.error,
                children: (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("style", {
                      dangerouslySetInnerHTML: {
                        __html:
                          "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}",
                      },
                    }),
                    (0, n.jsx)("h1", {
                      className: "next-error-h1",
                      style: o.h1,
                      children: "404",
                    }),
                    (0, n.jsx)("div", {
                      style: o.desc,
                      children: (0, n.jsx)("h2", {
                        style: o.h2,
                        children: "This page could not be found.",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      4512: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => n });
        let n = (0, r(5347).createProxy)(
          String.raw`/Users/seungjian/Documents/development/sniper_project/project/src/app/global-error.tsx#default`,
        );
      },
      3733: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => s, metadata: () => o });
        var n = r(2051);
        r(2155), r(821);
        let o = {
          title: { template: "%s | IN MY LINK", default: "IN MY LINK" },
          description: "BOOMCO co.",
        };
        function s({ children: e }) {
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
      6484: (e, t, r) => {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        r.r(t), r.d(t, { _: () => n, _interop_require_default: () => n });
      },
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [66], () => r(8621));
  module.exports = n;
})();
