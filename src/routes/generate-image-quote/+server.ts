import { html as toReactNode } from "satori-html";
import { Resvg } from "@resvg/resvg-js";

import satori from "satori";

import Inter from "$lib/fonts/Inter.ttf";

import type { Quote } from "types/quote.js";

export async function POST({ request }) {
  const { quoteData }: { quoteData: Quote } = await request.json();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const element = toReactNode(/*html*/`
    <div style="display: flex; background-color: #121212; justify-content: center; align-items: center; height: 100%; color: #fff">
      <div style="display: flex; width: 50%; flex-direction: column">
        <h1 style="line-height: 1px">${quoteData.quote}</h1>
        <p style="opacity: .5">— ${quoteData.author}</p>
      </div>
    </div>
  `);
  const svg = await satori(element, {
    fonts: [{
      name: "Inter",
      data: Buffer.from(Inter),
      style: "normal"
    }],
    width: 1200,
    height: 630,
  })
  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: 1200
    }
  });
  const image = await resvg.render();

  return new Response(image.asPng(), {
    headers: {
      "Content-Type": "image/png"
    }
  });
}