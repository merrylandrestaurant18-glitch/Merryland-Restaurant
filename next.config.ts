import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	distDir: ".next-webapp",
	outputFileTracingRoot: process.cwd(),
};

export default nextConfig; 