export interface NavItem {
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Treatments",
    path: "/treatments",
  },

  {
    label: "Doctors",
    path: "/doctors",
  },
  {
    label: "Hospitals",
    path: "/hospitals",
  },
  // {
  //   label: "Technology",
  //   path: "/technology",
  // },
  {
    label: "Blog",
    path: "/blogs",
  },
  // {
  //   label: "Contact",
  //   path: "/contact",
  // },
];
