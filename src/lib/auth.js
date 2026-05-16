import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("Tiles-Gallery");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
 trustedOrigins: [
    "http://localhost:3000",
    "https://assignment-8-tile-gallary.vercel.app",
  ],
  emailAndPassword: { 
    enabled: true, 
  }, 

    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID , 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },
});