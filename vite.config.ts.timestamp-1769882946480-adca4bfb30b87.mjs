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
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcmVtcmV5bm9sZHMvRG9jdW1lbnRzL0dpdEh1Yi9uZWNrZXItY3VwLXdlYnNpdGUtMjZcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9yZW1yZXlub2xkcy9Eb2N1bWVudHMvR2l0SHViL25lY2tlci1jdXAtd2Vic2l0ZS0yNi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcmVtcmV5bm9sZHMvRG9jdW1lbnRzL0dpdEh1Yi9uZWNrZXItY3VwLXdlYnNpdGUtMjYvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICdAdGFpbHdpbmRjc3Mvdml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogdHJ1ZSwgLy8gbGlzdGVuIG9uIDAuMC4wLjAgc28gRG9ja2VyL2Jyb3dzZXIgY2FuIGNvbm5lY3RcbiAgICBwb3J0OiA1MTczLFxuICB9LFxuICBwcmV2aWV3OiB7XG4gICAgaG9zdDogdHJ1ZSxcbiAgICBwb3J0OiA1MTczLFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgLy8gVGhlIFJlYWN0IGFuZCBUYWlsd2luZCBwbHVnaW5zIGFyZSBib3RoIHJlcXVpcmVkIGZvciBNYWtlLCBldmVuIGlmXG4gICAgLy8gVGFpbHdpbmQgaXMgbm90IGJlaW5nIGFjdGl2ZWx5IHVzZWQgXHUyMDEzIGRvIG5vdCByZW1vdmUgdGhlbVxuICAgIHJlYWN0KCksXG4gICAgdGFpbHdpbmRjc3MoKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAvLyBBbGlhcyBAIHRvIHRoZSBzcmMgZGlyZWN0b3J5XG4gICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2VixTQUFTLG9CQUFvQjtBQUMxWCxPQUFPLFVBQVU7QUFDakIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxXQUFXO0FBSGxCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUE7QUFBQTtBQUFBLElBR1AsTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQTtBQUFBLE1BRUwsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
