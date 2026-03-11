import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/tests/unit/setup.ts"],
    include: ["src/tests/unit/**/*.test.ts", "src/tests/unit/**/*.test.tsx"],
    coverage: {
      reporter: ["text", "html"],
      include: ["src/lib/**/*.ts", "src/hooks/**/*.ts"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
