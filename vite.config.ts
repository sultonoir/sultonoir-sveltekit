import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { enhancedImages } from "@sveltejs/enhanced-img";
import path from "path";

export default defineConfig({
  plugins: [sveltekit(), enhancedImages()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
    },
  },
});
