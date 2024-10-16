(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3],
  {
    108: function (e, s, t) {
      Promise.resolve().then(t.bind(t, 3531));
    },
    3145: function (e, s, t) {
      "use strict";
      t.d(s, {
        default: function () {
          return n.a;
        },
      });
      var a = t(8461),
        n = t.n(a);
    },
    8461: function (e, s, t) {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (function (e, s) {
          for (var t in s)
            Object.defineProperty(e, t, { enumerable: !0, get: s[t] });
        })(s, {
          default: function () {
            return c;
          },
          getImageProps: function () {
            return i;
          },
        });
      let a = t(7043),
        n = t(5346),
        r = t(5878),
        l = a._(t(5084));
      function i(e) {
        let { props: s } = (0, n.getImgProps)(e, {
          defaultLoader: l.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !0,
            unoptimized: !1,
          },
        });
        for (let [e, t] of Object.entries(s)) void 0 === t && delete s[e];
        return { props: s };
      }
      let c = r.Image;
    },
    3531: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return d;
          },
        });
      var a = t(7437),
        n = t(3145),
        r = t(2265);
      function l() {
        let [e, s] = (0, r.useState)(!1);
        return (0, a.jsx)("button", {
          onClick: () => s(!e),
          className:
            "flex h-6 w-12 items-center rounded-full p-1 transition duration-300 ease-in-out ".concat(
              e ? "bg-indigo-400" : "bg-gray-300",
            ),
          children: (0, a.jsx)("div", {
            className:
              "h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ".concat(
                e ? "translate-x-6" : "translate-x-0",
              ),
          }),
        });
      }
      function i(e) {
        let { title: s, index: t, setTop: i, setBottom: c } = e,
          [o, d] = (0, r.useState)(!1);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: "flex h-36 w-full rounded border",
              children: [
                (0, a.jsxs)("div", {
                  className: "relative w-[5%]",
                  children: [
                    (0, a.jsx)("div", {
                      className: "h-10 border bg-slate-100 hover:bg-slate-200",
                      children: (0, a.jsx)("button", {
                        onClick: () => i(t),
                        children: (0, a.jsx)(n.default, {
                          className: "ml-[8px] mt-[7px]",
                          src: "/assets/icons/icon_arrow_up.png",
                          alt: "arrow_up",
                          width: 20,
                          height: 30,
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "h-16 cursor-pointer border bg-slate-100 hover:bg-slate-200",
                      children: (0, a.jsx)(n.default, {
                        className: "ml-[6.5px] mt-[17px]",
                        src: "/assets/icons/icon_grabber.png",
                        alt: "grabber",
                        width: 25,
                        height: 40,
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "h-10 border bg-slate-100 hover:bg-slate-200",
                      children: (0, a.jsx)("button", {
                        onClick: () => c(t),
                        children: (0, a.jsx)(n.default, {
                          className: "ml-[8px] mt-[7px]",
                          src: "/assets/icons/icon_arrow.png",
                          alt: "arrow_down",
                          width: 20,
                          height: 30,
                        }),
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "grid h-full w-full",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex h-[32px] items-center justify-between",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center",
                          children: [
                            (0, a.jsx)(n.default, {
                              className: "ml-2",
                              src: (function (e) {
                                switch (e) {
                                  case "이벤트":
                                  default:
                                    return "/assets/icons/icon_gift.png";
                                  case "캘린더":
                                    return "/assets/icons/icon_calendar.png";
                                  case "동영상":
                                    return "/assets/icons/icon_video.png";
                                  case "구분선":
                                    return "/assets/icons/icon_divide.png";
                                  case "이미지":
                                    return "/assets/icons/icon_image.png";
                                  case "텍스트":
                                    return "/assets/icons/icon_text.png";
                                  case "링크":
                                    return "/assets/icons/icon_link.png";
                                }
                              })(s),
                              alt: "title_icon",
                              width: 30,
                              height: 20,
                            }),
                            (0, a.jsx)("div", {
                              className: "ml-[4px] font-bold text-orange-600",
                              children: s,
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "ml-auto flex items-center space-x-2",
                          children: [
                            (0, a.jsx)(l, {}),
                            (0, a.jsxs)("button", {
                              onClick: function () {
                                d(!o);
                              },
                              className: "hover:bg-slate-200",
                              children: [
                                (0, a.jsx)(n.default, {
                                  src: "/assets/icons/icon_menu_dot.png",
                                  alt: "menu_dot",
                                  width: 20,
                                  height: 20,
                                  className: "ml-1 mt-[6px]",
                                }),
                                o &&
                                  (0, a.jsx)("div", {
                                    className:
                                      "absolute mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg",
                                    children: (0, a.jsxs)("ul", {
                                      className: "py-1",
                                      children: [
                                        (0, a.jsx)("li", {
                                          className:
                                            "border-b px-4 py-2 font-bold hover:bg-slate-200",
                                          children: "상단에 고정",
                                        }),
                                        (0, a.jsx)("li", {
                                          className:
                                            "border-b px-4 py-2 font-bold hover:bg-slate-200",
                                          children: "보관",
                                        }),
                                        (0, a.jsx)("li", {
                                          className:
                                            "px-4 py-2 font-bold hover:bg-slate-200",
                                          children: "삭제",
                                        }),
                                      ],
                                    }),
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", { className: "h-[80px]" }),
                    (0, a.jsx)("div", { className: "h-[32px]" }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("br", {}),
          ],
        });
      }
      var c = t(2972),
        o = t.n(c);
      function d() {
        (0, r.useEffect)(() => {
          let e = sessionStorage.getItem("token");
          (async () => {
            try {
              let t = await fetch("http://43.201.21.97:3002/api/user/visitor", {
                method: "GET",
                headers: { Authorization: "Bearer ".concat(e) },
              });
              if (t.ok) {
                let e = await t.json();
                l(e.data.today), d(e.data.realTime), s(e.data.total);
              } else alert("방문자 조회 실패");
            } catch (e) {
              alert("연결 실패");
            }
          })();
        }, []);
        let [e, s] = (0, r.useState)("0"),
          [t, l] = (0, r.useState)("0"),
          [c, d] = (0, r.useState)("0"),
          [u, h] = (0, r.useState)([
            "이벤트",
            "캘린더",
            "동영상",
            "구분선",
            "이미지",
            "텍스트",
            "링크",
          ]);
        function m(e) {
          h((s) => {
            let t = [...s],
              [a] = t.splice(e, 1);
            return t.unshift(a), t;
          });
        }
        function x(e) {
          h((s) => {
            let t = [...s],
              [a] = t.splice(e, 1);
            return t.push(a), t;
          });
        }
        return (0, a.jsxs)("div", {
          children: [
            (0, a.jsx)("div", {
              className: "h-36 items-center border",
              children: (0, a.jsxs)("div", {
                className: "items-center border text-center",
                children: [
                  (0, a.jsx)(n.default, {
                    src: "/assets/icons/icon_profile.png",
                    alt: "profile",
                    className: "ml-[44%] cursor-pointer",
                    width: 80,
                    height: 20,
                  }),
                  (0, a.jsx)(o(), {
                    href: "/",
                    className: "mr-5",
                    children: "momomoc",
                  }),
                ],
              }),
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsxs)("div", {
              className: "flex w-full rounded border",
              children: [
                (0, a.jsxs)("div", {
                  className: "grid w-8/12 rounded-l border",
                  children: [
                    (0, a.jsx)("h3", {
                      className: "ml-2 font-bold",
                      children: "방문자",
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex",
                      children: [
                        (0, a.jsxs)("p", {
                          className: "ml-2",
                          children: ["전체 ", e],
                        }),
                        (0, a.jsxs)("p", {
                          className: "ml-2",
                          children: ["오늘 ", t],
                        }),
                        (0, a.jsxs)("p", {
                          className: "ml-2",
                          children: ["실시간 ", c],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "w-4/12 rounded-r border",
                  children: [
                    (0, a.jsx)("h3", {
                      className: "ml-2 font-bold",
                      children: "소식받기",
                    }),
                    (0, a.jsx)("p", { className: "ml-2", children: "전체" }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsxs)("div", {
              className: "flex gap-1",
              children: [
                (0, a.jsx)("h1", {
                  className: "font-bold",
                  children: "블록 리스트",
                }),
                (0, a.jsxs)("div", {
                  className: "group relative inline-block",
                  children: [
                    (0, a.jsx)(n.default, {
                      src: "/assets/icons/icon_question.png",
                      alt: "question",
                      width: 20,
                      height: 20,
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "absolute left-full top-1/2 w-max -translate-y-1/2 translate-x-2 transform rounded bg-slate-400 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                      children:
                        "블록을 편집하거나 배치 순서를 변경할 수 있습니다",
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsxs)("div", {
              className:
                "h-64 items-center rounded border bg-slate-100 text-center align-middle",
              children: [
                (0, a.jsx)(n.default, {
                  className: "mb-[10px] ml-[44%] mt-[17px]",
                  src: "/assets/icons/icon_empty.png",
                  alt: "arrow_down",
                  width: 80,
                  height: 40,
                }),
                (0, a.jsx)("p", { children: "지금 공개된 링크가 없다..." }),
                (0, a.jsxs)("p", {
                  children: [
                    (0, a.jsx)("strong", {
                      className: "cursor-pointer",
                      children: "소식받기",
                    }),
                    " 버튼을 눌러다오",
                  ],
                }),
                (0, a.jsx)("p", {
                  children: "새로운 링크가 생기면 알려줌.,..",
                }),
              ],
            }),
            (0, a.jsx)("br", {}),
            u.map((e, s) =>
              (0, a.jsx)(i, { title: e, index: s, setTop: m, setBottom: x }, s),
            ),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [878, 972, 971, 117, 744], function () {
      return e((e.s = 108));
    }),
      (_N_E = e.O());
  },
]);
