import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      server: {
        allowedHosts: ['5871-2a09-bac5-3e75-1aa0-00-2a7-15.ngrok-free.app']
      }
    };
});

// https://69f7-2a09-bac5-3e75-1aa0-00-2a7-15.ngrok-free.app 


// ngrok http http://localhost:5173/