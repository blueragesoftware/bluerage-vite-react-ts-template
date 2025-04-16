import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const appDomain = process.env.APP_DOMAIN;

  return defineConfig({
    plugins: [react()],
    optimizeDeps: {
      exclude: ["lucide-react"],
    },
    server: {
      port: 3000,
      host: true, // Listen on all IPv4 and IPv6 addresses
      allowedHosts: appDomain ? [appDomain] : true,
    },
    preview: {
      port: 3000,
      host: true, // Listen on all IPv4 and IPv6 addresses
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      allowedHosts: appDomain ? [appDomain] : true,
    },
  });
};
