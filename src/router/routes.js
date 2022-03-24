import IndexLayout from "./layouts/Index.vue"

export default [
  {
    path: "",
    component: IndexLayout,
    children: [
      {
        path: "",
        redirect: {
          name: "main",
        },
      },
      {
        path: "/main",
        name: "main",
        component: () => import("@/views/Main"),
      },
    ],
  },
  {
    path: "/error/:errCode",
    name: "error",
    props: true,
    component: () => import("@/views/Error"),
  },
  {
    path: "*",
    redirect: {
      name: "error",
      params: {
        errCode: "notFound",
      },
    },
  },
]
