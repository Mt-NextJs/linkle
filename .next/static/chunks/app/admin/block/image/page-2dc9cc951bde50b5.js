(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [93],
  {
    2313: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 3537));
    },
    3145: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return l.a;
        },
      });
      var r = s(8461),
        l = s.n(r);
    },
    8461: function (e, t, s) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var s in t)
            Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
        })(t, {
          default: function () {
            return c;
          },
          getImageProps: function () {
            return i;
          },
        });
      let r = s(7043),
        l = s(5346),
        n = s(5878),
        a = r._(s(5084));
      function i(e) {
        let { props: t } = (0, l.getImgProps)(e, {
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
        for (let [e, s] of Object.entries(t)) void 0 === s && delete t[e];
        return { props: t };
      }
      let c = n.Image;
    },
    3019: function (e, t, s) {
      "use strict";
      var r = s(7437);
      s(2265),
        (t.Z = (e) => {
          let { text: t, onClick: s, disabled: l } = e,
            n = l ? "bg-orange-100" : "bg-orange-600";
          return (0, r.jsx)("button", {
            className: "h-12 w-full rounded-lg "
              .concat(n, " ")
              .concat(l ? "text-orange-300" : "text-slate-200", " font-bold"),
            onClick: s,
            disabled: l,
            children: t,
          });
        });
    },
    4759: function (e, t, s) {
      "use strict";
      var r = s(7437);
      s(2265),
        (t.Z = (e) => {
          let { children: t } = e;
          return (0, r.jsx)("div", {
            className: "flex flex-col gap-2 py-6",
            children: t,
          });
        });
    },
    313: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = s(7437);
      s(2265);
      var l = s(3145),
        n = s(5475),
        a = (e) => {
          let { title: t, children: s } = e,
            a = (0, n.useRouter)();
          return (0, r.jsxs)("div", {
            className: "flex w-full flex-col gap-4 px-20 py-4",
            children: [
              (0, r.jsx)("button", {
                onClick: () => a.back(),
                children: (0, r.jsx)(l.default, {
                  src: "/assets/icons/icon_back.png",
                  alt: "뒤로가기 아이콘",
                  width: 34,
                  height: 34,
                }),
              }),
              (0, r.jsx)("h1", { children: t }),
              (0, r.jsx)("div", {
                className: "flex flex-col gap-4",
                children: s,
              }),
            ],
          });
        };
    },
    4020: function (e, t, s) {
      "use strict";
      var r = s(7437);
      s(2265),
        (t.Z = (e) => {
          let {
            title: t,
            placeholder: s,
            text: l,
            setText: n,
            required: a,
            limit: i,
          } = e;
          return (0, r.jsxs)("div", {
            className: "flex flex-col gap-1",
            children: [
              (0, r.jsxs)("div", {
                className: "flex justify-between gap-2",
                children: [
                  (0, r.jsxs)("div", {
                    children: [
                      t,
                      a &&
                        (0, r.jsx)("span", {
                          className: "text-red-500",
                          children: "*",
                        }),
                    ],
                  }),
                  i &&
                    (0, r.jsxs)("div", {
                      className: "text-slate-400",
                      children: [
                        l.length,
                        (0, r.jsxs)("span", {
                          className: "text-[12px] text-slate-600",
                          children: [" / ", i],
                        }),
                      ],
                    }),
                ],
              }),
              (0, r.jsx)("input", {
                type: "text",
                placeholder: s,
                value: l,
                onChange: (e) => n(e.currentTarget.value),
                className: "text-slate-600",
                maxLength: i,
              }),
            ],
          });
        });
    },
    3537: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return f;
          },
        });
      var r = s(7437),
        l = s(2265),
        n = s(313),
        a = s(4020),
        i = s(3019),
        c = s(4759),
        o = s(3145);
      class u extends l.Component {
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
        constructor(e) {
          super(e), (this.state = { hasError: !1 });
        }
      }
      var d = (e) => {
          let { handeInputImageClick: t, selectedImageUrl: s } = e;
          return (0, r.jsxs)("div", {
            className: "relative overflow-hidden rounded",
            children: [
              (0, r.jsx)("button", {
                onClick: t,
                className:
                  "absolute right-2 top-2 rounded-3xl bg-orange-600 p-2",
                children: (0, r.jsx)(o.default, {
                  src: "/assets/icons/icon_pencil.png",
                  alt: "연필 아이콘",
                  width: 24,
                  height: 24,
                }),
              }),
              (0, r.jsx)(u, {
                fallback: (0, r.jsx)(o.default, {
                  src: "/assets/images/image_block_default.png",
                  alt: "기본이미지 혹은 선택한 이미지",
                  width: 610,
                  height: 610,
                }),
                children: (0, r.jsx)(o.default, {
                  src: s || "/assets/images/image_block_default.png",
                  alt: "기본이미지 혹은 선택한 이미지",
                  width: 610,
                  height: 610,
                }),
              }),
            ],
          });
        },
        f = () => {
          let e = (0, l.useRef)(null),
            [t, s] = (0, l.useState)(""),
            [o, u] = (0, l.useState)(""),
            [f, h] = (0, l.useState)(""),
            [x, g] = (0, l.useState)(""),
            [p, m] = (0, l.useState)(""),
            v = (e) => /^http[s]?\:\/\//i.test(e);
          return (0, r.jsxs)(n.Z, {
            title: "이미지 블록",
            children: [
              (0, r.jsx)(a.Z, {
                title: "이미지",
                text: t,
                setText: s,
                placeholder: "원하는 이미지 URL을 입력하세요",
                required: !0,
              }),
              (0, r.jsx)("input", {
                id: "file",
                ref: e,
                type: "file",
                accept: "image/*",
                style: { display: "none" },
                onChange: (e) => {
                  var t;
                  let s =
                    null === (t = e.target.files) || void 0 === t
                      ? void 0
                      : t[0];
                  if (!s) return;
                  let r = new FileReader();
                  (r.onload = (e) => {
                    var t;
                    let s =
                      null === (t = e.target) || void 0 === t
                        ? void 0
                        : t.result;
                    "string" == typeof s && u(s);
                  }),
                    r.readAsDataURL(s);
                },
              }),
              (0, r.jsx)(d, {
                selectedImageUrl: p,
                handeInputImageClick: () => {
                  var t;
                  null === (t = e.current) || void 0 === t || t.click();
                },
              }),
              (0, r.jsx)(a.Z, {
                title: "타이틀",
                text: f,
                setText: h,
                placeholder: "이미지 하단에 함께 보여줄 수 있어요",
                limit: 30,
              }),
              (0, r.jsx)(a.Z, {
                title: "연결할 주소",
                text: x,
                setText: g,
                placeholder: "이미지를 통해 이동시키고 싶은 링크가 있나요?",
              }),
              (0, r.jsx)(c.Z, {
                children: (0, r.jsx)(i.Z, {
                  text: "추가 완료",
                  onClick: () => {
                    if (!v(t)) {
                      alert("이미지 URL을 확인해주세요.");
                      return;
                    }
                    m(t || o);
                  },
                  disabled: !t,
                }),
              }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [878, 971, 117, 744], function () {
      return e((e.s = 2313));
    }),
      (_N_E = e.O());
  },
]);
