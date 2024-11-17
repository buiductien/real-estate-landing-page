import { Button, Typography } from "antd";
import React from "react";
import { GrLinkNext } from "react-icons/gr";

interface Props {
  imageUrl: string;
  label: string;
  detail: string;
}

const { Text } = Typography;
const NewestProject = (props: Props) => {
  const { imageUrl, label, detail } = props;
  return (
    <div
      className="mt-4"
      style={{
        width: "400px",
        height: "800px",
      }}
    >
      <div
        style={{
          borderRadius: "15px",
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60%",
        }}
      />
      <Text
        style={{
          fontSize: "25px",
          fontWeight: "500",
          marginTop: "25px",
          display: "block",
        }}
      >
        {label}
      </Text>
      <Text className="mt-3" style={{ fontSize: "15px", display: "block" }}>
        {detail}
      </Text>
      <Button
        size="large"
        type="primary"
        className="mt-3"
        style={{ backgroundColor: "#000" }}
        icon={<GrLinkNext size={20} />}
        iconPosition="end"
      >
        Browse Properties
      </Button>
    </div>
  );
};

export default NewestProject;
