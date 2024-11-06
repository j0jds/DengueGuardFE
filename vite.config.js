import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue'; 

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const API_URL = `${env.VITE_API_URL ?? 'http://localhost:8000'}`; 

  return {
    server: {
      proxy: {
        '/api': {
          target: API_URL, 
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''), 
        },
      },
    },
    plugins: [vue()], 
  };
});
