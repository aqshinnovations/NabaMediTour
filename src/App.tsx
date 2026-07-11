import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./routes";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // required for styling
import "react-phone-number-input/style.css";
import "react-phone-input-2/lib/style.css";

function App() {
  return (
    <div>
      <Navbar />

      <Header />
      <ToastContainer />

      <WhatsAppButton />
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
