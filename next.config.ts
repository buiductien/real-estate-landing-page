// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactStrictMode: true,
//   transpilePackages: [
//     'antd',
// 		'rc-util',
// 		'@babel/runtime',
// 		'@ant-design/icons',
// 		'@ant-design/icons-svg',
// 		'rc-pagination',
// 		'rc-picker',
// 		'rc-tree',
// 		'rc-table',
// 		'rc-input', // Thêm dòng này
//   ]
// };

// export default nextConfig;
import withTM from "next-transpile-modules";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

// Khai báo các package cần transpile
const transpiledPackages = withTM([
  "antd",
  "rc-util",
  "@babel/runtime",
  "@ant-design/icons",
  "@ant-design/icons-svg",
  "rc-pagination",
  "rc-picker",
  "rc-tree",
  "rc-table",
  "rc-input", // Đảm bảo thêm dòng này
]);

export default transpiledPackages(nextConfig);
