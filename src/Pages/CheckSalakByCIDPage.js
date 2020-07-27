import React from "react";
import { Layout, Menu, Form, Input, Button } from "antd";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import { checkSalakByCID } from "../Asset/Wording";

class CheckSalakByCIDPage extends React.Component {
  constructor() {
    super();
  }
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    const { Content } = Layout;
    return (
      <Layout>
        <Header isHomePage={false} />
        <div className="header-image-cover">
          <div className="header-image">
            <div className="header-content">
              <div className="title-page">{checkSalakByCID}</div>
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
            <div>{checkSalakByCID}</div>
          </div>
        </Content>

        <Footer />
      </Layout>
    );
  }
}
export default CheckSalakByCIDPage;
