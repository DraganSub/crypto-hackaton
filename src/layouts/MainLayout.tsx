import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Sidebar, Footer } from "../components";
import { HomePage } from "../pages";
export default function MainLayout() {

  return (
    <Layout className="app-main">
      <Layout>
        <Sidebar />
      </Layout>
      <div className="main-content">
        <Layout>
          {/*    <Content
            style={{
              padding: 24,
            }}
          > */}
          <HomePage />
          {/*   </Content> */}
          <div className="main-footer">
            <Footer />
          </div>
        </Layout>
      </div>
    </Layout >
  )
}