import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Root-path deploy: this repo is a Pages *project* repo, so the "natural"
  // value here would be '/NERWebsite/'. Keep '/' — the site is served from a
  // custom domain root.
  base: '/NERWebsite/',
  plugins: [react(), tailwindcss()]
});
