import { defineConfig, ConfigEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }: ConfigEnv) => {
  const isProduction = mode === 'production';

  return {
    base: isProduction ? '/tanawitch-design/' : '/',

    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: true,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html')
        },
        output: {
          manualChunks: undefined,
          assetFileNames: isProduction 
            ? 'assets/[name]-[hash][extname]' 
            : '[name]-[hash][extname]',
          chunkFileNames: isProduction 
            ? 'assets/[name]-[hash].js' 
            : '[name]-[hash].js',
          entryFileNames: isProduction 
            ? 'assets/[name]-[hash].js' 
            : '[name]-[hash].js',
        },
      },
    },

    server: {
      host: "::",
      port: 8080,
    },

    plugins: [react()],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
});