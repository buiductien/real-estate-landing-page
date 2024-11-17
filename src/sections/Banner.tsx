import { Typography } from "antd";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const { Title } = Typography;
const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    // once: true, // chi thuc hien 1 lan
    amount: 0.2,
  });

  return (
    <div ref={ref}>
      <motion.div
        // Áp dụng hiệu ứng cho ảnh nền
        key={isInView ? `in-view-${0}` : `out-view-${0}`}
        initial={{ scale: 0.9 }} // Hiệu ứng khi bắt đầu
        animate={isInView ? { scale: 1 } : { scale: 0.9 }} // Hiệu ứng khi hoàn thành
        // initial={{ width: "95%"}} // Bắt đầu với kích thước nhỏ hơn
        // animate={
        //   isInView
        //     ? { width: "100%"}
        //     : { width: "95%"}
        // } // Kích thước đầy đủ khi hoàn thành
        transition={{
          type: "spring",
          ease: "easeInOut",
          stiffness: 30,
          damping: 55,
          duration: 2,
        }} // Thời gian chuyển động
        // whileHover={{ scale: 1.05 }} // Phóng to khi hover
        style={{
          width: "100%",
          minHeight: "750px",
          borderRadius: "15px",
          backgroundImage: "url('/background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          key={isInView ? `in-view-${1}` : `out-view-${1}`}
          initial={{ opacity: 0, x: 100 }} // Bắt đầu từ ngoài khung nhìn bên phải
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Di chuyển đến vị trí bình thường
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 55,
            delay: 0.3,
          }}
        >
          <Title
            style={{
              fontSize: "200px",
              fontWeight: "800",
              margin: "0px 100px",
            }}
          >
            NewYork
          </Title>
        </motion.div>
        <motion.div
          key={isInView ? `in-view-${2}` : `out-view-${2}`}
          initial={{ opacity: 0, x: -100 }} // Bắt đầu từ ngoài khung nhìn bên trái
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Di chuyển đến vị trí bình thường
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 55,
            delay: 0.5, // Thêm độ trễ để xuất hiện sau chữ NewYork
          }}
        >
          <Title
            style={{
              fontSize: "100px",
              fontWeight: "200",
              margin: " 0px 100px",
            }}
          >
            Real Estate
          </Title>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
