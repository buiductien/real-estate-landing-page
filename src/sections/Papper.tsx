import { Button, Typography } from "antd";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { GrLinkNext } from "react-icons/gr";

const { Text, Title } = Typography;
const Papper = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    // once: true, // chi thuc hien 1 lan
    amount: 0.2,
  });

  return (
    <div
      style={{
        minHeight: "855px",
        backgroundImage: "url('/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "50px",
      }}
    >
      <div className="row" ref={ref}>
        <div className="col" style={{}}>
          <div
            className="d-flex"
            style={{ height: "455px", position: "relative" }}
          >
            {/* image */}
            <motion.div
              className="mx-auto align-self-center"
              key={isInView ? `in-view-${0}` : `out-view-${0}`}
              initial={{ scaleY: 0 }} // Bắt đầu với scale Y = 0 (thu nhỏ theo chiều dọc)
              animate={{ scaleY: 1 }} // Mở rộng theo chiều dọc đến kích thước ban đầu
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: 0.2, // Độ trễ trước khi bắt đầu hiệu ứng
              }}
              style={{
                width: "80%",
                height: "80%",
                backgroundColor: "#A08965",
                borderRadius: "15px",
              }}
            >
              Image
            </motion.div>
            {/* Header */}
            <motion.div
              key={isInView ? `in-view-${3}` : `out-view-${3}`}
              initial={{ opacity: 0, x: -200 }} // Bắt đầu từ xa với kích thước nhỏ
              animate={{ opacity: 1, x: 0 }} // Tới vị trí ban đầu với kích thước thật
              transition={{
                type: "spring", // Dùng loại chuyển động "spring" để tạo cảm giác ném
                stiffness: 60, // Độ cứng của lò xo
                damping: 12, // Hệ số giảm chấn để điều chỉnh hiệu ứng
                delay: 0.6, // Thời gian trễ trước khi bắt đầu hiệu ứng
              }}
              style={{
                position: "absolute",
                height: "80px",
                backgroundColor: "#fff",
                borderRadius: "5px",
                padding: "10px 30px",
                left: "2px",
                top: "10px",
              }}
            >
              <Text
                style={{
                  display: "block",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Virtual Video home tour
              </Text>
              <Text
                type="secondary"
                style={{
                  fontSize: "15px",
                }}
              >
                Try Our New Virtual Video Home Tour
              </Text>
            </motion.div>
            {/* Footer */}
            <motion.div
              key={isInView ? `in-view-${1}` : `out-view-${1}`}
              initial={{ opacity: 0, x: 200 }} // Bắt đầu từ xa với kích thước nhỏ
              animate={{ opacity: 1, x: 0 }} // Tới vị trí ban đầu với kích thước thật
              transition={{
                type: "spring", // Dùng loại chuyển động "spring" để tạo cảm giác ném
                stiffness: 60, // Độ cứng của lò xo
                damping: 12, // Hệ số giảm chấn để điều chỉnh hiệu ứng
                delay: 0.4, // Thời gian trễ trước khi bắt đầu hiệu ứng
              }}
              style={{
                position: "absolute",
                height: "80px",
                backgroundColor: "#fff",
                borderRadius: "5px",
                padding: "10px 30px",
                right: "2px",
                bottom: "10px",
              }}
            >
              <Text
                style={{
                  display: "block",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Check Latest Price
              </Text>
              <Text
                type="secondary"
                style={{
                  fontSize: "15px",
                }}
              >
                Browse From Thousands Of Properties
              </Text>
            </motion.div>
          </div>
        </div>
        <div className="col">
          <div
            style={{
              padding: "50px",
              // backgroundColor: "#123456",
              height: "100%",
            }}
          >
            <motion.div
              key={isInView ? `in-view-${4}` : `out-view-${4}`}
              initial={{ opacity: 0, scale: 0 }} // Bắt đầu từ xa với kích thước nhỏ
              animate={{ opacity: 1, scale: 1 }} // Tới vị trí ban đầu với kích thước thật
              transition={{
                type: "spring", // Dùng loại chuyển động "spring" để tạo cảm giác ném
                stiffness: 60, // Độ cứng của lò xo
                damping: 12, // Hệ số giảm chấn để điều chỉnh hiệu ứng
                delay: 0.8, // Thời gian trễ trước khi bắt đầu hiệu ứng
              }}
              className="d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#EDEEF0",
                height: "60px",
                width: "300px",
                borderRadius: "5px",
              }}
            >
              <Button
                size="large"
                style={{
                  width: "137px",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Ren House
              </Button>
              <Button
                size="large"
                style={{ backgroundColor: "#EDEEF0", border: "none" }}
              >
                Buy A Property
              </Button>
            </motion.div>
            <motion.div
              key={isInView ? `in-view-${5}` : `out-view-${5}`}
              initial={{ opacity: 0, scale: 2, x: "-200", y: "-200" }} // Bắt đầu từ giữa với kích thước lớn hơn và vị trí ngoài màn hình
              animate={{
                opacity: 1,
                scale: 1,
                x: [0, -100, 50, 0],
                y: [0, 50, -100, 0],
              }} // Kết thúc ở vị trí ban đầu với kích thước bình thường
              transition={{
                type: "spring",
                stiffness: 120, // Độ cứng của lò xo
                damping: 55, // Hệ số giảm chấn để tạo hiệu ứng cong
                duration: 1.5, // Thời gian hiệu ứng
                delay: 1,
              }}
            >
              <Title
                style={{ fontSize: "50px", fontWeight: "700", margin: "0px" }}
              >
                Unlock Your Dream Home Today
              </Title>
            </motion.div>
            <br />
            <motion.div
              key={isInView ? `in-view-${6}` : `out-view-${6}`}
              initial={{ opacity: 0, scale: 0 }} // Bắt đầu từ giữa với kích thước lớn hơn và vị trí ngoài màn hình
              animate={{
                opacity: 1,
                scale: 1,
              }} // Kết thúc ở vị trí ban đầu với kích thước bình thường
              transition={{
                type: "spring",
                stiffness: 120, // Độ cứng của lò xo
                damping: 55, // Hệ số giảm chấn để tạo hiệu ứng cong
                delay: 1.5,
              }}
            >
              <Text type="secondary">
                Unlock Your DreamHome: House Retail Made Effortless- Our
                innovative approach to house retail removes the hassle and
                stress, ensuring that finding your dream home is a seamless
                experience
              </Text>
            </motion.div>
            <br />
            <motion.div
              key={isInView ? `in-view-${7}` : `out-view-${7}`}
              initial={{ opacity: 0}} // Bắt đầu từ giữa với kích thước lớn hơn và vị trí ngoài màn hình
              animate={{
                opacity: 1,
              }} 
              transition={{
                ease: "easeInOut", // Tạo hiệu ứng mượt mà hơn
                duration: 3,
                delay: 1.5,
              }}
            >
              <Button
                size="large"
                type="primary"
                className="mt-3"
                style={{ backgroundColor: "#000" }}
                icon={<GrLinkNext size={20} />}
                iconPosition="end"
              >
                See More
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Papper;
