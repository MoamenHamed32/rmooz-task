import "./App.css";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Navbar from "./Components/navbar/Navbar";
import PageContent from "./Components/pages/PageContent";
import ProductDetails from "./Components/productDetails/ProductDetails";
import Sidebar from "./Components/sideBar/Sidebar";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <section className="page_content">
        <Routes>
          <Route
            path="/"
            element={
              <div className="content_container mx-auto py-5 d-flex justify-content-between">
                <Sidebar />
                <PageContent />
              </div>
            }
          />
          <Route
            path="/rings"
            element={
              <div className="content_container mx-auto py-5 d-flex justify-content-between">
                <Sidebar />
                <PageContent />
              </div>
            }
          />
          <Route
            path="/necklaces"
            element={
              <div className="content_container mx-auto py-5 d-flex justify-content-between">
                <Sidebar />
                <PageContent />
              </div>
            }
          />
          <Route
            path="/watches"
            element={
              <div className="content_container mx-auto py-5 d-flex justify-content-between">
                <Sidebar />
                <PageContent />
              </div>
            }
          />
          <Route
            path="/earrings"
            element={
              <div className="content_container mx-auto py-5 d-flex justify-content-between">
                <Sidebar />
                <PageContent />
              </div>
            }
          />
          <Route
            path="/braceletes"
            element={
              <div className="content_container mx-auto py-5 d-flex justify-content-between">
                <Sidebar />
                <PageContent />
              </div>
            }
          />
          <Route
            path="/anklet"
            element={
              <div className="content_container mx-auto py-5 d-flex justify-content-between">
                <Sidebar />
                <PageContent />
              </div>
            }
          />
          <Route
            path="/noseraings"
            element={
              <div className="content_container mx-auto py-5 d-flex justify-content-between">
                <Sidebar />
                <PageContent />
              </div>
            }
          />
          <Route path="/details" element={<ProductDetails />} />
        </Routes>
        {/* <div className="content_container mx-auto py-5 d-flex justify-content-between">
          <Sidebar />
          <PageContent />
        </div> */}
      </section>
      <Footer />
    </Router>
  );
}

export default App;
