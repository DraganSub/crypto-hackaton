import { Layout } from "antd";
import classNames from "classnames";
import { Navigate, Route, Routes } from "react-router";
import { Sidebar, Footer } from "../components";
import { useTheme } from "../hooks";
import { HomePage, News, Cryptocurrencies, CryptoDetailsPage } from "../pages";
export default function MainLayout() {

  const { theme } = useTheme();
  const mainClassName = classNames(
    "app-main",
    {
      "is--light": theme === "light",
      "is--dark": theme === "dark"
    }
  )

  return (
    <Layout className={mainClassName}>
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
