import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/sveltekit/providers/github";
import { XataAdapter } from "@auth/xata-adapter";
import { XataClient } from "./xata";
import Credentials from "@auth/core/providers/credentials";

const xata = new XataClient({
  apiKey: import.meta.env.VITE_XATA_API_KEY,
  branch: import.meta.env.VITE_XATA_BRANCH,
});

export const handle = SvelteKitAuth({
  trustHost: true,
  adapter: XataAdapter(xata),
  session: {
    strategy: "jwt",
  },
  providers: [
    GitHub({
      clientId: import.meta.env.VITE_GITHUB_ID,
      clientSecret: import.meta.env.VITE_GITHUB_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "email" },
      },
      async authorize(credentials) {
        let user = null;

        user = await xata.db.nextauth_users
          .filter({
            email: credentials.email ?? "",
          })
          .getFirst();

        if (!user) {
          throw new Error("User was not found and could not be created.");
        }

        return user;
      },
    }),
  ],
  secret: import.meta.env.VITE_AUTH_SECRET,
});
