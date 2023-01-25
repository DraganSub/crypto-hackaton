import { Layout } from "antd";
import { Navigate, Route, Routes } from "react-router";
import { Sidebar, Footer } from "../components";
import { HomePage, News, Cryptocurrencies, CryptoDetailsPage } from "../pages";
export default function MainLayout() {

  return (
    <Layout className="app-main">
      <Layout>
        <Sidebar />
      </Layout>
      <div className="main-content">
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/news" element={<News />} />
            <Route path="/crypto/:cryptoId" element={<CryptoDetailsPage />} />
          </Routes>
          <div className="main-footer">
            <Footer />
          </div>
        </Layout>
      </div>
    </Layout>
  );
}
