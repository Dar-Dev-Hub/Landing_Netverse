import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.1,
    title: "Packs",
    newTab: false,
    path: "/#features",
  },
  
  {
    id: 2.2,
    title: "Recrutement",
    newTab: false,
    path: "/Recrutement",
  },
  // {
  //   id: 3,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "Blog Grid",
  //       newTab: false,
  //       path: "/blog",
  //     },
      
  //     {
  //       id: 35,
  //       title: "Docs",
  //       newTab: false,
  //       path: "/docs",
  //     },
  //     {
  //       id: 35.1,
  //       title: "Support",
  //       newTab: false,
  //       path: "/support",
  //     },
  //     {
  //       id: 36,
  //       title: "404",
  //       newTab: false,
  //       path: "/error",
  //     },
  //   ],
  // },

  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support",
  },
  {
    id: 5,
    title: "Sign In",
    newTab: false,
    path: "/auth/signin",
  },
  {
    id: 6,
    title: "Sign Up",
    newTab: false,
    path: "/auth/signup",
  },
 
];

export default menuData;
