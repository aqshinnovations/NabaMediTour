export interface NavItem {
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  {
    label: "navbar.home",
    path: "/",
  },
  {
    label: "navbar.treatments",
    path: "/treatments",
  },

  {
    label: "navbar.doctors",
    path: "/doctors",
  },
  {
    label: "navbar.hospitals",
    path: "/hospitals",
  },

  {
    label: "navbar.blog",
    path: "/blogs",
  },
  {
    label: "navbar.services",
    path: "/Services",
  },
];
