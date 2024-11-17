import { Button, Typography } from "antd";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PropertyComponent from "@/components/PropertyComponent";
import { IoHome, IoLocationOutline } from "react-icons/io5";
import { CgInsights } from "react-icons/cg";
import { FaShieldHeart, FaXTwitter } from "react-icons/fa6";

const { Title, Paragraph, Text } = Typography;
const Introduce = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    // once: true, // chi thuc hien 1 lan
    amount: 0.2,
  });

  const containerVariants = {
    visible: {
      transition: {
        satggerChildren: 0.3, // thời gian trì hoãn mỗi phần tử con là 0.3s
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="mt-4"
      style={{
        width: "100%",
        minHeight: "775px",
        backgroundColor: "#f7f7f7",
        borderRadius: "15px",
      }}
    >
      <div style={{ padding: "50px" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            // delay: 0.3,
            type: "spring",
            stiffness: 60,
          }}
        >
          <Paragraph
            style={{ fontSize: "40px", fontWeight: "100", margin: "0px" }}
          >
            Real Estate Solutions that
          </Paragraph>
        </motion.div>

        <motion.div
          key={isInView ? `in-view-${0}` : `out-view-${0}`}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 60,
          }}
        >
          <Title
            style={{ fontSize: "100px", fontWeight: "200", margin: "0px" }}
          >
            Tailored Your Needs
          </Title>
        </motion.div>
        <div
          className="row mt-5"
          style={{ backgroundColor: "", height: "450px" }}
        >
          <div
            className="col-8 d-flex flex-wrap justify-content-between align-content-between"
            style={{
              borderRadius: "15px",
              backgroundImage: "",
              marginRight: "15px",
              padding: "0px",
            }}
          >
            {/* Tạo từng phần tử con */}
            <motion.div
              key={isInView ? `in-view-${1}` : `out-view-${1}`}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={childVariants}
              transition={{
                delay: 0.2, // Trì hoãn cho phần tử đầu tiên
                type: "spring",
                stiffness: 60,
              }}
            >
              <PropertyComponent
                icon={<IoHome size={20} />}
                label="Negotiation Support"
                detail="Let us handle negotiations on your behalf to ensure the best possible.
        Your best Interests are our top priority."
              />
            </motion.div>

            <motion.div
              key={isInView ? `in-view-${2}` : `out-view-${2}`}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={childVariants}
              transition={{
                delay: 0.4, // Trì hoãn cho phần tử thứ hai
                type: "spring",
                stiffness: 60,
              }}
            >
              <PropertyComponent
                icon={<IoLocationOutline size={20} />}
                label="Local Expertise"
                detail="We have a deep understanding of the local real estate market. We can provide you with the insider knowledge you need."
              />
            </motion.div>

            <motion.div
              key={isInView ? `in-view-${3}` : `out-view-${3}`}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={childVariants}
              transition={{
                delay: 0.6, // Trì hoãn cho phần tử thứ ba
                type: "spring",
                stiffness: 60,
              }}
            >
              <PropertyComponent
                icon={<CgInsights size={20} />}
                label="Market Insights"
                detail="Gain valuable insights and stay informed about the latest trends in the real estate market."
              />
            </motion.div>

            <motion.div
              key={isInView ? `in-view-${4}` : `out-view-${4}`}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={childVariants}
              transition={{
                delay: 0.8, // Trì hoãn cho phần tử thứ tư
                type: "spring",
                stiffness: 60,
              }}
            >
              <PropertyComponent
                icon={<FaShieldHeart size={20} />}
                label="Property Insurance"
                detail="We offer our customer property protection of liability coverage and insurance for their better life."
              />
            </motion.div>
          </div>
          <motion.div
            className="col"
            style={{
              backgroundColor: "#000",
              borderRadius: "15px",
              backgroundImage: "",
              padding: "30px 30px 30px 50px",
            }}
            key={isInView ? `in-view-${5}` : `out-view-${5}`}
            initial={{ opacity: 0, scale: 0 }} // Bắt đầu từ xa với kích thước nhỏ
            animate={{ opacity: 1, scale: 1 }}  // Tới vị trí ban đầu với kích thước thật
            transition={{
              type: "spring", // Dùng loại chuyển động "spring" để tạo cảm giác ném
              stiffness: 60, // Độ cứng của lò xo
              damping: 12, // Hệ số giảm chấn để điều chỉnh hiệu ứng
              delay: 1, // Thời gian trễ trước khi bắt đầu hiệu ứng
            }}
          >
            <Text
              style={{ color: "#fff", fontSize: "30px", fontWeight: "500" }}
            >
              Experience the ease oFf finding your ideal home with us !
            </Text>
            <br />
            <Button className="mt-3" style={{ fontWeight: "600" }}>
              Browse Properties
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
