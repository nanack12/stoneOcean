import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@plasmicapp/react-web"]
  },
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
    host: '0.0.0.0',
    port: 5173,
    hmr: {
      protocol: 'ws',
      host: '0.0.0.0',  
      clientPort: 5173,   
    },
  },
});
