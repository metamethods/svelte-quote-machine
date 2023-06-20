import { json } from "@sveltejs/kit";
import { MongoClient } from "mongodb";
import { mongodb } from "$env/static/private";

import crypto from "crypto";

export async function POST({ request }: { request: Request }) {
  const { quote, author }: { quote: string, author: string } = await request.json();

  const quoteLength = Buffer.byteLength(quote.replace(/\s/g, ""), "utf8");
  const authorLength = Buffer.byteLength(author.replace(/\s/g, ""), "utf8");

  // 1kib quote limit. 10b minimum
  // 100b author limit. 3b minimum
  // Helps prevent anyone creating huge quotes that takes up too much space
  if (quoteLength > 1024 || quoteLength < 10)
    return json({ error: "Quote length doesn't meet requirements. Has to be under 1kib, and more than 10 bytes. The field cannot be empty too." }, { status: 400 });
  
  if (authorLength > 100 || authorLength < 3)
    return json({ error: "Author length doesn't meet requirements. Has to be under 100 bytes, and more than 3 bytes. The field cannot be empty too." }, { status: 400 });

  const id = crypto.randomBytes(16).toString("hex");

  const client = new MongoClient(mongodb);
  const clientConnection = await client.connect().catch(() => undefined);

  if (!clientConnection)
    return json({ error: "Failed to connect to database" }, { status: 500 })

  const database = client.db("quotes");
  const collection = database.collection("documents");

  const insertResult = await collection.insertOne({ slug: id, quote, author, date: new Date().toString() }).catch(() => undefined);

  if (!insertResult)
    return json({ error: "Failed to insert quote into database" }, { status: 500 });

  return json({ slug: id }, { status: 200 })
}
