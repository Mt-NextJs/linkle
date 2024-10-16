(() => {
  var e = {};
  (e.id = 280),
    (e.ids = [280]),
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
      5438: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => s.Z,
            __next_app__: () => c,
            originalPathname: () => u,
            pages: () => d,
            routeModule: () => p,
            tree: () => l,
          }),
          r(2906),
          r(3733),
          r(9198);
        var i = r(170),
          n = r(5002),
          s = r(4512),
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
        let l = [
            "",
            {
              children: [
                "(intro)",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 2906)),
                        "/Users/seungjian/Documents/development/sniper_project/project/src/app/(intro)/page.tsx",
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
            "/Users/seungjian/Documents/development/sniper_project/project/src/app/(intro)/page.tsx",
          ],
          u = "/(intro)/page",
          c = { require: r, loadChunk: () => Promise.resolve() },
          p = new i.AppPageRouteModule({
            definition: {
              kind: n.x.APP_PAGE,
              page: "/(intro)/page",
              pathname: "/",
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
      499: (e, t, r) => {
        Promise.resolve().then(r.t.bind(r, 5889, 23)),
          Promise.resolve().then(r.t.bind(r, 4080, 23));
      },
      3518: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 5908));
      },
      1357: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 5295));
      },
      3991: () => {},
      5908: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => n });
        var i = r(7247);
        function n() {
          return i.jsx("div", {
            children: i.jsx("h1", { children: "GLOBAL ERROR PAGE!!" }),
          });
        }
      },
      5295: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => n });
        var i = r(7247);
        function n() {
          return i.jsx("div", {
            children: i.jsx("h1", { children: "NOT FOUND PAGE" }),
          });
        }
      },
      3476: (e, t, r) => {
        "use strict";
        let { createProxy: i } = r(5347);
        e.exports = i(
          "/Users/seungjian/Documents/development/sniper_project/project/node_modules/next/dist/client/image-component.js",
        );
      },
      5949: (e, t, r) => {
        "use strict";
        let { createProxy: i } = r(5347);
        e.exports = i(
          "/Users/seungjian/Documents/development/sniper_project/project/node_modules/next/dist/client/link.js",
        );
      },
      3297: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "getImgProps", {
            enumerable: !0,
            get: function () {
              return a;
            },
          }),
          r(3516);
        let i = r(7844),
          n = r(9659);
        function s(e) {
          return void 0 !== e.default;
        }
        function o(e) {
          return void 0 === e
            ? e
            : "number" == typeof e
              ? Number.isFinite(e)
                ? e
                : NaN
              : "string" == typeof e && /^[0-9]+$/.test(e)
                ? parseInt(e, 10)
                : NaN;
        }
        function a(e, t) {
          var r;
          let a,
            l,
            d,
            {
              src: u,
              sizes: c,
              unoptimized: p = !1,
              priority: m = !1,
              loading: f,
              className: g,
              quality: h,
              width: v,
              height: b,
              fill: j = !1,
              style: x,
              overrideSrc: _,
              onLoad: w,
              onLoadingComplete: y,
              placeholder: P = "empty",
              blurDataURL: O,
              fetchPriority: S,
              layout: E,
              objectFit: M,
              objectPosition: N,
              lazyBoundary: C,
              lazyRoot: I,
              ...D
            } = e,
            {
              imgConf: z,
              showAltText: A,
              blurComplete: G,
              defaultLoader: R,
            } = t,
            k = z || n.imageConfigDefault;
          if ("allSizes" in k) a = k;
          else {
            let e = [...k.deviceSizes, ...k.imageSizes].sort((e, t) => e - t),
              t = k.deviceSizes.sort((e, t) => e - t);
            a = { ...k, allSizes: e, deviceSizes: t };
          }
          if (void 0 === R)
            throw Error(
              "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
            );
          let L = D.loader || R;
          delete D.loader, delete D.srcSet;
          let U = "__next_img_default" in L;
          if (U) {
            if ("custom" === a.loader)
              throw Error(
                'Image with src "' +
                  u +
                  '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader',
              );
          } else {
            let e = L;
            L = (t) => {
              let { config: r, ...i } = t;
              return e(i);
            };
          }
          if (E) {
            "fill" === E && (j = !0);
            let e = {
              intrinsic: { maxWidth: "100%", height: "auto" },
              responsive: { width: "100%", height: "auto" },
            }[E];
            e && (x = { ...x, ...e });
            let t = { responsive: "100vw", fill: "100vw" }[E];
            t && !c && (c = t);
          }
          let q = "",
            B = o(v),
            F = o(b);
          if ("object" == typeof (r = u) && (s(r) || void 0 !== r.src)) {
            let e = s(u) ? u.default : u;
            if (!e.src)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                  JSON.stringify(e),
              );
            if (!e.height || !e.width)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                  JSON.stringify(e),
              );
            if (
              ((l = e.blurWidth),
              (d = e.blurHeight),
              (O = O || e.blurDataURL),
              (q = e.src),
              !j)
            ) {
              if (B || F) {
                if (B && !F) {
                  let t = B / e.width;
                  F = Math.round(e.height * t);
                } else if (!B && F) {
                  let t = F / e.height;
                  B = Math.round(e.width * t);
                }
              } else (B = e.width), (F = e.height);
            }
          }
          let T = !m && ("lazy" === f || void 0 === f);
          (!(u = "string" == typeof u ? u : q) ||
            u.startsWith("data:") ||
            u.startsWith("blob:")) &&
            ((p = !0), (T = !1)),
            a.unoptimized && (p = !0),
            U && u.endsWith(".svg") && !a.dangerouslyAllowSVG && (p = !0),
            m && (S = "high");
          let W = o(h),
            V = Object.assign(
              j
                ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: M,
                    objectPosition: N,
                  }
                : {},
              A ? {} : { color: "transparent" },
              x,
            ),
            Y =
              G || "empty" === P
                ? null
                : "blur" === P
                  ? 'url("data:image/svg+xml;charset=utf-8,' +
                    (0, i.getImageBlurSvg)({
                      widthInt: B,
                      heightInt: F,
                      blurWidth: l,
                      blurHeight: d,
                      blurDataURL: O || "",
                      objectFit: V.objectFit,
                    }) +
                    '")'
                  : 'url("' + P + '")',
            J = Y
              ? {
                  backgroundSize: V.objectFit || "cover",
                  backgroundPosition: V.objectPosition || "50% 50%",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: Y,
                }
              : {},
            K = (function (e) {
              let {
                config: t,
                src: r,
                unoptimized: i,
                width: n,
                quality: s,
                sizes: o,
                loader: a,
              } = e;
              if (i) return { src: r, srcSet: void 0, sizes: void 0 };
              let { widths: l, kind: d } = (function (e, t, r) {
                  let { deviceSizes: i, allSizes: n } = e;
                  if (r) {
                    let e = /(^|\s)(1?\d?\d)vw/g,
                      t = [];
                    for (let i; (i = e.exec(r)); i) t.push(parseInt(i[2]));
                    if (t.length) {
                      let e = 0.01 * Math.min(...t);
                      return {
                        widths: n.filter((t) => t >= i[0] * e),
                        kind: "w",
                      };
                    }
                    return { widths: n, kind: "w" };
                  }
                  return "number" != typeof t
                    ? { widths: i, kind: "w" }
                    : {
                        widths: [
                          ...new Set(
                            [t, 2 * t].map(
                              (e) => n.find((t) => t >= e) || n[n.length - 1],
                            ),
                          ),
                        ],
                        kind: "x",
                      };
                })(t, n, o),
                u = l.length - 1;
              return {
                sizes: o || "w" !== d ? o : "100vw",
                srcSet: l
                  .map(
                    (e, i) =>
                      a({ config: t, src: r, quality: s, width: e }) +
                      " " +
                      ("w" === d ? e : i + 1) +
                      d,
                  )
                  .join(", "),
                src: a({ config: t, src: r, quality: s, width: l[u] }),
              };
            })({
              config: a,
              src: u,
              unoptimized: p,
              width: B,
              quality: W,
              sizes: c,
              loader: L,
            });
          return {
            props: {
              ...D,
              loading: T ? "lazy" : f,
              fetchPriority: S,
              width: B,
              height: F,
              decoding: "async",
              className: g,
              style: { ...V, ...J },
              sizes: K.sizes,
              srcSet: K.srcSet,
              src: _ || K.src,
            },
            meta: { unoptimized: p, priority: m, placeholder: P, fill: j },
          };
        }
      },
      7844: (e, t) => {
        "use strict";
        function r(e) {
          let {
              widthInt: t,
              heightInt: r,
              blurWidth: i,
              blurHeight: n,
              blurDataURL: s,
              objectFit: o,
            } = e,
            a = i ? 40 * i : t,
            l = n ? 40 * n : r,
            d = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
          return (
            "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
            d +
            "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
            (d
              ? "none"
              : "contain" === o
                ? "xMidYMid"
                : "cover" === o
                  ? "xMidYMid slice"
                  : "none") +
            "' style='filter: url(%23b);' href='" +
            s +
            "'/%3E%3C/svg%3E"
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "getImageBlurSvg", {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
      },
      9659: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            VALID_LOADERS: function () {
              return r;
            },
            imageConfigDefault: function () {
              return i;
            },
          });
        let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
          i = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy:
              "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "inline",
            remotePatterns: [],
            unoptimized: !1,
          };
      },
      7492: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            default: function () {
              return l;
            },
            getImageProps: function () {
              return a;
            },
          });
        let i = r(6484),
          n = r(3297),
          s = r(3476),
          o = i._(r(4363));
        function a(e) {
          let { props: t } = (0, n.getImgProps)(e, {
            defaultLoader: o.default,
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
        let l = s.Image;
      },
      4363: (e, t) => {
        "use strict";
        function r(e) {
          let { config: t, src: r, width: i, quality: n } = e;
          return (
            t.path +
            "?url=" +
            encodeURIComponent(r) +
            "&w=" +
            i +
            "&q=" +
            (n || 75)
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return i;
            },
          }),
          (r.__next_img_default = !0);
        let i = r;
      },
      3516: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "warnOnce", {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
        let r = (e) => {};
      },
      2906: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => d });
        var i = r(2051),
          n = r(7492),
          s = r.n(n),
          o = r(5949),
          a = r.n(o);
        let l = { LOGIN: "/login", ADMIN: "/admin" };
        function d() {
          return (0, i.jsxs)("div", {
            className: "flex w-full flex-col items-center py-10",
            children: [
              i.jsx(s(), {
                className: "dark:invert",
                src: "https://nextjs.org/icons/next.svg",
                alt: "Next.js logo",
                width: 180,
                height: 38,
                priority: !0,
              }),
              i.jsx(a(), {
                href: l.LOGIN,
                className: "button color",
                children: "시작하기",
              }),
              i.jsx(a(), {
                href: l.ADMIN,
                className: "button color",
                children: "관리자",
              }),
            ],
          });
        }
      },
      4512: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => i });
        let i = (0, r(5347).createProxy)(
          String.raw`/Users/seungjian/Documents/development/sniper_project/project/src/app/global-error.tsx#default`,
        );
      },
      3733: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => s, metadata: () => n });
        var i = r(2051);
        r(2155), r(821);
        let n = {
          title: { template: "%s | IN MY LINK", default: "IN MY LINK" },
          description: "BOOMCO co.",
        };
        function s({ children: e }) {
          return i.jsx("html", {
            lang: "en",
            children: i.jsx("body", {
              className: "mx-auto max-w-screen-md",
              children: e,
            }),
          });
        }
      },
      9198: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => i });
        let i = (0, r(5347).createProxy)(
          String.raw`/Users/seungjian/Documents/development/sniper_project/project/src/app/not-found.tsx#default`,
        );
      },
      821: () => {},
      2155: () => {},
      6484: (e, t, r) => {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        r.r(t), r.d(t, { _: () => i, _interop_require_default: () => i });
      },
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    i = t.X(0, [66, 889, 80], () => r(5438));
  module.exports = i;
})();
