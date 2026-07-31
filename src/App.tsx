import "./App.css";
import Navbar from "./components/Navbar2";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // required for styling
import "react-phone-number-input/style.css";
import "react-phone-input-2/lib/style.css";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div>
      <Navbar />

      {/* <Header /> */}
      <ToastContainer />
      <ScrollToTop />

      {/* <WhatsAppButton /> */}
      <Routes>
        {appRoutes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
