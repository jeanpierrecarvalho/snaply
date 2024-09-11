import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config = {
  build: {},
  base: "",
  plugins: [tsconfigPaths()],
};

export default defineConfig(config);
