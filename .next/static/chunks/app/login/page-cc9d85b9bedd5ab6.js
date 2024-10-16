(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [626],
  {
    9474: function (t, e, n) {
      Promise.resolve().then(n.bind(n, 8991));
    },
    8991: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return o;
          },
        });
      var s = n(7437),
        a = n(2265);
      function o() {
        let [t, e] = (0, a.useState)(""),
          [n, o] = (0, a.useState)("");
        async function i(e) {
          e.preventDefault();
          try {
            let e = await fetch("http://43.201.21.97:3002/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: t, password: n }),
              }),
              s = await e.json();
            e.ok
              ? (alert("성공"), sessionStorage.setItem("token", s.data.token))
              : alert("실패");
          } catch (t) {
            console.log(t);
          }
        }
        return (0, s.jsx)("div", {
          children: (0, s.jsxs)("form", {
            onSubmit: i,
            children: [
              (0, s.jsxs)("label", {
                htmlFor: "id",
                children: [
                  "id",
                  (0, s.jsx)("input", {
                    type: "text",
                    id: "id",
                    value: t,
                    onChange: (t) => e(t.target.value),
                  }),
                ],
              }),
              (0, s.jsxs)("label", {
                htmlFor: "password",
                children: [
                  "password",
                  (0, s.jsx)("input", {
                    type: "password",
                    id: "password",
                    value: n,
                    onChange: (t) => o(t.target.value),
                  }),
                ],
              }),
              (0, s.jsx)("button", { type: "submit", children: "로그인" }),
            ],
          }),
        });
      }
    },
  },
  function (t) {
    t.O(0, [971, 117, 744], function () {
      return t((t.s = 9474));
    }),
      (_N_E = t.O());
  },
]);
