// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/hotels': {
        target: 'https://booking-com.p.rapidapi.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/hotels/, '/v1/hotels'),
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.setHeader('X-RapidAPI-Key', process.env.VITE_RAPIDAPI_KEY);
            proxyReq.setHeader('X-RapidAPI-Host', 'booking-com.p.rapidapi.com');
          });
        }
      }
    }
  }
});
