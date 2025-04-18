import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/aboutpage",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 33,
    title: "Jobs",
    path: "/jobpage",
    newTab: false,
  },
  {
    id: 4,
    title: "Quick links",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About us",
        path: "/aboutpage",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact us",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog",
        path: "/blogpage",
        newTab: false,
      },
     
    
    ],
  },
];
export default menuData;
