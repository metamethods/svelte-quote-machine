import { json } from "@sveltejs/kit";
import { MongoClient } from "mongodb";
import { mongodb } from "$env/static/private";

import type Quote from "../quotes/[slug]/Quote.svelte";

export async function POST({ request }: { request: Request }) {
  const { ignore }: { ignore: string[] } = await request.json();

  const client = new MongoClient(mongodb);

  await client.connect().catch(() => {
    return json({ error: "Failed to connect to database" }, { status: 500 });
  });

  const database = client.db("quotes");
  const collection = database.collection("documents");

  // pick a random quote
  const quote = await collection.aggregate<Quote>([
    { $match: { slug: { $nin: ignore } } },
    { $sample: { size: 1 } }
  ]).toArray();

  if (quote.length === 0)
    return json({ error: "No quotes left" }, { status: 404 });

  return json(quote[0], { status: 200 });
}