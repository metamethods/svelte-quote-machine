import { error } from "@sveltejs/kit";
import { MongoClient } from "mongodb";
import { mongodb } from "$env/static/private";

import type { Quote } from "types/quote.js";

const client = new MongoClient(mongodb);

export async function load({ params }: { params: { slug: string } }) {
  const { slug } = params;

  await client.connect().catch(errorMessage => {
    throw error(500, errorMessage);
  });

  const database = client.db("quotes");
  const collection = database.collection("documents");

  const quote = await collection.findOne<Quote>({ slug }).catch(errorMessage => {
    throw error(500, errorMessage);
  });

  if (!quote) 
    return { loaded: false }

  console.log(quote);

  return {
    quote: {
      slug: quote.slug,
      quote: quote.quote,
      author: quote.author,
      date: quote.date
    },
    loaded: true
  };
}