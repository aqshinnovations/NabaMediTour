import Hospitals from "../Pages/Hospitals";
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home";
import Doctors from "../Pages/Doctors";
import DoctorsDetails from "../Pages/Doctors/doctorDetails";
import HospitalDetails from "../Pages/Hospitals/HospitalDetails";
// export const appRoutes = [
//   ...home,
//   ...hospitals,
//   ...doctors,
//   ...Blogs
// ];

export const appRoutes = [
  { path: "/", element: <Home /> },

  { path: "/Doctors", element: <Doctors /> },
  { path: "/Doctors/:id", element: <DoctorsDetails /> },

  { path: "/Hospitals", element: <Hospitals /> },
  { path: "/Hospitals/:id", element: <HospitalDetails /> },

  { path: "/Blogs", element: <Blogs /> },
];
