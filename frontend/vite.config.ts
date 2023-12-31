import path from 'node:path';

import reactPlugin from '@vitejs/plugin-react';
import { type ConfigEnv, defineConfig, loadEnv } from 'vite';
import { VitePWA as vitePWAPlugin } from 'vite-plugin-pwa';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPathsPlugin from 'vite-tsconfig-paths';

const config = ({ mode }: ConfigEnv): ReturnType<typeof defineConfig> => {
  const {
    VITE_APP_PROXY_SERVER_URL,
    VITE_APP_API_ORIGIN_URL,
    VITE_APP_DEVELOPMENT_PORT,
  } = loadEnv(mode, process.cwd());

  return defineConfig({
    build: {
      outDir: 'build',
    },
    plugins: [
      tsconfigPathsPlugin(),
      reactPlugin(),
      vitePWAPlugin({
        registerType: 'autoUpdate',
        workbox: {
          navigateFallbackDenylist: [new RegExp(`^${VITE_APP_API_ORIGIN_URL}`)],
        },
      }),
      svgrPlugin(),
    ],
    server: {
      host: true,
      port: Number(VITE_APP_DEVELOPMENT_PORT),
      proxy: {
        [VITE_APP_API_ORIGIN_URL]: {
          target: VITE_APP_PROXY_SERVER_URL,
          changeOrigin: true,
        },
      },
    },
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, './src/assets'),
        '~': path.resolve(__dirname, './src'),
      },
    },
  });
};

export default config;
