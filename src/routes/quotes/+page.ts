import { error } from "@sveltejs/kit";

import type { Quote } from "types/quote";

export async function load({ url, fetch }) {
  const urlParams = new URLSearchParams(url.toString());

  const data = await fetch("/random-quote", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ignore: urlParams.getAll("ignore") })
  });

  const response: Quote & { error: string } = await data.json();
  const status = data.status;

  if (status !== 200)
    throw error(status, response.error);

  return {
    props: {
      slug: response.slug,
    }
  }
}