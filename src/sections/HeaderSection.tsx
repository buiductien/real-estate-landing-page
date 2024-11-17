import { Button, Menu, Typography } from "antd";
import React from "react";

const { Text } = Typography;
const HeaderSection = () => {
  return (
    <div
      className="row"
      style={{
        minHeight: "70px",
        color: "#000", // color text
      }}
    >
      <div className="col-2 d-flex align-items-center">
        <img src="/logo.webp" style={{ width: "50px" }} />
        <Text style={{ fontSize: "20px", fontWeight: "700" }}>Mi City</Text>
      </div>
      <div className="col-7 d-flex align-items-center justify-content-center">
        <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" style={{ textAlign: "center", fontSize: "20px" }}>
            Home
          </Menu.Item>
          <Menu.Item key="2" style={{ textAlign: "center", fontSize: "20px" }}>
            Properties
          </Menu.Item>
          <Menu.Item key="3" style={{ textAlign: "center", fontSize: "20px" }}>
            About Us
          </Menu.Item>
          <Menu.Item key="4" style={{ textAlign: "center", fontSize: "20px" }}>
            Services
          </Menu.Item>
          <Menu.Item key="5" style={{ textAlign: "center", fontSize: "20px" }}>
            FAQ's
          </Menu.Item>
        </Menu>
      </div>
      <div className="col d-flex align-items-center">
        <Text style={{ fontSize: "20px" }}>+1(212) 155-1234</Text>
        <Button
          type="primary"
          style={{
            borderRadius: "20px",
            color: "#fff",
            backgroundColor: "#000",
          }}
          className="mx-2"
          size="large"
        >
          Contact
        </Button>
      </div>
    </div>
  );
};

export default HeaderSection;
