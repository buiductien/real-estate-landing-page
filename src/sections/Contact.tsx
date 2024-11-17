import { Typography } from "antd";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const { Text } = Typography;
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // chi thuc hien 1 lan
    amount: 0.2,
  });

  return (
    <div className="" style={{ minHeight: "255px" }}>
      <motion.div
        style={{ padding: "50px" }}
        ref={ref}
        key={isInView ? `in-view-${1}` : `out-view-${1}`}
        initial={{ opacity: 0, y: 100 }} // Bắt đầu từ xa với kích thước nhỏ
        animate={{ opacity: 1, y: 0 }} // Tới vị trí ban đầu với kích thước thật
        transition={{
          type: "spring", // Dùng loại chuyển động "spring" để tạo cảm giác ném
          stiffness: 60, // Độ cứng của lò xo
          damping: 55, // Hệ số giảm chấn để điều chỉnh hiệu ứng
          duration: 2,
          delay: 0.2, // Thời gian trễ trước khi bắt đầu hiệu ứng
        }}
      >
        <Text style={{ fontSize: "50px", fontWeight: "300" }}>
          {"Let's Plan you new house!"}
          <Text style={{ fontSize: "50px", fontWeight: "500" }}>
            {" Contact us"}
          </Text>
        </Text>
        <div className="row">
          <div className="col-3">
            <div>Logo</div>
            <div className="d-flex justify-content-between">
              <FaLinkedin size={40} color="#999999" />
              <FaInstagram size={40} color="#999999" />
              <FaFacebookF size={40} color="#999999" />
              <FaXTwitter size={40} color="#999999" />
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col">
            <div className="row">
              <div className="col">
                <Text style={{ fontSize: "20px", fontWeight: "700" }}>
                  Buy and Rent
                </Text>{" "}
                <br />
                <Text type="secondary">Buy and sell properties</Text>
                <br />
                <Text type="secondary">Rent home</Text>
                <br />
                <Text type="secondary">Builder trade-up</Text>
              </div>
              <div className="col">
                <Text style={{ fontSize: "20px", fontWeight: "700" }}>
                  {" "}
                  Resources
                </Text>
                <br />
                <Text type="secondary"> Blog</Text>
                <br />
                <Text type="secondary"> FAQ</Text>
                <br />
                <Text type="secondary"> Help Center</Text>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
