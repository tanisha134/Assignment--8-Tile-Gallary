import { betterAuth } from "better-auth";
import clientPromise from "./mongodb";

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,

  database: async () => {
    const client = await clientPromise;
    return client.db("tileGallery");
  },

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});