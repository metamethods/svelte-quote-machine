/* eslint-disable @typescript-eslint/no-explicit-any */
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import fs from "fs";

export default defineConfig({
	plugins: [sveltekit(), rawFonts([".ttf"])]
});

function rawFonts(ext: any) {
  return {
    name: "vite-plugin-raw-fonts",
    transform(code: any, id: any) {
      if (ext.some((e: any) => id.endsWith(e))) {
        const buffer = fs.readFileSync(id);
        return {code: `export default ${JSON.stringify(buffer)}`, map: null};
      }
    }
  }
}