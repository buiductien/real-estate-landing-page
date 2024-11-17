import NewestProject from "@/components/NewestProject";
import { Typography } from "antd";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const { Text } = Typography;
const ListProject = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    // once: true, // chi thuc hien 1 lan
    amount: 0.2,
  });

  return (
    <div
      className=" mt-4"
      style={{
        width: "100%",
        minHeight: "855px",
        backgroundColor: "#f7f7f7",
        borderRadius: "15px",
        backgroundImage:
          "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ef.com.vn%2Fils%2Fdestinations%2Funited-states%2Fnew-york%2F&psig=AOvVaw2OXGoTBI9HY9mEEBgXSWC3&ust=1731680373315000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIiy5aKC3IkDFQAAAAAdAAAAABAE')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "50px",
      }}
      ref={ref}
    >
      <motion.div
        key={isInView ? `in-view-${0}` : `out-view-${0}`}
        initial={{ opacity: 0, scale: 0 }} // Bắt đầu từ xa với kích thước nhỏ
        animate={{ opacity: 1, scale: 1 }} // Tới vị trí ban đầu với kích thước thật
        transition={{
          type: "spring", // Dùng loại chuyển động "spring" để tạo cảm giác ném
          stiffness: 60, // Độ cứng của lò xo
          damping: 12, // Hệ số giảm chấn để điều chỉnh hiệu ứng
          // delay: 0.3, // Thời gian trễ trước khi bắt đầu hiệu ứng
        }}
      >
        <Text style={{ fontSize: "50px", fontWeight: "300" }}>
          Introducing Our{" "}
          <Text style={{ fontSize: "50px", fontWeight: "600" }}>
            Newest Projects
          </Text>
        </Text>
      </motion.div>
      <div className="d-flex justify-content-between">
        <motion.div
          key={isInView ? `in-view-${1}` : `out-view-${1}`}
          initial={{ opacity: 0, y: 100 }} // Bắt đầu từ xa với kích thước nhỏ
          animate={{ opacity: 1, y: 1 }} // Tới vị trí ban đầu với kích thước thật
          transition={{
            type: "spring", // Dùng loại chuyển động "spring" để tạo cảm giác ném
            stiffness: 60, // Độ cứng của lò xo
            damping: 12, // Hệ số giảm chấn để điều chỉnh hiệu ứng
            delay: 0.2, // Thời gian trễ trước khi bắt đầu hiệu ứng
          }}
        >
          <NewestProject
            imageUrl="/prj1-400-480.jpg"
            label="Serenity Cove Villas"
            detail="Embrace tranquility in these waterfront villas designed for ultimate
        relaxation."
          />
        </motion.div>
        <motion.div
          key={isInView ? `in-view-${2}` : `out-view-${2}`}
          initial={{ opacity: 0, y: 100 }} // Bắt đầu từ xa với kích thước nhỏ
          animate={{ opacity: 1, y: 1 }} // Tới vị trí ban đầu với kích thước thật
          transition={{
            type: "spring", // Dùng loại chuyển động "spring" để tạo cảm giác ném
            stiffness: 60, // Độ cứng của lò xo
            damping: 12, // Hệ số giảm chấn để điều chỉnh hiệu ứng
            delay: 0.4, // Thời gian trễ trước khi bắt đầu hiệu ứng
          }}
        >
          <NewestProject
            imageUrl="/prj2-400-480.jpg"
            label="Azure Oasis"
            detail="Discover a sanctuary of luxury living amidst azure skies and lush landscapes."
          />
        </motion.div>
        <motion.div
          key={isInView ? `in-view-${3}` : `out-view-${3}`}
          initial={{ opacity: 0, y: 100 }} // Bắt đầu từ xa với kích thước nhỏ
          animate={{ opacity: 1, y: 1 }} // Tới vị trí ban đầu với kích thước thật
          transition={{
            type: "spring", // Dùng loại chuyển động "spring" để tạo cảm giác ném
            stiffness: 60, // Độ cứng của lò xo
            damping: 12, // Hệ số giảm chấn để điều chỉnh hiệu ứng
            delay: 0.6, // Thời gian trễ trước khi bắt đầu hiệu ứng
          }}
        >
          <NewestProject
            imageUrl="/prj3-400-480.webp"
            label="Radiant Horizon Apartments"
            detail="Experience a radiant life style with modern amenities and expansive horizons."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ListProject;
