// vite.config.ts
import { defineConfig } from "file:///Users/remreynolds/Documents/GitHub/necker-cup-website-26/node_modules/vite/dist/node/index.js";
import path from "path";
import tailwindcss from "file:///Users/remreynolds/Documents/GitHub/necker-cup-website-26/node_modules/@tailwindcss/vite/dist/index.mjs";
import react from "file:///Users/remreynolds/Documents/GitHub/necker-cup-website-26/node_modules/@vitejs/plugin-react/dist/index.js";
var __vite_injected_original_dirname = "/Users/remreynolds/Documents/GitHub/necker-cup-website-26";
var vite_config_default = defineConfig({
  server: {
    host: true,
    // listen on 0.0.0.0 so Docker/browser can connect
    port: 5173
  },
  preview: {
    host: true,
    port: 5173
  },
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      // Pages at project root
      "@pages": path.resolve(__vite_injected_original_dirname, "./pages")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcmVtcmV5bm9sZHMvRG9jdW1lbnRzL0dpdEh1Yi9uZWNrZXItY3VwLXdlYnNpdGUtMjZcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9yZW1yZXlub2xkcy9Eb2N1bWVudHMvR2l0SHViL25lY2tlci1jdXAtd2Vic2l0ZS0yNi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcmVtcmV5bm9sZHMvRG9jdW1lbnRzL0dpdEh1Yi9uZWNrZXItY3VwLXdlYnNpdGUtMjYvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICdAdGFpbHdpbmRjc3Mvdml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogdHJ1ZSwgLy8gbGlzdGVuIG9uIDAuMC4wLjAgc28gRG9ja2VyL2Jyb3dzZXIgY2FuIGNvbm5lY3RcbiAgICBwb3J0OiA1MTczLFxuICB9LFxuICBwcmV2aWV3OiB7XG4gICAgaG9zdDogdHJ1ZSxcbiAgICBwb3J0OiA1MTczLFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgLy8gVGhlIFJlYWN0IGFuZCBUYWlsd2luZCBwbHVnaW5zIGFyZSBib3RoIHJlcXVpcmVkIGZvciBNYWtlLCBldmVuIGlmXG4gICAgLy8gVGFpbHdpbmQgaXMgbm90IGJlaW5nIGFjdGl2ZWx5IHVzZWQgXHUyMDEzIGRvIG5vdCByZW1vdmUgdGhlbVxuICAgIHJlYWN0KCksXG4gICAgdGFpbHdpbmRjc3MoKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAvLyBBbGlhcyBAIHRvIHRoZSBzcmMgZGlyZWN0b3J5XG4gICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgICAgLy8gUGFnZXMgYXQgcHJvamVjdCByb290XG4gICAgICAnQHBhZ2VzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vcGFnZXMnKSxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlYsU0FBUyxvQkFBb0I7QUFDMVgsT0FBTyxVQUFVO0FBQ2pCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sV0FBVztBQUhsQixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBO0FBQUE7QUFBQSxJQUdQLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUE7QUFBQSxNQUVMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQTtBQUFBLE1BRXBDLFVBQVUsS0FBSyxRQUFRLGtDQUFXLFNBQVM7QUFBQSxJQUM3QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
