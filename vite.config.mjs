import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

const config = {
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Snaply",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `snaply.${format}.js`,
    },
  },
  base: "",
  plugins: [tsconfigPaths()],
};

export default defineConfig(config);
