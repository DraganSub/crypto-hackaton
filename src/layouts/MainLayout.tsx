import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Route, Routes } from "react-router";
import { Sidebar, Footer } from "../components";
import { HomePage, News, Cryptocurrencies } from "../pages";
export default function MainLayout() {

  return (
    <Layout className="app-main">
      <Layout>
        <Sidebar />
      </Layout>
      <div className="main-content">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/news" element={<News />} />
          </Routes>
          {/*   </Content> */}
          <div className="main-footer">
            <Footer />
          </div>
        </Layout>
      </div>
    </Layout >
  )
}