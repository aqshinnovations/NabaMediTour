import Hospitals from "../Pages/Hospitals";
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home";
import Doctors from "../Pages/Doctors";

// export const appRoutes = [
//   ...home,
//   ...hospitals,
//   ...doctors,
//   ...Blogs
// ];

export const appRoutes = [
  { path: "/", element: <Home /> },

  { path: "/Doctors", element: <Doctors /> },
  { path: "/Hospitals", element: <Hospitals /> },
  { path: "/Blogs", element: <Blogs /> },
];
