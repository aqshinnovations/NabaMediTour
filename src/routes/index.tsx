import Hospitals from "../Pages/Hospitals";
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home";
import Doctors from "../Pages/Doctors";
import DoctorsDetails from "../Pages/Doctors/Components/DoctorDetails";
import HospitalDetails from "../Pages/Hospitals/Compnents/HospitalDetails";
import BlogDetails from "../Pages/Blogs/Components/BlogDetails";
import ContactUs from "../Pages/ContactUs";
import Services from "../Pages/Services";

export const appRoutes = [
  { path: "/", element: <Home /> },

  { path: "/Doctors", element: <Doctors /> },
  { path: "/Doctors/:id", element: <DoctorsDetails /> },

  { path: "/Hospitals", element: <Hospitals /> },
  { path: "/Hospitals/:id", element: <HospitalDetails /> },

  { path: "/Services", element: <Services /> },

  { path: "/blogs", element: <Blogs /> },
  { path: "/blogs/:id", element: <BlogDetails /> },

  { path: "/contactUs", element: <ContactUs /> },
];
