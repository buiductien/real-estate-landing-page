import { Button, Typography } from "antd";
import React, { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  label: string;
  detail: string;
}
const { Title, Text } = Typography;
const PropertyComponent = (props: Props) => {
  const { icon, label, detail } = props;
  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "460px",
        height: "218px",
        borderRadius: "15px",
        padding: "15px",
      }}
    >
      <Button
        size="large"
        style={{
          borderRadius: "50%",
          backgroundColor: "#d3d3d3",
          border: "1px solid #000",
        }}
        icon={icon}
      />
      <Title
        style={{
          fontSize: "25px",
          fontWeight: "700",
          marginTop: "15px",
        }}
      >
        {label}
      </Title>
      <Text type="secondary" style={{fontSize:"18px"}}>{detail}</Text>
    </div>
  );
};

export default PropertyComponent;
