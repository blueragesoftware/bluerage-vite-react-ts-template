import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    optimizeDeps: {
      exclude: ["lucide-react"],
    },
    server: {
      port: 3000,
      host: true, // Listen on all IPv4 and IPv6 addresses
      allowedHosts: [process.env.APP_DOMAIN!],
    },
    preview: {
      port: 3000,
      host: true, // Listen on all IPv4 and IPv6 addresses
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      allowedHosts: [process.env.APP_DOMAIN!],
    },
  });
};
