(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [176],
  {
    3283: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 7852));
    },
    3145: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return s.a;
        },
      });
      var l = n(8461),
        s = n.n(l);
    },
    8461: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return i;
          },
          getImageProps: function () {
            return c;
          },
        });
      let l = n(7043),
        s = n(5346),
        r = n(5878),
        a = l._(n(5084));
      function c(e) {
        let { props: t } = (0, s.getImgProps)(e, {
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
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let i = r.Image;
    },
    3019: function (e, t, n) {
      "use strict";
      var l = n(7437);
      n(2265),
        (t.Z = (e) => {
          let { text: t, onClick: n, disabled: s } = e,
            r = s ? "bg-orange-100" : "bg-orange-600";
          return (0, l.jsx)("button", {
            className: "h-12 w-full rounded-lg "
              .concat(r, " ")
              .concat(s ? "text-orange-300" : "text-slate-200", " font-bold"),
            onClick: n,
            disabled: s,
            children: t,
          });
        });
    },
    4759: function (e, t, n) {
      "use strict";
      var l = n(7437);
      n(2265),
        (t.Z = (e) => {
          let { children: t } = e;
          return (0, l.jsx)("div", {
            className: "flex flex-col gap-2 py-6",
            children: t,
          });
        });
    },
    313: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var l = n(7437);
      n(2265);
      var s = n(3145),
        r = n(5475),
        a = (e) => {
          let { title: t, children: n } = e,
            a = (0, r.useRouter)();
          return (0, l.jsxs)("div", {
            className: "flex w-full flex-col gap-4 px-20 py-4",
            children: [
              (0, l.jsx)("button", {
                onClick: () => a.back(),
                children: (0, l.jsx)(s.default, {
                  src: "/assets/icons/icon_back.png",
                  alt: "뒤로가기 아이콘",
                  width: 34,
                  height: 34,
                }),
              }),
              (0, l.jsx)("h1", { children: t }),
              (0, l.jsx)("div", {
                className: "flex flex-col gap-4",
                children: n,
              }),
            ],
          });
        };
    },
    4020: function (e, t, n) {
      "use strict";
      var l = n(7437);
      n(2265),
        (t.Z = (e) => {
          let {
            title: t,
            placeholder: n,
            text: s,
            setText: r,
            required: a,
            limit: c,
          } = e;
          return (0, l.jsxs)("div", {
            className: "flex flex-col gap-1",
            children: [
              (0, l.jsxs)("div", {
                className: "flex justify-between gap-2",
                children: [
                  (0, l.jsxs)("div", {
                    children: [
                      t,
                      a &&
                        (0, l.jsx)("span", {
                          className: "text-red-500",
                          children: "*",
                        }),
                    ],
                  }),
                  c &&
                    (0, l.jsxs)("div", {
                      className: "text-slate-400",
                      children: [
                        s.length,
                        (0, l.jsxs)("span", {
                          className: "text-[12px] text-slate-600",
                          children: [" / ", c],
                        }),
                      ],
                    }),
                ],
              }),
              (0, l.jsx)("input", {
                type: "text",
                placeholder: n,
                value: s,
                onChange: (e) => r(e.currentTarget.value),
                className: "text-slate-600",
                maxLength: c,
              }),
            ],
          });
        });
    },
    7852: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n(7437),
        s = n(2265),
        r = n(313),
        a = n(4020),
        c = n(3019),
        i = n(4759);
      t.default = () => {
        let [e, t] = (0, s.useState)(""),
          [n, u] = (0, s.useState)("");
        return (0, l.jsxs)(r.Z, {
          title: "비디오 블록",
          children: [
            (0, l.jsx)(a.Z, {
              title: "동영상 URL",
              placeholder: "유튜브, 틱톡 등 좋아하는 동영상을 공유하세요",
              text: e,
              setText: t,
              required: !0,
            }),
            n && (0, l.jsx)("iframe", { src: n, className: "rounded-lg" }),
            (0, l.jsx)(i.Z, {
              children: (0, l.jsx)(c.Z, {
                text: "추가 완료",
                onClick: () => {
                  let t = (function (e) {
                    let t = e.match(
                      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
                    );
                    return t && 11 == t[7].length ? t[7] : null;
                  })(e);
                  u(t ? "https://www.youtube.com/embed/".concat(t) : e);
                },
                disabled: !e,
              }),
            }),
          ],
        });
      };
    },
  },
  function (e) {
    e.O(0, [878, 971, 117, 744], function () {
      return e((e.s = 3283));
    }),
      (_N_E = e.O());
  },
]);
