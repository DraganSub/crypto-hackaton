import { Layout } from "antd";
import classNames from "classnames";
import { Navigate, Route, Routes } from "react-router";
import { Sidebar, Footer, ThemeSwitcher } from "../components";
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
  const cryptoClassName = classNames(
    "crypto-news", {
    "main--is-dark": theme === "dark"
  })

  const footerClassName = classNames(
    "main-footer", {
    "footer--is-dark": theme === "dark"
  })

  const mainContent = classNames(
    "main-content",
    {
      "main--is-dark": theme === "dark"
    }
  )

  return (
    <main className={mainClassName}>
      <Layout>
        <Layout>
          <div className="theme--switcher">
            <ThemeSwitcher />
          </div>
          <Sidebar />
        </Layout>
        <div className={mainContent}>
          <Layout className={cryptoClassName}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/news" element={<News />} />
              <Route path="/crypto/:cryptoId" element={<CryptoDetailsPage />} />
            </Routes>
            <div className={footerClassName}>
              <Footer />
            </div>
          </Layout>
        </div>
      </Layout>
    </main >
  );
}
