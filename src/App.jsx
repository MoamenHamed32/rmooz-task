import "./App.css";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Navbar from "./Components/navbar/Navbar";
import PageContent from "./Components/pages/PageContent";
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
              <section className="content_container mx-auto py-5 d-flex justify-content-between">
                <Sidebar />
                <PageContent />
              </section>
            }
          />
          <Route
            path="/rings"
            element={
              <section className="content_container mx-auto py-5 d-flex justify-content-between">
                <Sidebar />
                <PageContent />
              </section>
            }
          />
          <Route
            path="/necklaces"
            element={
              <section className="content_container mx-auto py-5 d-flex justify-content-between">
                <Sidebar />
                <PageContent />
              </section>
            }
          />
          <Route
            path="/watches"
            element={
              <section className="content_container mx-auto py-5 d-flex justify-content-between">
                <Sidebar />
                <PageContent />
              </section>
            }
          />
          <Route
            path="/earrings"
            element={
              <section className="content_container mx-auto py-5 d-flex justify-content-between">
                <Sidebar />
                <PageContent />
              </section>
            }
          />
          <Route
            path="/braceletes"
            element={
              <section className="content_container mx-auto py-5 d-flex justify-content-between">
                <Sidebar />
                <PageContent />
              </section>
            }
          />
          <Route
            path="/anklet"
            element={
              <section className="content_container mx-auto py-5 d-flex justify-content-between">
                <Sidebar />
                <PageContent />
              </section>
            }
          />
          <Route
            path="/noseraings"
            element={
              <section className="content_container mx-auto py-5 d-flex justify-content-between">
                <Sidebar />
                <PageContent />
              </section>
            }
          />
        </Routes>
      </section>
      <Footer />
    </Router>
  );
}

export default App;
