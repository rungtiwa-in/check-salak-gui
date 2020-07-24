import React from "react";
import { Layout } from "antd";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { Footer } = Layout;
    return (
      <Footer>
        <div style={{ color: "#49AF49", fontSize: "16px", fontWeight: "600" }}>
          ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร
        </div>
        <div style={{ color: "#49AF49" }}>
          Bank for Agriculture and Agricultural Cooperatives
        </div>
        <div>
          เลขที่ 2346 ถนนพหลโยธิน แขวงเสนานิคม เขตจตุจักร กรุงเทพฯ 10900
        </div>
        <div style={{ fontSize: "16px" }}>
          Call-center: <a href="tel:02-555-0555">02-555-0555</a>
        </div>
      </Footer>
    );
  }
}

export default Footer;
