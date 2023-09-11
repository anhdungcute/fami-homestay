const home = [
  {
    path: "",
    component: () => import("../layout/home.vue"),
    children: [
      {
        path: "",
        name: "home-first",
        component: () => import("../components/Main/Home/index.vue"),
      },
      {
        path: "detail-home",
        name: "detail-home",
        component: () => import("../components/Main/DetailHome/components/InfomationHomeStay/index.vue"),
      },
      {
        path: "",
        name: "about-us",
        component: () => import("../components/Main/AboutUs/index.vue"),
      },
      {
        path: "about-us-famihomestay",
        name: "about-us-homestay",
        component: () =>
          import("../components/Main/AboutUs/Introduce/index.vue"),
      },
      {
        path: "",
        name: "contact",
        component: () => import("../components/Main/Contact/index.vue"),
      },
      {
        path: "management-homestay",
        name: "management",
        component: () => import("../components/Management/index.vue"),
      },
    ],
  },
];

export default home;
