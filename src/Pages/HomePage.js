import React from "react";
import NewsSection from "../Component/NewsSection";
import Footer from "../Component/Footer";
import { Layout, Menu, Button } from "antd";
import logo from "../Asset/Image/logo salak 2.png";
import { menuList, checkSalakByCID, checkSalakBySelf } from "../Asset/Wording";

class HomePage extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { Header, Content } = Layout;

    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <img src={logo} className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
            {menuList.map((item, key) => (
              <Menu.Item key={key}>{item.name}</Menu.Item>
            ))}
          </Menu>
        </Header>
        <div className="header-image-cover">
          <div className="header-image">
            <div className="header-content">
              <Button className="btn-header-section mr-40" size="large">
                {checkSalakByCID}
              </Button>
              <Button className="btn-header-section" size="large">
                {checkSalakBySelf}
              </Button>
            </div>
          </div>
        </div>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 24 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <div className="title">
              <div className="title-text">{menuList[3].name}</div>
            </div>
            <div style={{ marginTop: 24 }}>
              <NewsSection />
            </div>
          </div>
        </Content>

        <Footer />
      </Layout>
    );
  }
}
export default HomePage;
