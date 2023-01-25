import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // needed for the Docker Container port mapping to work
    watch: {
      usePolling: true,
    },
    port: 5173,
  },
});
